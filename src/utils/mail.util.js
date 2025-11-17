import nodemailer from "nodemailer";

export async function sendVerificationEmail(to, accessToken) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  const verifyUrl = `http://localhost:3000/api/auth/verify?token=${accessToken}`;

  await transporter.sendMail({
    from: process.env.MAIL_USER,
    to,
    subject: "Verify your login",
    html: `<p>Click <a href="${verifyUrl}">here</a> to verify your login.</p>`,
  });
}
