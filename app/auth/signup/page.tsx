"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Signup = () => {
  const [error, setError] = useState("");
  const router = useRouter();

  const isValEmail = (email: string) => {
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    if (!isValEmail(email)) {
      setError("This email is invalid");
      return;
    }

    if (!password || password.lengh < 8) {
      setError("This password is invalid");
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
        router.push("/login");
      }
    } catch (error) {
      setError("Error, try again");
      console.log(error);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="p-8 rounded w-[28rem]">
        <h1 className="text-4xl text-center font-semibold mb-8 text-blue-500">
          Register
        </h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="rounded-md appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm mb-4"
            placeholder="Enter you email"
            required
          />
          <input
            type="password"
            className="rounded-md appearance-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm mb-4"
            placeholder="Enter you password"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 rounded-lg text-white py-2 hover:bg-blue-600 text-lg"
          >
            Register
          </button>
          <p className="text-red-600 text-[16px] mb-4">{error && error}</p>
        </form>
        <Link href="/login" className="block text-center text-blue-500 hover:underline mt-2 text-lg">
          Login with an existing account
        </Link>
      </div>
    </div>
  );
};

export default Signup;
