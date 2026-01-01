import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, firstName, lastName, appointmentType } = body;

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    // Send confirmation email to the submitter
    const { data, error } = await resend.emails.send({
      from: "Lux Dentistry <noreply@luxdentistry.com>", // Update this with your verified domain
      to: email,
      subject: "Appointment Request Confirmation - Lux Dentistry",
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Appointment Request Confirmation</title>
          </head>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #1a365d 0%, #2c5282 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
              <h1 style="color: #ffffff; margin: 0; font-size: 28px;">Lux Dentistry</h1>
            </div>
            
            <div style="background: #ffffff; padding: 40px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 10px 10px;">
              <h2 style="color: #1a202c; margin-top: 0; font-size: 24px;">Thank You for Your Appointment Request!</h2>
              
              <p style="color: #4a5568; font-size: 16px;">
                Dear ${firstName || "Valued Patient"},
              </p>
              
              <p style="color: #4a5568; font-size: 16px;">
                We have successfully received your appointment request for <strong>${appointmentType || "your selected service"}</strong>. Our team will review your request and contact you within 24 hours to confirm your appointment time.
              </p>
              
              <div style="background: #f7fafc; border-left: 4px solid #d4af37; padding: 20px; margin: 30px 0; border-radius: 4px;">
                <p style="margin: 0; color: #2d3748; font-size: 15px;">
                  <strong>What happens next?</strong><br>
                  • Our scheduling team will review your request<br>
                  • We'll contact you via your preferred method within 24 hours<br>
                  • We'll work with you to find the best appointment time
                </p>
              </div>
              
              <p style="color: #4a5568; font-size: 16px;">
                If you have any questions or need immediate assistance, please don't hesitate to contact us:
              </p>
              
              <div style="background: #ffffff; border: 1px solid #e2e8f0; padding: 20px; margin: 20px 0; border-radius: 8px;">
                <p style="margin: 5px 0; color: #2d3748;">
                  <strong>📞 Phone:</strong> <a href="tel:6787737354" style="color: #2c5282; text-decoration: none;">(678) 773-7354</a>
                </p>
                <p style="margin: 5px 0; color: #2d3748;">
                  <strong>📧 Email:</strong> <a href="mailto:info@luxdentistry.com" style="color: #2c5282; text-decoration: none;">info@luxdentistry.com</a>
                </p>
                <p style="margin: 5px 0; color: #2d3748;">
                  <strong>📍 Location:</strong> 1155 Bluegrass Ct, Alpharetta, GA 30004
                </p>
              </div>
              
              <p style="color: #4a5568; font-size: 16px; margin-top: 30px;">
                For dental emergencies, please call us immediately at <strong>(678) 773-7354</strong>. We provide 24/7 emergency care.
              </p>
              
              <p style="color: #4a5568; font-size: 16px; margin-top: 30px;">
                We look forward to serving you and helping you achieve optimal oral health.
              </p>
              
              <p style="color: #4a5568; font-size: 16px; margin-top: 30px;">
                Best regards,<br>
                <strong>The Lux Dentistry Team</strong>
              </p>
            </div>
            
            <div style="text-align: center; margin-top: 20px; padding: 20px; color: #718096; font-size: 12px;">
              <p style="margin: 0;">
                This is an automated confirmation email. Please do not reply directly to this message.<br>
                © ${new Date().getFullYear()} Lux Dentistry. All rights reserved.
              </p>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send confirmation email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, messageId: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending confirmation email:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

