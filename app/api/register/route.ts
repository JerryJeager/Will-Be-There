import User from "../../../src/models/User"; // Import User model
import connect from "../../../src/utils/db.js"; // Import database connection function
import bcrypt from "bcryptjs"; // Import bcrypt for password hashing
import { NextResponse } from "next/server"; // Import NextResponse for API response handling

export const POST = async (request: any) => {
  const { email, password } = await request.json(); // Get email and password from request body

  await connect(); // Connect to the database

  const existingUser = await User.findOne({ email }); // Check if user with the same email exists

  if (existingUser) {
    // If user already exists, return 400 status with error message
    return new NextResponse("Email is already in use", { status: 400 });
  }

  const hashedPassword = await bcrypt.hash(password, 5); // Hash the password
  const newUser = new User({
    email,
    password: hashedPassword, // Store hashed password in the database
  });

  try {
    await newUser.save(); // Save new user to the database
    // Return success response with status 200 and message
    return new NextResponse("User is registered", { status: 200 });
  } catch (err: any) {
    // If an error occurs during user creation, return 500 status with error message
    return new NextResponse(err, {
      status: 500,
    });
  }
};
