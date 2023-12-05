import mongoose from "mongoose";

const configurationSchema = new mongoose.Schema({
  defaultPages: { type: Number, default: 0 },
  distributionDates: [Date],
  permittedFileTypes: [String],
});

export default mongoose.model("Configuration", configurationSchema);
