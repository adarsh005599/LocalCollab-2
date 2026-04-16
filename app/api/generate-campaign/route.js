import { CohereClientV2 } from "cohere-ai";

const cohere = new CohereClientV2({ token: process.env.COHERE_API_KEY });

export async function POST(req) {
  try {
    const { businessType, location, goal, budget } = await req.json();

    const response = await cohere.chat({
      model: "command-a-03-2025",
      messages: [
        {
          role: "user",
          content: `You are a marketing expert.

Create a hyperlocal influencer marketing campaign.

Business: ${businessType}
Location: ${location}
Goal: ${goal}
Budget: ${budget}

Give output in this format:

🎥 Reel Idea:
✍️ Caption:
🔥 Hashtags:
👤 Influencer Type:

Keep it short, creative and realistic.`,
        },
      ],
    });

    const text = response.message.content[0].text;

    return Response.json({
      success: true,
      data: text,
    });

  } catch (error) {
    console.error("Route error:", error.message);
    return Response.json({
      success: false,
      error: error.message,
    });
  }
}