import { NextResponse } from "next/server";
import connectMongo from "@/utils/connectMongo";
import User from "@/models/user";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();
    const hashedPassword = await bcrypt.hash(password, 10);
    await connectMongo();
    await User.create({ name, email, password:hashedPassword });

    return NextResponse.json(
      { message: "User Registered Successfully!" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error Occurred while registering" },
      { status: 500 }
    );
  }
}
