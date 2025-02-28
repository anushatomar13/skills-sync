"use client";

import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase"; // ✅ Correct import
import { toast } from "react-toastify";
import Link from "next/link";

const Login: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("User logged in Successfully", { position: "top-center" });
      router.push("/dashboard");
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
        toast.error(err.message, { position: "bottom-center" });
      } else {
        setError("An unexpected error occurred");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 dark:bg-dot-white/[0.5] ">
      <div className="max-w-md w-full bg-black-800 p-8 rounded-lg shadow-xl">
        <h2 className="text-4xl font-bold text-cyan-400 mb-6 text-center"> Login </h2>
        {error && <p className="text-red-500 text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 bg-gray-700 text-white rounded border border-cyan-400/30"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 bg-gray-700 text-white rounded border border-cyan-400/30"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-cyan-400 text-gray-900 rounded hover:bg-cyan-300 transition-colors duration-300 font-mono"
          >
            Log In
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-400">
          New user? <Link href="/signup" className="text-cyan-400">Register Here</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
