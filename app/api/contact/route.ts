import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const recipient = "infantashil55@gmail.com";
    const serviceName = subject || "UI/UX Design";
    const senderName = name.trim();
    const senderEmail = email.trim();
    const clientMessage = message.trim();

    // Payload formatted to clearly notify Infant Ashil
    const payload = {
      "Client Name": senderName,
      "Client Email": senderEmail,
      "Interested In Service": serviceName,
      "Client Message": clientMessage,
      "Lead Status": `${senderName} is interested in ${serviceName} and has submitted a new inquiry on AAA isolutions!`,
      _subject: `🔔 [AAA isolutions] ${senderName} is interested in ${serviceName}!`,
      _replyto: senderEmail,
      _template: "table",
      _captcha: "false",
    };

    const res = await fetch(`https://formsubmit.co/ajax/${recipient}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(4000),
    });

    const data = await res.json().catch(() => ({}));

    return NextResponse.json({
      success: res.ok,
      message: `Notification email dispatched to ${recipient}: ${senderName} is interested in ${serviceName}`,
      data,
    });
  } catch (error: any) {
    // Return friendly JSON even on timeout or error
    return NextResponse.json(
      { success: false, error: error?.message || "Failed to process message" },
      { status: 200 }
    );
  }
}
