import { NextRequest, NextResponse } from "next/server";
import School from "../../../../../Model/School/school";

export async function DELETE(req: NextRequest) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json(
        {
          messasge: "could not delete school",
        },
        { status: 400 }
      );
    }
    const updatedSchool = await School.findOneAndDelete(id);
    return NextResponse.json(
      {
        message: "School deletd",
        data: updatedSchool,
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