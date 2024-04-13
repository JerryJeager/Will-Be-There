"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const [error, setError] = useState(""); // State to manage error messages
  const { data: session, status: sessionStatus } = useSession(); // useSession hook to manage user session

  useEffect(() => {
    if (sessionStatus === "authenticated") {
      // Redirect to dashboard if user is authenticated
      router.replace("/dashboard");
    }
  }, [sessionStatus, router]);

  const isValidEmail = (email: string) => {
    // Function to validate email format using regex
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault(); 
    const email = e.target[0].value; // Get email from form input
    const password = e.target[1].value; // Get password from form input

    if (!isValidEmail(email)) {
      // Validate email format
      setError("Email is invalid");
      return;
    }

    if (!password || password.length < 8) {
      // Validate password length
      setError("Password is invalid");
      return;
    }

    const res = await signIn("credentials", {
      // Sign in with credentials (email and password)
      redirect: false, // Do not redirect after sign-in
      email,
      password,
    });

    if (res?.error) {
      // Handle sign-in errors
      setError("Invalid email or password");
      if (res?.url) router.replace("/dashboard"); 
    } else {
      setError(""); // Clear error message
    }
  };

  if (sessionStatus === "loading") {
    // Show loading message while session status is loading
    return <h1>Loading...</h1>;
  }

  return (
    // Render login form if user is not authenticated
    sessionStatus !== "authenticated" && (
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="p-8 rounded w-[28rem]">
          <h1 className="text-4xl text-center font-semibold mb-8 text-blue-500">
            Login
          </h1>
          <form onSubmit={handleSubmit}>
            {/* Email input field */}
            <input
              type="text"
              className="rounded-md appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm mb-4"
              placeholder="Email"
              required
            />
            {/* Password input field */}
            <input
              type="password"
              className="rounded-md appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm mb-4"
              placeholder="Password"
              required
            />
            {/* Submit button */}
            <button
              type="submit"
              className="w-full bg-blue-500 rounded-lg text-white py-2 hover:bg-blue-600 text-lg"
            >
              Sign In
            </button>
            {/* Error message */}
            <p className="text-red-600 text-[16px] mb-4">{error && error}</p>
          </form>
          {/* Sign in with Google button */}
          <button
            className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 text-lg"
            onClick={() => {
              signIn("google"); // Sign in with Google
            }}
          >
            Sign In with Google
          </button>
          {/* Or register link */}
          <div className="text-center text-gray-500 mt-4">- OR -</div>
          <Link
            className="block text-center text-blue-500 hover:underline mt-2 text-lg"
            href="/signup"
          >
            Register Here
          </Link>
        </div>
      </div>
    )
  );
};

export default Login;
