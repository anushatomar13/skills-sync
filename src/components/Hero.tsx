import { FlipText } from "@/components/magicui/flip-text";
import { PulsatingButton } from "./magicui/pulsating-button";
import { NumberTicker } from "./magicui/number-ticker";
export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 sm:px-12 lg:px-20 py-16 gap-8 text-center">
      {/* Main Heading */}
      <FlipText className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-black dark:text-white">
        Skill Sync⚡
      </FlipText>

      {/* Subheading */}
      <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-lg sm:max-w-2xl opacity-100 animate-fadeIn">
        Let SkillSync match you with the best job opportunities based on your skills, experience, and preferences. Say goodbye to endless searching—get AI-powered job recommendations in seconds!
      </p>

      {/* Button */}
      <div>
        <PulsatingButton className="px-4 py-3 text-lg opacity-100 animate-fadeIn">
          Explore now
        </PulsatingButton>
      </div>
      <div>
        <p className="text-5xl font-bold font-sans">
            Helped more than <NumberTicker
      value={2109} 
      className="whitespace-pre-wrap text-7xl font-medium tracking-tighter text-black dark:text-yellow-500"
    /> students to land a job!
        </p>
        </div>
    </div>
  );
}
