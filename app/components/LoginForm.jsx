"use client";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
      if (res.error) {
        setError("Invalid Credentials");
        return;
      }
      router.replace("dashboard");
    } catch (error) {}
  };

  return (
    <div className="grid place-content-center mt-36">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-purple-600">
        <h1 className="text-xl font-bold my-4">Login</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <button className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white font-bold cursor-pointer px-6 py-2">
            Login
          </button>

          {error && (
            <div className="bg-red-500 text-white text-sm font-bold w-fit py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}
          <Link className="text-sm mt-3 text-right" href={"/Signup"}>
            Don't have an account?
            <span className="underline px-1">Register</span>
          </Link>
        </form>
      </div>
    </div>
  );
}
