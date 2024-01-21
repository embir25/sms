import School from "@/Model/School/school";
import { NextRequest, NextResponse } from "next/server";



export async function GET() {
  try {
    
    const schools = await School.find()

    return NextResponse.json(
      {
        message: "All schools",
        data: schools,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Internal server error",
      },
      { status: 500 }
    );
  }
}
