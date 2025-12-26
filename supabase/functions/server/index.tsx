import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-04c842af/health", (c) => {
  return c.json({ status: "ok" });
});

// WhatsApp message sending endpoint
app.post("/make-server-04c842af/send-whatsapp", async (c) => {
  try {
    const { phone, message } = await c.req.json();
    
    if (!phone || !message) {
      return c.json({ error: "Phone and message are required" }, 400);
    }

    const apiKey = Deno.env.get("WASENDER_API_KEY");
    if (!apiKey) {
      console.error("WASENDER_API_KEY not configured");
      return c.json({ error: "API key not configured" }, 500);
    }

    console.log("Sending WhatsApp message to:", phone);

    // Call WASender API with correct endpoint and payload format
    const response = await fetch("https://wasenderapi.com/api/send-message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        to: phone,
        text: message,
      }),
    });

    console.log("WASender API response status:", response.status);

    // Get response text first to handle both JSON and non-JSON responses
    const responseText = await response.text();
    console.log("WASender API raw response:", responseText);

    // Try to parse as JSON
    let data;
    try {
      data = JSON.parse(responseText);
    } catch (e) {
      console.error("Failed to parse response as JSON:", responseText);
      return c.json({ 
        error: "Invalid API response", 
        details: `API returned non-JSON response: ${responseText.substring(0, 200)}`,
        status: response.status
      }, 500);
    }

    if (!response.ok) {
      console.error("WASender API error:", data);
      return c.json({ error: "Failed to send message", details: data }, response.status);
    }

    console.log("Message sent successfully!");
    return c.json({ success: true, data });
  } catch (error) {
    console.error("Error sending WhatsApp message:", error);
    return c.json({ error: "Internal server error", details: error.message }, 500);
  }
});

// YouTube subscriber count endpoint
app.get("/make-server-04c842af/youtube-subscribers", async (c) => {
  try {
    console.log("Fetching YouTube subscriber count from cache");

    // Only return cached data (YouTube Data API not working with available credentials)
    const cached = await kv.get("youtube_subscribers_cache");
    const cacheAge = await kv.get("youtube_subscribers_cache_time");
    
    if (cached) {
      console.log("Returning cached subscriber count:", cached);
      return c.json({ 
        success: true, 
        subscriberCount: parseInt(cached),
        formattedCount: formatNumber(parseInt(cached)),
        cached: true,
        lastUpdate: cacheAge ? new Date(parseInt(cacheAge)).toISOString() : null
      });
    }

    // No data available
    console.log("No subscriber data available");
    return c.json({ 
      success: true, 
      subscriberCount: 0,
      formattedCount: "N/A",
      cached: false,
      lastUpdate: null
    });

  } catch (error) {
    console.error("Error fetching YouTube subscribers:", error);
    return c.json({ 
      success: true, 
      subscriberCount: 0,
      formattedCount: "N/A",
      lastUpdate: null
    });
  }
});

// Manual update endpoint for YouTube subscribers
app.post("/make-server-04c842af/youtube-subscribers/update", async (c) => {
  try {
    const { count } = await c.req.json();
    
    if (!count || isNaN(count)) {
      return c.json({ error: "Valid subscriber count is required" }, 400);
    }

    const subscriberCount = parseInt(count);
    await kv.set("youtube_subscribers_cache", subscriberCount.toString());
    await kv.set("youtube_subscribers_cache_time", Date.now().toString());
    
    console.log("Manually updated subscriber count to:", subscriberCount);
    
    return c.json({ 
      success: true, 
      subscriberCount: subscriberCount,
      formattedCount: formatNumber(subscriberCount)
    });
  } catch (error) {
    console.error("Error updating YouTube subscribers:", error);
    return c.json({ error: "Internal server error", details: error.message }, 500);
  }
});

// Helper function to format numbers
function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "M";
  } else if (num >= 1000) {
    return (num / 1000).toFixed(1) + "K";
  }
  return num.toString();
}

Deno.serve(app.fetch);