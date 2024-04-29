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
    <div className="flex flex-col justify-start mt-10">
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
            className="text-[#1f1f1f] sm:text-sm"
          >
             <span className="font-semibold">Email</span>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="rounded-md appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 outline-none focus:border-[#0D35FB] sm:text-sm mb-4"
              placeholder="Enter Your Email"
              required
            />
          </label>
          {/* Password input field */}
          <label
            htmlFor="password"
            className="text-[#1f1f1f] sm:text-sm"
          >
             <span className="font-semibold">Password</span>
            <div className="relative ">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="rounded-md appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 outline-none focus:border-[#0D35FB] sm:text-sm mb-4"
                placeholder="Enter Your Password"
                required
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute top-[28%] flex justify-end self-center right-4 z-10"
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
            className="w-full bg-[#0D35FB] rounded-lg text-white py-2 hover:bg-blue-600 text-lg font-semibold transition-all ease-in"
          >
            Log In
          </button>
          {/* Error message */}
          <p className="text-red-600 text-[16px] mb-4">{error && error}</p>
        </form>
        <Link
          className="block text-center mx-auto text-blue-500 hover:underline text-lg"
          href="/auth/signup"
        >
          New user? Register Here
        </Link>
      </div>
    </div>
  );
};

export default Login;
