import { NextRequest, NextResponse } from "next/server";
import Fees from "../../../../../Model/Fees/fees";

export async function PUT(req: NextRequest) {
  try {
    const { data, id } = await req.json();

    if (!id) {
      return NextResponse.json(
        {
          message: "Invalid request. 'id' is required for updating a Fees Info.",
        },
        { status: 400 }
      );
    }

    const updatedFees = await Fees.findByIdAndUpdate(id, data, {
      new: true, 
      runValidators: true,
    });

    if (!updatedFees) {
      return NextResponse.json(
        {
          message: `Fees with id ${id} not found.`,
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: "Fees updated",
        data: updatedFees,
      },
      { status: 200 }
    );
  } catch (error:any) {
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
