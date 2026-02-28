import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Missing fields" }), {
        status: 400,
      });
    }

    /* -------------------------------------------------
       1️⃣ EMAIL TO YOU (PORTFOLIO OWNER)
    ------------------------------------------------- */
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
      reply_to: email,
      subject: `New contact message from ${name}`,
      html: `
        <div style="
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
          background-color: #0f0f14;
          padding: 32px;
          color: #ffffff;
        ">
          <div style="
            max-width: 520px;
            margin: 0 auto;
            background-color: #16161d;
            border-radius: 12px;
            padding: 24px;
            border: 1px solid rgba(255,255,255,0.08);
          ">
            <h2 style="color:#c7d2fe;">New Contact Message</h2>

            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>

            <div style="
              margin-top: 16px;
              padding: 16px;
              background-color: #0f0f14;
              border-radius: 8px;
              border: 1px solid rgba(255,255,255,0.06);
            ">
              ${message.replace(/\n/g, "<br />")}
            </div>
          </div>
        </div>
      `,
    });

    /* -------------------------------------------------
       2️⃣ AUTO-REPLY EMAIL (TO SENDER)
    ------------------------------------------------- */
    await resend.emails.send({
      from: "Yatish Patil <onboarding@resend.dev>",
      to: email,
      subject: "Thanks for reaching out — I’ll get back to you soon",
      html: `
        <div style="
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
          background-color: #0f0f14;
          padding: 32px;
          color: #ffffff;
        ">
          <div style="
            max-width: 520px;
            margin: 0 auto;
            background-color: #16161d;
            border-radius: 12px;
            padding: 24px;
            border: 1px solid rgba(255,255,255,0.08);
          ">
            <h2 style="color:#c7d2fe;">Thanks for getting in touch 👋</h2>

            <p>Hi ${name},</p>

            <p>
              Thanks for reaching out through my portfolio.
              I’ve received your message and will review it shortly.
            </p>

            <p>
              I usually respond within <strong>24–48 hours</strong>.
              If your message is urgent, feel free to reply to this email.
            </p>

            <div style="
              margin-top: 20px;
              padding-top: 16px;
              border-top: 1px solid rgba(255,255,255,0.08);
            ">
              Best regards,<br />
              <strong>Yatish Patil</strong><br />
              Frontend Developer
            </div>

            <p style="
              margin-top: 20px;
              font-size: 12px;
              color: #9ca3af;
            ">
              This is an automated confirmation.
            </p>
          </div>
        </div>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
    });
  }
}
