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
      from: "Yatish Patil <onboarding@resend.dev>",
      to: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
      reply_to: email,
      subject: `New Message from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          </head>
          <body style="
            margin: 0;
            padding: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', sans-serif;
            background-color: #0f0f14;
          ">
            <div style="
              background: linear-gradient(135deg, #1a1a23 0%, #16161d 100%);
              padding: 40px 20px;
              min-height: 100vh;
            ">
              <div style="
                max-width: 600px;
                margin: 0 auto;
                background-color: #16161d;
                border-radius: 16px;
                border: 1px solid rgba(255, 255, 255, 0.1);
                padding: 40px;
                box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
              ">
                <!-- Header -->
                <div style="
                  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
                  padding-bottom: 24px;
                  margin-bottom: 24px;
                ">
                  <h1 style="
                    margin: 0;
                    font-size: 24px;
                    font-weight: 700;
                    color: #ffffff;
                  ">New Message 📬</h1>
                  <p style="
                    margin: 8px 0 0 0;
                    font-size: 14px;
                    color: #9ca3af;
                  ">Someone reached out through your portfolio</p>
                </div>

                <!-- Sender Info -->
                <div style="
                  background-color: rgba(255, 255, 255, 0.05);
                  border: 1px solid rgba(255, 255, 255, 0.08);
                  border-radius: 12px;
                  padding: 20px;
                  margin-bottom: 24px;
                ">
                  <table style="width: 100%; border-collapse: collapse;">
                    <tr>
                      <td style="
                        padding: 8px 0;
                        color: #9ca3af;
                        font-size: 14px;
                        font-weight: 500;
                      ">Name:</td>
                      <td style="
                        padding: 8px 0;
                        padding-left: 16px;
                        color: #ffffff;
                        font-size: 15px;
                        font-weight: 600;
                      ">${name}</td>
                    </tr>
                    <tr>
                      <td style="
                        padding: 8px 0;
                        color: #9ca3af;
                        font-size: 14px;
                        font-weight: 500;
                      ">Email:</td>
                      <td style="
                        padding: 8px 0;
                        padding-left: 16px;
                        color: #60a5fa;
                        font-size: 15px;
                      "><a href="mailto:${email}" style="color: #60a5fa; text-decoration: none;">${email}</a></td>
                    </tr>
                  </table>
                </div>

                <!-- Message -->
                <div style="
                  background-color: rgba(255, 255, 255, 0.03);
                  border: 1px solid rgba(255, 255, 255, 0.08);
                  border-radius: 12px;
                  padding: 20px;
                  margin-bottom: 24px;
                ">
                  <p style="
                    margin: 0 0 12px 0;
                    color: #9ca3af;
                    font-size: 12px;
                    font-weight: 600;
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                  ">Message:</p>
                  <div style="
                    color: #e5e7eb;
                    font-size: 15px;
                    line-height: 1.6;
                    white-space: pre-wrap;
                  ">${message.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, "<br />")}</div>
                </div>

                <!-- CTA -->
                <div style="
                  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
                  border-radius: 8px;
                  padding: 16px;
                  text-align: center;
                  margin-bottom: 24px;
                ">
                  <a href="mailto:${email}" style="
                    color: #ffffff;
                    text-decoration: none;
                    font-weight: 600;
                    font-size: 15px;
                  ">Reply to ${name.split(" ")[0]} →</a>
                </div>

                <!-- Footer -->
                <p style="
                  margin: 0;
                  padding-top: 16px;
                  border-top: 1px solid rgba(255, 255, 255, 0.08);
                  color: #6b7280;
                  font-size: 12px;
                  text-align: center;
                ">Received via yatishpatil.dev contact form</p>
              </div>
            </div>
          </body>
        </html>
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
