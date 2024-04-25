"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

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
      <div className="flex flex-col justify-start lg:min-h-screen">
        <div className="flex flex-col justify-stretch gap-[1rem] items-start p-4 sm:px-24">
          <div className="flex flex-col justify-center items-center mb-4 mx-auto">
            <h1 className="text-4xl text-center font-bold mb-2 text-[#000000]">
              Welcome Back!
            </h1>
            <p className="text-[1rem] text-center text-[rgb(119,118,128)] font-medium">Kindly enter your login details</p>            
          </div>

          <form onSubmit={handleSubmit} className="w-full flex flex-col justify-center">
            {/* Email input field */}
            <label htmlFor="email" className="text-[#1f1f1f] flex flex-col  sm:text-sm">
              Email
              <input
                type="text"
                className="rounded-md shadow appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm mb-4"
                placeholder="Enter Your Email"
                required
              />
            </label>
            {/* Password input field */}
            <label htmlFor="password" className="text-[#1f1f1f] flex flex-col  sm:text-sm">
              Password
            <input
              type="password"
              className="rounded-md shadow appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
              placeholder="Enter Your Password"
              required
            />
            </label>
            <Link href="#" className="flex flex-row justify-end items-center text-[0.75rem] mb-4">
              <p className="hover:text-blue-500">Forgot password?</p>
            </Link>
            {/* Submit button */}
            <button
              type="submit"
              className="w-full bg-[#0D35FB] rounded-lg text-white py-2 hover:bg-blue-600 text-lg"
            >
              Log In
            </button>
            {/* Error message */}
            <p className="text-red-600 text-[16px] mb-4">{error && error}</p>
          </form>
          <div className="w-full flex flex-row justify-center items-center text-gray-500 pb-4">- or -</div>
          {/* Sign in with Google button */}
          <button
            className="w-full bg-white text-[#0B195B] py-2 border-2 rounded-lg border-blue-600 text-lg"
            onClick={() => {
              signIn("google"); // Sign in with Google
            }}
          >
            Sign In with Google
          </button>
          {/* Or register link */}
          {/* <div className="w-full flex flex-row justify-center items-center text-gray-500 mt-4">- OR -</div> */}
          <Link
            className="block text-center mx-auto text-blue-500 hover:underline mt-2 text-lg"
            href="/auth/signup">
            Register Here
          </Link>
        </div>
      </div>
    )
  );
};

export default Login;
