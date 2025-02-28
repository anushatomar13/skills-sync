import { NextResponse } from "next/server";
import Groq from "groq-sdk";

const groqApiKey = process.env.GROQ_API_KEY;

if (!groqApiKey) {
  throw new Error("GROQ_API_KEY is missing from environment variables!");
}

const groq = new Groq({ apiKey: groqApiKey });

export async function POST(request: Request) {
  try {
    const {
      skills,
      experience,
      job_type,
      preferred_roles,
      preferred_industries,
    } = await request.json();

    if (!skills || !experience || !job_type || !preferred_roles || !preferred_industries) {
      return NextResponse.json(
        { error: "All fields are required for better career suggestions!" },
        { status: 400 }
      );
    }

    const prompt = `
      I am looking for career guidance. Here is my profile:
      - Skills: ${skills}
      - Experience: ${experience} years
      - Preferred Job Type: ${job_type}
      - Preferred Roles: ${preferred_roles}
      - Preferred Industries: ${preferred_industries}

      Based on this information, give me 5 sample dummy job postings that best suit my profile. 
      Provide the response in a numbered list format.
    `;

    const careerSuggestion = await groq.chat.completions.create({
      messages: [{ role: "user", content: prompt }],
      model: "llama3-8b-8192",
    });

    console.log("Groq API Full Response:", JSON.stringify(careerSuggestion, null, 2));

    const responseMessage = careerSuggestion.choices[0]?.message?.content?.trim() || "";
    console.log("Extracted Content:", responseMessage);

    if (!responseMessage) {
      return NextResponse.json({ error: "No response from Groq" }, { status: 500 });
    }

    let careerOptions = responseMessage.match(/\d+\.\s*(.+)/g)?.map(option => option.replace(/^\d+\.\s*/, "").trim()) || [];

    if (careerOptions.length < 5) {
      careerOptions = responseMessage.split("\n").slice(0, 5).map(opt => opt.trim()).filter(Boolean);
    }

    if (careerOptions.length !== 5) {
      return NextResponse.json(
        { error: "Invalid response format from Groq" },
        { status: 500 }
      );
    }

    console.log("Final Career Options:", careerOptions);

    return NextResponse.json({ careerOptions });
  } catch (error) {
    console.error("Error in /api/groq:", error);
    return NextResponse.json(
      { error: "An error occurred while processing your request" },
      { status: 500 }
    );
  }
}
