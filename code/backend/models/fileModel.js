import mongoose from "mongoose";

const fileSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  name: { type: String, required: true },
  type: { type: String, required: true },
  uploadTime: { type: Date, default: Date.now },
  printingProperties: {
    paperSize: String,
    pagesToBePrinted: Number,
    oneOrDoubleSided: String,
    numberOfCopies: Number,
  },
  status: { type: String, enum: ["verified", "notVerified"], required: true },
});

export default mongoose.model("File", fileSchema);
