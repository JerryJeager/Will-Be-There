"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useState } from "react";
// import { FaEye } from "react-icons/fa";
// import { FaEyeSlash } from "react-icons/fa";

const Signup = () => {
  const [error, setError] = useState("");
  const router = useRouter();

  // const isValEmail = (email: string) => {
  //   const emailRegex =
  //     /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  //   return emailRegex.test(email);
  // };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const email = e.target[1].value;
    const password = e.target[2].value;

    // if (!isValEmail(email)) {
    //   setError("This email is invalid");
    //   return;
    // }

    if (!password || password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    try {
      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (res.status === 400) {
        setError("This email is already registered");
      }
      if (res.status === 200) {
        setError("");
        router.push("/auth/login");
      }
    } catch (error) {
      setError("Error, try again");
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col justify-start items-center lg:min-h-screen">
      <div className="flex flex-col justify-stretch items-center p-4 sm:px-24">
        <div className="flex flex-col mb-8">
          <h1 className="text-[2.5rem] text-center font-bold mb-4 text-[#000000]">
            Sign up
          </h1>
          <p className="text-[1rem] px-2 text-center text-[rgb(119,118,128)] font-medium">
            Create a personal account for your event by completing the
            requirement
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col justify-center"
        >
          <label
            htmlFor="name"
            className="text-[#1f1f1f] flex flex-col  sm:text-sm"
          >
            Name
            <input
              className="px-3 py-3 shadow border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md w-full flex appearance-none focus:outline-none focus:shadow-outline focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm mb-4"
              type="text"
              id="name"
              placeholder="Enter Your Name"
              required
            />
          </label>

          <label
            htmlFor="email"
            className="text-[#1f1f1f] flex flex-col  sm:text-sm"
          >
            Email
            <input
              className="px-3 py-3 shadow border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md w-full flex appearance-none focus:outline-none focus:shadow-outline focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm mb-4"
              type="text"
              id="email"
              placeholder="Enter Your Email"
              required
            />
          </label>
          <label
            htmlFor="password"
            className="text-[#1f1f1f] flex flex-col  sm:text-sm"
          >
            Password
            <input
              type="password"
              id="password"
              placeholder="Enter Your Password"
              className="px-3 py-3 shadow border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md w-full flex appearance-none focus:outline-none focus:shadow-outline focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm mb-4"
              required
            />
            {/* <button>
            <FaEye />
          </button>
          <button>
            <FaEyeSlash />
          </button> */}
          </label>
          <button
            type="submit"
            className="w-full bg-[#0D35FB] rounded-lg text-white py-2 hover:bg-blue-600 text-lg"
          >
            Create Account
          </button>
          <p className="text-red-600 text-[16px] mb-4">{error && error}</p>
        </form>
        <div className="w-full flex flex-row justify-center items-center text-gray-500 pb-4">
          - or -
        </div>
        <button
          onClick={() => {
            signIn("google"); // Sign in with Google
          }}
          className="w-full border-2 border-blue-600 py-2 rounded-lg bg-white text-lg text-[#0B195B] hover:border-[#0B195B]"
        >
          Continue with Google
        </button>
        <Link
          href="/auth/login"
          className="block text-center text-blue-500 hover:underline mt-2 text-lg"
        >
          Login with an existing account
        </Link>
      </div>
    </div>
  );
};

export default Signup;
