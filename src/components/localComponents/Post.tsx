"use client";

import { EllipsisVertical, Pencil, PlusCircle, Trash } from "lucide-react";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";

interface Props {
  image: string;
  title: string;
  description: string;
  companyName: string;
  location: string;
  jobType: string;
  careerLevel: string;
  workSetup: string;
  applicationDeadline: string;
}

export default function Post({
  image,
  title,
  description,
  companyName,
  location,
  jobType,
  careerLevel,
  workSetup,
  applicationDeadline,
}: Props) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="md:w-[45%] w-full flex items-center justify-between gap-2 p-1 border rounded-lg shadow-xs cursor-pointer border-sidebar-border bg-background hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50">
          <div className="flex items-center gap-3">
            <img src={image} alt={title} className="w-10 h-10 rounded-md" />
            <div>
              <p className="font-semibold text-md">{title}</p>
              <p className="text-sm font-medium">{companyName}</p>
              <p className="text-sm font-light">
                {location} - {workSetup}
              </p>
            </div>
          </div>
          {/* Dropdown menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="p-1 rounded hover:bg-muted">
                <EllipsisVertical className="w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <PlusCircle className="w-4 h-4 mr-2" />
                Add A File
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Pencil className="w-4 h-4 mr-2" />
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Trash className="w-4 h-4 mr-2" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </SheetTrigger>

      <SheetContent className="space-y-4">
        <SheetHeader>
          <img src={image} alt={title} className="w-full rounded-md h-50" />

          <SheetTitle>{title}</SheetTitle>
          <SheetDescription>
            {companyName} — {location}
          </SheetDescription>
        </SheetHeader>

        <SheetHeader>
          <div className="space-y-2 text-sm">
            <p>
              <span className="font-medium">Description:</span> {description}
            </p>
            <p>
              <span className="font-medium">Job Type:</span> {jobType}
            </p>
            <p>
              <span className="font-medium">Career Level:</span> {careerLevel}
            </p>
            <p>
              <span className="font-medium">Work Setup:</span> {workSetup}
            </p>
            <p>
              <span className="font-medium">Application Deadline:</span>{" "}
              {applicationDeadline}
            </p>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
