import { Account, User as AuthUser } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import User from "../models/User";
import connect from "../utils/db.js";

export const authOptions: any = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      // Configuration for the credentials provider (email/password)
      id: "credentials", 
      name: "Credentials", 
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }, 
      },
      async authorize(credentials: any) {
        // Authorization logic for credentials provider
        await connect(); // Connect to the database
        try {
          const user = await User.findOne({ email: credentials.email }); // Find user by email
          if (user) {
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            ); // Compare hashed password
            if (isPasswordCorrect) {
              return user; // Return user if password is correct
            }
          }
        } catch (err: any) {
          throw new Error(err); // Handle errors
        }
      },
    }),
    GoogleProvider({
      // Configuration for Google provider
      clientId: process.env.GOOGLE_ID ?? "",
      clientSecret: process.env.GOOGLE_SECRET ?? "", 
    }),
  ],
  callbacks: {
    // Callbacks for authentication events
    async signIn({ user, account }: { user: AuthUser; account: Account }) {
      // Handle sign-in events
      if (account?.provider == "credentials") {
        // If sign-in provider is credentials (email/password)
        return true; // Allow sign-in
      }
      if (account?.provider == "google") {
        // If sign-in provider is Google
        await connect(); // Connect to the database
        try {
          const existingUser = await User.findOne({ email: user.email }); // Check if user exists
          if (!existingUser) {
            // If user doesn't exist, create a new user
            const newUser = new User({
              email: user.email, // Set user's email
            });

            await newUser.save(); // Save new user to the database
            return true; // Allow sign-in
          }
          return true; // Allow sign-in for existing Google users
        } catch (err) {
          console.log("Error saving user", err); // Log error if saving user fails
          return false; // Deny sign-in
        }
      }
    },
  },
};

