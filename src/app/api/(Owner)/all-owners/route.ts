import { NextRequest, NextResponse } from "next/server";
import Owner from "../../../../Model/Owner/Owner";

export async function GET( req:NextRequest) {
  try {

    const Owners= await Owner.find().maxTimeMS(4000)

    return NextResponse.json(
      {
        message: "register Owners",
        data: Owners,
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
