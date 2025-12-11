"use server"
import nodemailer from 'nodemailer'

export async function submitContactForm(
  prevState: { message: string; success: boolean } | null,
  formData: FormData
) {
  try {
    const name = formData.get("name")?.toString();
    const email = formData.get("email")?.toString();
    const subject = formData.get("subject")?.toString();
    const message = formData.get("message")?.toString();
    const faxNumber = formData.get('faxNumber')?.toString();

    // reject bots spam
    if (faxNumber) {
      return { success: false, message: "Rejected" }
    }

    if (!name || !email || !subject || !message) {
      return { message: "All fields are required", success: false };
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: 'eabiodun45@gmail.com',
      subject: subject,
      text: message
    });

    return { message: "Email sent successfully", success: true };
  } catch {
    return { message: "Failed to send email", success: false };
  }
}