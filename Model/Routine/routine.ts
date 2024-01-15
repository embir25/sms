import mongoose from "mongoose";


const routineSchema = new mongoose.Schema(
  {
    school: {type: mongoose.Schema.ObjectId,ref: 'School'},
    class: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Class", required: true },
    ],
    section: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Section", required: true },
    ],
    subject: [
      { type: mongoose.Schema.Types.ObjectId, ref: "Subject", required: true },
    ],
    day: { type: String },
    begintime: { type: Date },

const routineSchema = new Schema(
  {
    class: [{ type: Schema.Types.ObjectId, ref: "Class", required: true }],
    section: [{ type: Schema.Types.ObjectId, ref: "Section", required: true }],
    subject: [{ type: Schema.Types.ObjectId, ref: "Subject", required: true }],
    schoolId:{ type:Schema.Types.ObjectId, ref:'School'},
    day: { type: String },
    starttime: { type: Date },

    endtime: { type: Date },
  },
  { timestamps: true }
);


const Routine = mongoose.models.Routine
  ? mongoose.model("Routine")
  : mongoose.model("Routine", routineSchema);

const Routine =
  mongoose.models.Routine || mongoose.model("Routine", routineSchema);


export default Routine;
