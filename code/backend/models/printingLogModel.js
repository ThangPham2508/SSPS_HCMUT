import mongoose from "mongoose";

const printingLogSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    printerId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Printer",
    },
    fileId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "File",
    },
    pages: [
      {
        pageSize: String,
        numberOfPages: Number,
      },
    ],
    status: {
      type: String,
      enum: ["queued", "printing", "completed", "error"],
      default: "queued",
    },
  },
  { timestamps: { createdAt: "startTime", updatedAt: "endTime" } }
);

export default mongoose.model("PrintingLog", printingLogSchema);
