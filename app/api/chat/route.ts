// app/api/chat/route.ts

import { NextResponse } from "next/server";
import { groq } from "@/lib/groq";

export async function POST(req: Request) {
  console.log("Groq Key:", process.env.GROQ_API_KEY);

  const { message } = await req.json();

  const completion = await groq.chat.completions.create({
    model: "llama-3.1-8b-instant", // or "llama-3.1-70b-versatile"
    messages: [{ role: "user", content: message }],
  });

  return NextResponse.json({
    reply: completion.choices[0].message.content,
  });
}
