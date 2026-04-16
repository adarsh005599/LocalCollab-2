import { CohereClientV2 } from "cohere-ai";

const cohere = new CohereClientV2({ token: process.env.COHERE_API_KEY });

export async function POST(req) {
  try {
    const { searchQuery, location } = await req.json();

    const response = await cohere.chat({
      model: "command-a-03-2025",
      messages: [
        {
          role: "user",
          content: `Find 3 real-life, active influencers in ${location} for the niche: ${searchQuery}. 
          Return ONLY a JSON array of objects with these keys: name, handle, followers, engagement, bio, platform.
          Do not include any conversational text.`
        },
      ],
    });

    // Extracting and cleaning the JSON from potential markdown blocks
    let rawText = response.message.content[0].text;
    const jsonBody = rawText.replace(/```json/g, "").replace(/```/g, "").trim();
    const creators = JSON.parse(jsonBody);

    return Response.json({ success: true, creators });
  } catch (error) {
    console.error("Discovery Error:", error);
    return Response.json({ success: false, creators: [] });
  }
}