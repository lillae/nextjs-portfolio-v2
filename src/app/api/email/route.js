import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
	const { name, email, subject, message } = await req.json();

	const transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: process.env.EMAIL,
			pass: process.env.EMAIL_PW,
		},
	});

	const mailOptions = {
		from: process.env.EMAIL,
		to: process.env.EMAIL,
		subject: `Message from ${name} (${email}) (${subject})`,
		text: message,
	};

	try {
		await transporter.sendMail({
			...mailOptions,
		});

		return NextResponse.json({ success: true });
	} catch (err) {
		console.log(err);
		return NextResponse.json({ message: err.message });
	}
}
