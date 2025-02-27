"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "@/lib/auth";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e:any) => {
    e.preventDefault();
    const { data, error } = await signIn(email, password);
    if (error) return setError(error.message);

    // Redirect to dashboard after login
    router.push("/dashboard");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <form onSubmit={handleLogin} className="bg-gray-800 p-6 rounded shadow-md w-96">
        <h2 className="text-white text-xl font-semibold mb-4">Login</h2>
        {error && <p className="text-red-500">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mt-2 border rounded bg-gray-700 text-white"
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
        <button type="submit" className="w-full mt-4 py-2 bg-purple-600 text-white rounded">
          Login
        </button>
      </form>
    </div>
  );
}
