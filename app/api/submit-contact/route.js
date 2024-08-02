import { NextResponse } from "next/server";
import connectDB from "@/app/lib/connectDB";
import Contact from "../../../Model/contact";

export async function POST(request, response) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
    }
    await connectDB();

    const newContact = new Contact({
      name: name,
      email: email,
      message: message,
    });

    await newContact.save();
    
    return NextResponse.json({ message: 'Thank you for reaching out! I will get back to you soon.' }, { status: 200 });

  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: 'There was an error sending your message. Please try again.' }, { status: 500 });
  }

}