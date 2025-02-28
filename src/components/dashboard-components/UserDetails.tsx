"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function CareerSuggestion() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    location: "",
    skills: "",
    experience: "",
    job_title: "",
    education: "",
    preferred_roles: "",
    job_type: "",
    preferred_industries: "",
    salary_expectations: "",
  });

  const [options, setOptions] = useState<string[]>([]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function fetchCareerOptions() {
    const requestData = {
      skills: formData.skills,
      experience: formData.experience,
      job_type: formData.job_type,
      preferred_roles: formData.preferred_roles,
      preferred_industries: formData.preferred_industries,
    };

    const res = await fetch("/api/groq", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestData),
    });

    const data = await res.json();

    if (data.careerOptions) {
      setOptions(data.careerOptions);
    } else {
      alert(data.error || "Error fetching career suggestions!");
    }
  }

  return (
    <div className="p-6 space-y-4">
      {Object.keys(formData).map((key) => {
        const typedKey = key as keyof typeof formData;
        return (
          <Input
            key={typedKey}
            name={typedKey}
            placeholder={typedKey.replace(/_/g, " ").toUpperCase()}
            value={formData[typedKey]}
            onChange={handleChange}
            className="w-full max-w-2xl h-14 p-4 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
          />
        );
      })}

      <Button onClick={fetchCareerOptions}>Get Career Suggestions</Button>

      <div className="flex flex-col space-y-4 py-4">
        {options.map((option, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-md">
            {option}
          </div>
        ))}
      </div>
    </div>
  );
}