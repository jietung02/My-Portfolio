import { NextResponse } from "next/server";

export async function POST(request, response) {
  try {
    const { name, email, message } = await request.json();
    // save to mongodb
    // and send email to me

    if (!name || !email || !message) {
      return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
    }
    return NextResponse.json({ message: 'Form Submitted Successfully' }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ message: 'An error occurred while submitting the form' }, { status: 500 });
  }

}