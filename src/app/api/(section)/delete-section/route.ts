import { NextRequest, NextResponse } from "next/server";
import Section from "../../../../../Model/Section/section";

export async function DELETE(req: NextRequest) {
  try {
    const { _id } = await req.json();

    if (!_id) {
      return NextResponse.json(
        {
          messasge: "could not delete section",
        },
        { status: 400 }
      );
    }
    const updatedSection = await Section.findOneAndDelete({_id});
    return NextResponse.json(
      {
        message: "Section deleted",
        data: updatedSection,
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
