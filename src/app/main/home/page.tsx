"use client";
import { useUser } from "@clerk/nextjs";
import { useState, useEffect } from "react";
import Header from "@/components/PageComponents/HomeComponents/Header";
import axios from "axios";
import { Skeleton } from "@/components/ui/skeleton";
import Post from "@/components/localComponents/Post";
import { useGen } from "@/Providers/GeneralContextProvider";

export default function Home() {
  const { user } = useUser();
  const { Posts, setPosts } = useGen();

  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const fetchPosts = async () => {
      if (!user?.emailAddresses?.[0]?.emailAddress) return;

      setLoading(true);
      try {
        const res = await axios.get(
          `/api/post?email=${user.emailAddresses[0].emailAddress}`
        );

        if (res.status === 200) {
          setPosts(res.data.jobs);
          setPage(res.data.page);
          console.log(res.data.jobs);
        }
      } catch (err) {
        console.error("Error fetching files:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [page, user?.emailAddresses]);

  return (
    <main className="relative flex flex-col w-full min-h-screen gap-8 md:gap-10">
      <Header />

      {/* Posts */}
      <div className="flex flex-wrap gap-2">
        {loading ? (
          <>
            <Skeleton className="w-[256px] h-14" />
            <Skeleton className="w-[256px] h-14" />
            <Skeleton className="w-[256px] h-14" />
          </>
        ) : Posts?.length === 0 ? (
          <div className="text-sm text-zinc-400">No Folders Found</div>
        ) : (
          Posts.map((item, index) => (
            <Post
              image={item.image}
              key={index}
              title={item.title}
              companyName={item.companyName}
              applicationDeadline={item.applicationDeadline}
              careerLevel={item.careerLevel}
              description={item.description}
              jobType={item.jobType}
              location={item.location}
              workSetup={item.workSetup}
            />
          ))
        )}
      </div>
    </main>
  );
}
