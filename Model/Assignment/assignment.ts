import mongoose from "mongoose";

const assignmentSchema = new mongoose.Schema(
  {
    title: { String, required: true },
    class: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Class" }],
      required: true,
    },
    assignedby: {
      type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Teacher" }],
      required: true,
    },
    description: String,
  },
  { timestamps: true }
);

const Assignment = mongoose.models.Assignment
  ? mongoose.model("Assignment")
  : mongoose.model("Assignment", assignmentSchema);

export default Assignment;
