// app/api/news/route.js

export async function GET() {
  const url = `https://gnews.io/api/v4/top-headlines?lang=en&country=my&topic=technology&max=9&token=faf8cec790a2f800051e466fbbb86fa3`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      const errorText = await response.text();
      console.error("GNews API error:", response.status, errorText);
      return new Response(JSON.stringify({ error: errorText }), {
        status: response.status,
      });
    }

    const data = await response.json();
    return new Response(JSON.stringify(data.articles), {
      status: 200,
    });
  } catch (error) {
    console.error("Server error:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch news" }), {
      status: 500,
    });
  }
}
