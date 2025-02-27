"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function SignupPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(""); // Reset error state

    const { data, error } = await supabase.auth.signUp({ email, password });

    if (error) return setError(error.message);

    // Redirect to login after successful signup
    router.push("/login");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <form
        onSubmit={handleSignup}
        className="bg-gray-800 p-6 rounded shadow-md w-96"
      >
        <h2 className="text-white text-xl font-semibold mb-4">Sign Up</h2>

        {error && <p className="text-red-500">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded bg-gray-700 text-white"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mt-2 border rounded bg-gray-700 text-white"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full mt-4 p-2 bg-purple-600 text-white rounded"
        >
          Sign Up
        </button>

        <p className="text-gray-400 mt-3 text-sm">
          Already have an account?{" "}
          <a href="/login" className="text-purple-400">
            Login
          </a>
        </p>
      </form>
    </div>
  );
}
