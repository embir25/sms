import { NextRequest, NextResponse } from "next/server";
import Class from "../../../../../Model/Class/class";

export async function GET() {
  try {
    const classes = await Class.find();

    return NextResponse.json(
      {
        message: "All classes",
        data: classes,
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
