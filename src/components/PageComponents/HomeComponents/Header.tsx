import { AddFiles } from "@/components/localComponents/AddFiles";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserButton, useUser } from "@clerk/nextjs";
import { Search } from "lucide-react";
import React from "react";

export default function Header() {
  const { user } = useUser();

  return (
    <header className="z-10 flex flex-col items-center justify-center gap-8">
      <div className="md:w-[40%]  flex flex-col justify-center gap-3">
        <p className="flex justify-center gap-2 text-center">
          <UserButton /> Hi, {user?.fullName}
        </p>
        <p className="text-2xl font-bold text-center gradient-text">
          Welcome to the Daniel Recruiting Dashboard
        </p>
        <p className="text-lg text-center">
          Ready to hire? Post your job openings and start finding the right
          candidates today.
        </p>
      </div>
      <AddFiles />

      <div className="flex w-full max-w-[70%] items-center justify-center gap-2">
        <Input type="email" placeholder="Search for a Post..." />
        <Button type="submit" variant="outline">
          <Search />
        </Button>
      </div>
    </header>
  );
}
