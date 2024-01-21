
import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/config/connection";
import School from "@/Model/School/school";

export async function POST(req: NextRequest) {
  try {
    await connectDB()
    const {fullname,location,phone, email } = await req.json();

    if (!fullname || !location || !phone) {
      return NextResponse.json(
        {
          messasge: "Please provide name, location and phone",
        },
        { status: 400 }
      );
    }

    const newSchool = new School({
      fullname,
      location,
      phone,
      email
    });

    const savedSchool = await newSchool.save();

    return NextResponse.json(
      {
        message: "School created",
        data: savedSchool,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      {
        message: "Internal server error",
      },
      { status: 500 }
    );
  }
}
