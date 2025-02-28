"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase";

import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import Link from "next/link";

const Register: React.FC = () => {
    const router = useRouter();
    
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string>("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");
    
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(userCredential.user, { displayName: firstName });
            router.push("/dashboard");
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("An unexpected error occurred");
            }
        }
    };
    

    return (
        <div className="min-h-screen flex items-center justify-center py-12 px-4 dark:bg-dot-white/[0.5] ">
            <div className="max-w-md w-full p-8 rounded-lg shadow-xl">
                <h2 className="text-4xl font-bold text-cyan-400 mb-6 text-center">Register</h2>
                {error && <p className="text-red-500 text-center">{error}</p>}
                
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                        <input
                            type="text"
                            placeholder="First Name"
                            className="w-full p-3 bg-gray-700 text-white rounded border border-cyan-400/30"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            className="w-full p-3 bg-gray-700 text-white rounded border border-cyan-400/30"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
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
                        Create Account
                    </button>
                </form>

                <p className="mt-6 text-center text-sm text-gray-400">
                    Already a user?{" "}
                    <Link href="/login" className="text-cyan-400">Log In Here</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
