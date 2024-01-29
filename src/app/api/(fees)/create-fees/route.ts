// Import other necessary modules
import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/config/connection";
import Student from "../../../../../Model/Student/student";
import Fees from "../../../../../Model/Fees/fees";


export async function POST(req: NextRequest) {
  try {
    await connectDB();
    
    const { classname, student, school, amount, transactiondate, status  } = await req.json();
    
    if ( !amount || !status || !school || !transactiondate) {
      return NextResponse.json(
        {
          message: "Please provide the correct details",
        },
        { status: 400 }
      );
    }

    
  
    const studentByOne = await Student.findOne({student})
    

    if (!studentByOne) {
      return NextResponse.json(
        {
          message: "Student and their respective details cannot be found.",
        },
        { status: 404 }
      );
    }

    const newFees = new Fees({
      classname,
      school,
      student: studentByOne._id,
      transactiondate,
      status,
      amount
      
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
