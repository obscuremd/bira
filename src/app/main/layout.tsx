"use client";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const MainLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  const { isSignedIn } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isSignedIn) {
      router.push("/");
    }
  }, [isSignedIn, router]);

  return (
    <div className="relative">
      <main className="z-10 w-full gap-6 px-4 py-8 md:px-16">{children}</main>
    </div>
  );
};

export default MainLayout;
