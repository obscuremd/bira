"use client";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LoaderIcon, PlusCircle } from "lucide-react";
import { useState } from "react";
import { storage } from "@/services/firebaseconfig";
import axios from "axios";
import { useUser } from "@clerk/nextjs";
import { useGen } from "@/Providers/GeneralContextProvider";
import toast from "react-hot-toast";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export function AddFiles() {
  const { user } = useUser();
  const { setPosts } = useGen();

  const [dialogOpen, setDialogOpen] = useState(false);
  const [image, setImage] = useState<File | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");
  const [careerLevel, setCareerLevel] = useState("");
  const [workSetup, setWorkSetup] = useState("");
  const [applicationDeadline, setApplicationDeadline] = useState("");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  const uploadImage = async () => {
    if (!image) return "";
    const imageRef = ref(storage, `jobs/${Date.now()}-${image.name}`);
    const upload = await uploadBytes(imageRef, image);
    return await getDownloadURL(upload.ref);
  };

  const uploadToDb = async () => {
    if (!user?.emailAddresses[0].emailAddress) return;
    setLoading(true);

    try {
      const imageUrl = await uploadImage();

      const payload = {
        image: imageUrl,
        title,
        description,
        companyName,
        location,
        jobType,
        careerLevel,
        workSetup,
        applicationDeadline,
        email: user.emailAddresses[0].emailAddress,
      };

      const response = await axios.post("/api/post", payload);
      toast.success("Job post created");
      setPosts((prev) => [response.data.jobPost, ...prev]);

      // Reset state
      setImage(undefined);
      setTitle("");
      setDescription("");
      setCompanyName("");
      setLocation("");
      setJobType("");
      setCareerLevel("");
      setWorkSetup("");
      setApplicationDeadline("");
      setDialogOpen(false);
    } catch (error) {
      console.error("Upload error:", error);
      toast.error("Failed to create job post");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline">
            <PlusCircle />
            Add Job Post
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[500px]">
          <Card>
            <CardHeader>
              <CardTitle>Post a Job</CardTitle>
              <CardDescription>Fill out the job details below.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label>Picture</Label>
                  <Input type="file" onChange={handleImageChange} />
                </div>
                <div className="flex gap-2">
                  <Input
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <Input
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <div className="flex gap-2">
                  <Input
                    placeholder="Company Name"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
                  <Input
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>

                {/* Dropdowns for jobType, careerLevel, and workSetup */}
                <div className="flex gap-2">
                  <div className="flex flex-col w-full gap-2">
                    <Label>Job Type</Label>
                    <Select value={jobType} onValueChange={setJobType}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select job type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Full-Time">Full-Time</SelectItem>
                        <SelectItem value="Part-Time">Part-Time</SelectItem>
                        <SelectItem value="Contract">Contract</SelectItem>
                        <SelectItem value="Internship">Internship</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex flex-col w-full gap-2">
                    <Label>Career Level</Label>
                    <Select value={careerLevel} onValueChange={setCareerLevel}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select career level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Entry-Level">Entry-Level</SelectItem>
                        <SelectItem value="Mid-Level">Mid-Level</SelectItem>
                        <SelectItem value="Senior-Level">
                          Senior-Level
                        </SelectItem>
                        <SelectItem value="Director">Director</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="flex gap-2 mt-2">
                    <div className="flex-1">
                      <Label>Work Setup</Label>
                      <Select value={workSetup} onValueChange={setWorkSetup}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select work setup" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Remote">Remote</SelectItem>
                          <SelectItem value="Hybrid">Hybrid</SelectItem>
                          <SelectItem value="Onsite">Onsite</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Input
                      placeholder="Application Deadline (YYYY-MM-DD)"
                      value={applicationDeadline}
                      onChange={(e) => setApplicationDeadline(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              {loading ? (
                <LoaderIcon className="animate-spin" />
              ) : (
                <>
                  <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogClose>
                  <Button type="button" onClick={uploadToDb}>
                    Submit
                  </Button>
                </>
              )}
            </CardFooter>
          </Card>
        </DialogContent>
      </form>
    </Dialog>
  );
}
