import mongoose, { models } from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    image: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    companyName: { type: String, required: true },
    location: { type: String, required: true },
    jobType: {
      type: String,
      enum: ["Full-Time", "Part-Time", "Contract", "Internship"],
      required: true,
    },
    careerLevel: {
      type: String,
      enum: ["Entry-Level", "Mid-Level", "Senior-Level", "Director"],
      required: true,
    },
    workSetup: {
      type: String,
      enum: ["Remote", "On-Site", "Hybrid"],
      required: true,
    },
    applicationDeadline: { type: String, required: true }, // Could be Date type
    email: { type: String, required: true }, // Posted by
  },
  { timestamps: true }
);

export const Post = models.Post || mongoose.model("Post", PostSchema);
