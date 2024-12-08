import { NextResponse } from "next/server";
import connectMongo from "@/utils/connectMongo";
import User from "@/models/user";

export async function POST(req) {
  try {
    await connectMongo();
    const { email } = await req.json();
    const user = await User.findOne({ email }).select("_id");
    return NextResponse.json({ user });
  } catch (error) {}
}
