import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

export async function POST(req: NextRequest) {
  try {
    const { routebookId, routebookTitle, depositAmount } = await req.json();

    if (!routebookId || !routebookTitle || !depositAmount) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Fallback: If Stripe secret key is not set, simulate redirect to success page
    if (!stripeSecretKey || stripeSecretKey.includes("dummy")) {
      const mockSessionId = "cs_test_" + Math.random().toString(36).substring(2, 15);
      const simulatedUrl = `${req.nextUrl.origin}/stripe/success?session_id=${mockSessionId}&title=${encodeURIComponent(
        routebookTitle
      )}&amount=${depositAmount}`;

      return NextResponse.json({
        simulated: true,
        url: simulatedUrl,
      });
    }

    // Real Stripe Integration
    const stripe = new Stripe(stripeSecretKey, {
      apiVersion: "2025-01-27.accredited-gratis" as unknown as Stripe.StripeConfig["apiVersion"], // fallback standard
    });

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "inr",
            product_data: {
              name: `Refundable Date Booking Hold: ${routebookTitle}`,
              description: `Secures package dates & pricing tier for Routebook #${routebookId}. Fully refundable.`,
            },
            unit_amount: depositAmount * 100, // in paise (smallest currency unit)
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${req.nextUrl.origin}/stripe/success?session_id={CHECKOUT_SESSION_ID}&title=${encodeURIComponent(
        routebookTitle
      )}&amount=${depositAmount}`,
      cancel_url: `${req.nextUrl.origin}/routebooks/${routebookId}`,
    });

    return NextResponse.json({ id: session.id, url: session.url });
  } catch (error) {
    console.error("Stripe Checkout Route Error:", error);
    const errMsg = error instanceof Error ? error.message : "Internal Server Error";
    return NextResponse.json({ error: errMsg }, { status: 500 });
  }
}
