import mongoose from "mongoose";

const routineSchema = new mongoose.Schema(
  {
    school: { type: mongoose.Schema.Types.ObjectId, ref: "School" },
    class:  {type: mongoose.Schema.Types.ObjectId, ref: "Class" },
    section: { type: mongoose.Schema.Types.ObjectId, ref: "Section" },
    subject: { type: mongoose.Schema.Types.ObjectId, ref: "Subject" },
    day: { type: String },
    starttime: { type: String },
    endtime: { type: String },
  },
  { timestamps: true }
);

const Routine =
  mongoose.models.Routine || mongoose.model("Routine", routineSchema);

export default Routine;
