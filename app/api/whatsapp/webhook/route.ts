import { NextRequest, NextResponse } from "next/server";

// Verify token for Facebook Webhook setup (can be configured in .env.local)
const WHATSAPP_VERIFY_TOKEN = process.env.WHATSAPP_VERIFY_TOKEN || "beyond_d_trip_verify_secret_123";

// GET /api/whatsapp/webhook - handles verification challenge from Meta/Facebook
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const mode = searchParams.get("hub.mode");
  const token = searchParams.get("hub.verify_token");
  const challenge = searchParams.get("hub.challenge");

  if (mode && token) {
    if (mode === "subscribe" && token === WHATSAPP_VERIFY_TOKEN) {
      console.log("WhatsApp Cloud API webhook verified successfully.");
      return new Response(challenge, { status: 200 });
    } else {
      return new Response("Forbidden", { status: 403 });
    }
  }
  return new Response("Bad Request", { status: 400 });
}

// POST /api/whatsapp/webhook - handles incoming chat notifications and triage payloads
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Log the incoming message event structure for developer diagnostics
    console.log("Received WhatsApp Webhook Payload:", JSON.stringify(body, null, 2));

    // WhatsApp Cloud API sends payloads nested in entry > changes > value > messages
    const entry = body.entry?.[0];
    const change = entry?.changes?.[0];
    const value = change?.value;
    
    if (value && value.messages) {
      const message = value.messages[0];
      const from = message.from; // Sender's phone number
      const text = message.text?.body; // Message body text
      const name = value.contacts?.[0]?.profile?.name || "Traveller";

      console.log(`Incoming message from ${name} (${from}): "${text}"`);

      /**
       * Triage automation scaffold:
       * 1. Check if user is starting a dialogue.
       * 2. Trigger automated welcome templates or collect user preferences.
       * 3. Forward message payload to a live concierge chat dashboard.
       */
      
      // Sample mock response logic setup placeholder
      /*
      await sendWhatsAppTemplate(from, "welcome_triage", {
        name: name,
        concierge_name: "Aarya"
      });
      */
    }

    // Always respond with 200 OK to WhatsApp API to prevent retries
    return NextResponse.json({ status: "EVENT_RECEIVED" });
  } catch (error) {
    console.error("WhatsApp Webhook processing error:", error);
    const errMsg = error instanceof Error ? error.message : "Internal Server Error";
    return NextResponse.json({ error: errMsg }, { status: 500 });
  }
}

// Simulated automated template messenger stub
/*
async function sendWhatsAppTemplate(to: string, templateName: string, parameters: Record<string, string>) {
  const token = process.env.WHATSAPP_ACCESS_TOKEN;
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
  if (!token || !phoneNumberId) return;

  const url = `https://graph.facebook.com/v18.0/${phoneNumberId}/messages`;
  // send fetch call here...
}
*/
