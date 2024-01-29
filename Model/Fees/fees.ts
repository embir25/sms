import mongoose from "mongoose";

const feeSchema = new mongoose.Schema(
  {
    classname: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Class",
      required: true,
    },
    school: { type: mongoose.Schema.Types.ObjectId, ref: "School" },
    student: { type: mongoose.Schema.Types.ObjectId, ref: "Student" },
    amount: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },

    transactiondate: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

const Fees = mongoose.models.Fees || mongoose.model("Fees", feeSchema);

export default Fees;
