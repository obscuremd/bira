import { NextRequest, NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectMongoDb } from "@/lib/mongoDb";
import { Post } from "@/models/PostModel";

// POST: Create a new job post
export const POST = async (req: NextRequest) => {
  try {
    await connectMongoDb();

    const {
      image,
      title,
      description,
      companyName,
      location,
      jobType,
      careerLevel,
      workSetup,
      applicationDeadline,
      email,
    } = await req.json();

    const missingFields = [];
    if (!image) missingFields.push("image");
    if (!title) missingFields.push("title");
    if (!description) missingFields.push("description");
    if (!companyName) missingFields.push("companyName");
    if (!location) missingFields.push("location");
    if (!jobType) missingFields.push("jobType");
    if (!careerLevel) missingFields.push("careerLevel");
    if (!workSetup) missingFields.push("workSetup");
    if (!applicationDeadline) missingFields.push("applicationDeadline");
    if (!email) missingFields.push("email");

    if (missingFields.length > 0) {
      return NextResponse.json(
        {
          message: `Missing required field${
            missingFields.length > 1 ? "s" : ""
          }: ${missingFields.join(", ")}`,
        },
        { status: 400 }
      );
    }

    const jobPost = await Post.create({
      image,
      title,
      description,
      companyName,
      location,
      jobType,
      careerLevel,
      workSetup,
      applicationDeadline,
      email,
    });

    return NextResponse.json(
      { message: "Job post created successfully", jobPost },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Server error", error },
      { status: 500 }
    );
  }
};

// GET: Retrieve job posts (optionally filtered by ID, email, title, etc.)
export const GET = async (req: NextRequest) => {
  try {
    await connectMongoDb();

    const searchParams = req.nextUrl.searchParams;

    const id = searchParams.get("id");
    const email = searchParams.get("email");
    const title = searchParams.get("title");
    const jobType = searchParams.get("jobType");
    const location = searchParams.get("location");
    const pageParam = searchParams.get("page");
    const limitParam = searchParams.get("limit");

    // Get a single job post by ID
    if (id) {
      if (!mongoose.Types.ObjectId.isValid(id)) {
        return NextResponse.json(
          { message: "Invalid job post ID" },
          { status: 400 }
        );
      }

      const job = await Post.findById(id);
      if (!job) {
        return NextResponse.json({ message: "Job not found" }, { status: 404 });
      }

      return NextResponse.json({ job });
    }

    // Build dynamic query
    const filter: {
      email?: string;
      title?: string;
      jobType?: string;
      location?: string;
    } = {};
    if (email) filter.email = email;
    if (title) filter.title = title;
    if (jobType) filter.jobType = jobType;
    if (location) filter.location = location;

    // Pagination
    const page = parseInt(pageParam || "1");
    const limit = parseInt(limitParam || "10");
    const skip = (page - 1) * limit;

    const jobs = await Post.find(filter)
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 });
    const total = await Post.countDocuments(filter);

    return NextResponse.json({
      jobs,
      page,
      totalPages: Math.ceil(total / limit),
      totalJobs: total,
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Server error", error },
      { status: 500 }
    );
  }
};

// PUT: Update a job post
export const PUT = async (req: NextRequest) => {
  try {
    await connectMongoDb();
    const id = req.nextUrl.searchParams.get("id");

    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { message: "Invalid or missing ID" },
        { status: 400 }
      );
    }

    const updatedData = await req.json();
    const job = await Post.findByIdAndUpdate(id, updatedData, { new: true });

    if (!job) {
      return NextResponse.json({ message: "Job not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Job post updated successfully", job },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Server error", error },
      { status: 500 }
    );
  }
};
