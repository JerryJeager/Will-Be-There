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
    <div>
      <div className="p-8">
        <h1 className="font-semibold mb-8 text-blue-500">
          Register
        </h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter you email"
            required
          />
          <input
            type="password"
            placeholder="Enter you password"
            required
          />
          <button
            type="submit"
          >
            Register
          </button>
          <p className="text-red-600 text-[16px] mb-4">{error && error}</p>
        </form>
        {/* <Link href="/login" className="block text-center text-blue-500 hover:underline mt-2 text-lg">
          Login with an existing account
        </Link> */}
      </div>
    </div>
  );
};

export default Signup;
