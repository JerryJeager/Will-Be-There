"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevShow) => !prevShow);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://will-be-there.onrender.com/api/v1/users/login",
        formData
      );
      const { token, user_id } = response.data;
    sessionStorage.setItem("token", token);
    sessionStorage.setItem("user_id", user_id);

      router.push("/dashboard");
      if (response.status === 200) {
        alert("login successful");
      }
      if (response.status === 401) {
        setError("Token is missing");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      // Handle error (e.g., show error message to the user)
      setError("Error logging in");
    }
  };

  return (
    <div className="flex flex-col justify-start lg:min-h-screen">
      <div className="flex flex-col justify-stretch gap-[1rem] items-start p-4 sm:px-24">
        <div className="flex flex-col justify-center items-center mb-4 mx-auto">
          <h1 className="text-4xl text-center font-bold mb-2 text-[#000000]">
            Welcome Back!
          </h1>
          <p className="text-[1rem] text-center text-[rgb(119,118,128)] font-medium">
            Kindly enter your login details
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col justify-center"
        >
          <label
            htmlFor="email"
            className="text-[#1f1f1f] flex flex-col  sm:text-sm"
          >
            Email
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="rounded-md shadow appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm mb-4"
              placeholder="Enter Your Email"
              required
            />
          </label>
          {/* Password input field */}
          <label
            htmlFor="password"
            className="text-[#1f1f1f] flex flex-col  sm:text-sm"
          >
            Password
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="rounded-md shadow appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm"
                placeholder="Enter Your Password"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 flex items-center pr-3 z-10"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </label>
          <Link
            href="#"
            className="flex flex-row justify-end items-center text-[0.75rem] mb-4"
          >
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
        <div className="w-full flex flex-row justify-center items-center text-gray-500 pb-4">
          - or -
        </div>
        {/* Sign in with Google button */}
        <button className="w-full bg-white text-[#0B195B] py-2 border-2 rounded-lg border-blue-600 text-lg">
          Sign In with Google
        </button>
        <Link
          className="block text-center mx-auto text-blue-500 hover:underline mt-2 text-lg"
          href="/auth/signup"
        >
          Register Here
        </Link>
      </div>
    </div>
  );
};

export default Login;
