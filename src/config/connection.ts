// db.ts
import mongoose from "mongoose";

const NEXT_PUBLIC_MONGODB_URI =
  process.env.NODE_ENV === "production"
    ? (process.env.NEXT_PUBLIC_MONGODB_URI as any)
    : "mongodb+srv://sms:sw0riwegfaOKHjNh@sms.objcnmd.mongodb.net/sms?retryWrites=true&w=majority";
const connectDB = async () => {
  try {
    await mongoose.connect(NEXT_PUBLIC_MONGODB_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

export default connectDB;
