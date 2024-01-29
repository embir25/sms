import { NextRequest, NextResponse } from "next/server";
import Fees from "../../../../../Model/Fees/fees";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const { schoolId } = await req.json();

    // Validate schoolId
    if (!schoolId ) {
      return NextResponse.json(
        {
          message: "Invalid request. 'schoolId' is required.",
        },
        { status: 400 }
      );
    }

    const allFees = await Fees.find({ schoolId})

    if (!allFees || allFees.length === 0) {
      return NextResponse.json(
        {
          message: `No fees found for schoolId ${schoolId}.`,
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: "Fees found",
        data: allFees,
      },
      { status: 200 }
    );
  } catch (error :any) {
    console.error("Error:", error.message);
    return NextResponse.json(
      {
        message: "Internal server error",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
