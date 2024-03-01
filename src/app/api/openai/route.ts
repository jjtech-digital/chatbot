// Import the required modules from the OpenAI and Next.js packages
import OpenAI from "openai";
import { NextResponse } from "next/server";

export async function POST(req : any) {
  // Extract the user's form input from the request body
  const { form } = await req.json();
  // Check for the API key in the environment variables
  if (!process.env.OPENAI_API_KEY) {
    throw new Error("Missing env var OPENAI_API_KEY");
  }
  // Define the model to use and instantiate the OpenAI client with the API key
  const model = process.env.OPENAI_MODEL || "gpt-3.5-turbo";
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
  // Create the chat completion request with specific parameters
  const chatCompletion = await openai.chat.completions.create({
    model,
    messages: [
      {
        role: "system",
        content: `Speak as if you were a knight of the Middle Ages. Always express yourself with MAXIMUM enthusiasm! or End every sentence with 'and that's great! Dramatize every situation. Every question is an epic!`,
      },
      { role: "user", content: form },
    ],
    // Additional parameters to shape the response
    temperature: 0.7,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
    max_tokens: 200,
    n: 1,
  });
  // Return the chatbot's response to the client
  return NextResponse.json(chatCompletion?.choices?.[0]?.message?.content);
}
