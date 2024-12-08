"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("Please Enter All Values!!");
      return;
    } else {
      setError("");
    }

    try {
      const resUserExist = await fetch("api/userExist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      const { user } = await resUserExist.json();
      if (user) {
        setError("User Already Exist");
        return;
      }

      const res = await fetch("api/signingup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (res.ok) {
        const form = e.target;
        form.reset();
        router.push("/Login");
      } else {
      }
    } catch (error) {}
  };

  return (
    <div className="grid place-content-center mt-36">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-purple-600">
        <h1 className="text-xl font-bold my-4">Register</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Full Name"
          />
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
            Register
          </button>

          {error && (
            <div className="bg-red-500 text-white text-sm font-bold w-fit py-1 px-3 rounded-md mt-2">
              {error}
            </div>
          )}
          <Link className="text-sm mt-3 text-right" href={"/Login"}>
            Already have an account?
            <span className="underline px-1">Login</span>
          </Link>
        </form>
      </div>
    </div>
  );
}
