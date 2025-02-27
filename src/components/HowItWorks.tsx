"use client";
import { BackgroundGradient } from "./ui/background-gradient";
import React from "react";

export default function HowItWorks() {
  return (
    <div className="flex flex-col items-center">
      {/* Section Heading */}
      <h2 className="text-6xl sm:text-5xl font-bold text-center mb-6">
        How does it work?
      </h2>

      {/* Card Container */}
      <div className="flex flex-col sm:flex-row gap-8 justify-center items-stretch">
        <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900 flex flex-col h-full min-h-[300px]">
          <h3 className="text-base sm:text-3xl text-black mt-4 mb-2 dark:text-neutral-200 font-bold">
            Tell Us About Yourself
          </h3>
          <p className="flex-1">
            🔍 Enter your skills, experience, and job preferences. SkillSync’s AI analyzes your profile to find the best job opportunities tailored to you.
          </p>
        </BackgroundGradient>

        <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900 flex flex-col h-full min-h-[300px]">
          <h3 className="text-base sm:text-3xl text-black mt-4 mb-2 dark:text-neutral-200 font-bold">
            Personalized Matches
          </h3>
          <p className="flex-1">
            ⚡ No more endless searching! Get AI-powered job recommendations in seconds, customized to match your expertise and career goals.
          </p>
        </BackgroundGradient>

        <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900 flex flex-col h-full min-h-[300px]">
          <h3 className="text-base sm:text-3xl text-black mt-4 mb-2 dark:text-neutral-200 font-bold">
            Apply Effortlessly
          </h3>
          <p className="flex-1">
            📩 Apply effortlessly with a single click, track your applications, and manage your job search seamlessly—all in one place!
          </p>
        </BackgroundGradient>
      </div>
    </div>
  );
}
