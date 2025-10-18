import type { APIRoute } from "astro";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { email } = body;

    // Validate email
    if (!email || typeof email !== "string") {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Email address is required",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } },
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Invalid email address",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } },
      );
    }

    // Get n8n webhook URL from environment
    const webhookUrl = import.meta.env.PUBLIC_NEWSLETTER_N8N_WEBHOOK_URL;

    if (!webhookUrl) {
      console.error("N8N_WEBHOOK_URL is not configured");
      return new Response(
        JSON.stringify({
          success: false,
          message:
            "Newsletter service is not configured. Please try again later.",
        }),
        { status: 500, headers: { "Content-Type": "application/json" } },
      );
    }

    // Forward to n8n webhook
    const n8nResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (!n8nResponse.ok) {
      console.error(
        "n8n webhook failed:",
        n8nResponse.status,
        n8nResponse.statusText,
      );
      return new Response(
        JSON.stringify({
          success: false,
          message: "Failed to subscribe. Please try again later.",
        }),
        { status: 500, headers: { "Content-Type": "application/json" } },
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: "Successfully subscribed! Check your inbox for confirmation.",
      }),
      { status: 200, headers: { "Content-Type": "application/json" } },
    );
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    return new Response(
      JSON.stringify({
        success: false,
        message: "An unexpected error occurred. Please try again later.",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }
};
