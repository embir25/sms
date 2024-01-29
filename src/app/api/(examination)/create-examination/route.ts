// Import other necessary modules
import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/config/connection";
// import Class from "../../../../../Model/Class/class";
// import Teacher from "../../../../../Model/Teacher/teacher";
// import School from "../../../../../Model/School/school";
import Fees from "../../../../../Model/Fees/fees";


export async function POST(req: NextRequest) {
  try {
    await connectDB();
    
    const {  examname, school, subject, examdate, status } = await req.json();
    
    if (!examname || !school) {
      return NextResponse.json(
        {
          message: "Please provide exam name and school ID",
        },
        { status: 400 }
      );
    }

   
    // const schoolByOne = await School.findById(school);

    // if (!schoolByOne) {
    //   return NextResponse.json(
    //     {
    //       message: "Teacher or school not found",
    //     },
    //     { status: 404 }
    //   );
    // }

    const newFees = new Fees({
      examname,
      school: school,
      subject,
      examdate, 
      status,
    });

    const savedFees = await newFees.save();

    return NextResponse.json(
      {
        message: "Fees created",
        data: savedFees,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error); // Log the error for debugging
    return NextResponse.json(
      {
        message: "Internal server error",
      },
      { status: 500 }
    );
  }
}
