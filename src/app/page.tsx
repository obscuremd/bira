"use client";
import { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import NavMenu from "@/components/localComponents/NavMenu";
import GradientButton from "@/components/localComponents/GradientButton";
import { SignUpButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { LandingPageMenuItems } from "@/Exports/data";
import Post from "@/components/localComponents/Post";
import { Skeleton } from "@/components/ui/skeleton";
import axios from "axios";

export default function Home() {
  const { isSignedIn } = useUser();
  const router = useRouter();

  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [Posts, setPosts] = useState<Post[]>([]);

  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  const fetchPosts = async (pageNumber = 1) => {
    setLoading(true);
    try {
      const res = await axios.get(`/api/post?page=${pageNumber}&limit=10`);
      console.log("response", res);

      if (res.status === 200) {
        const newPosts = res.data.jobs;
        setPosts((prevPosts) =>
          pageNumber === 1 ? newPosts : [...prevPosts, ...newPosts]
        );
        setPage(res.data.page);
        setTotalPages(res.data.totalPages);
      }
    } catch (err) {
      console.error("Error fetching posts:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts(1); // Initial load
  }, []);

  // Load more handler
  const handleLoadMore = () => {
    if (page < totalPages) {
      fetchPosts(page + 1);
    }
  };

  useEffect(() => {
    // Redirect if signed in
    if (isSignedIn) {
      router.push("/main/home");
    }
  }, [isSignedIn, router]);

  useEffect(() => {
    // Function to check screen width and update state
    function handleResize() {
      setIsMobile(window.innerWidth < 640); // 640px is Tailwind's 'sm' breakpoint
    }

    // Initial check
    handleResize();

    // Listen to resize events
    window.addEventListener("resize", handleResize);

    // Cleanup listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className="relative flex flex-col items-center w-full min-h-screen gap-16 p-4 justify-items-center md:p-16 md:gap-32">
      <nav className="z-10 flex items-center justify-between w-full sm:items-start">
        <p className="text-xl font-bold">Dan Recruits</p>

        {isMobile ? (
          <>
            {/* Burger button on mobile */}
            <button
              className="p-2 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="space-y-1">
                <span className="block w-6 h-0.5 bg-gray-700 dark:bg-gray-200"></span>
                <span className="block w-6 h-0.5 bg-gray-700 dark:bg-gray-200"></span>
                <span className="block w-6 h-0.5 bg-gray-700 dark:bg-gray-200"></span>
              </div>
            </button>

            {/* Show menu dropdown if burger is clicked */}
            {mobileMenuOpen && (
              <div className="absolute left-0 z-20 w-full bg-white shadow-md top-full dark:bg-gray-800">
                <NavMenu menuItems={LandingPageMenuItems} />
              </div>
            )}
          </>
        ) : (
          // Full NavMenu on desktop
          <NavMenu menuItems={LandingPageMenuItems} />
        )}

        <SignUpButton mode="modal">
          <GradientButton text="Get Started" />
        </SignUpButton>
      </nav>

      {/* Rest of your page content here */}
      <header className="z-10 flex flex-col items-center justify-center gap-8">
        <GradientButton
          variant="ghost"
          text="Your Friendly Path to a Dream Job 🌟"
        />

        <div className="md:w-[60%] flex flex-col gap-3">
          <p className="text-4xl font-bold text-center gradient-text">
            Launch Your Career with Dan Recruiting
          </p>
          <p className="text-center">
            Dan Recruits Solutions makes job searching effortless—apply with
            ease and trust in our thorough background checks to ensure only
            legitimate opportunities are posted.
          </p>
        </div>

        <div className="flex justify-center w-full gap-3">
          <SignUpButton mode="modal">
            <GradientButton text="Sign Up For Free" />
          </SignUpButton>

          <Button variant={"default"}>Read More</Button>
        </div>
      </header>
      {/* Posts */}
      <div className="flex flex-wrap gap-2">
        {loading && Posts.length === 0 ? (
          <>
            <Skeleton className="w-[256px] h-14" />
            <Skeleton className="w-[256px] h-14" />
            <Skeleton className="w-[256px] h-14" />
          </>
        ) : Posts?.length === 0 ? (
          <div className="text-sm text-zinc-400">No Posts Found</div>
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

      {/* Load More Button */}
      {page < totalPages && (
        <Button onClick={handleLoadMore} disabled={loading} className="mt-4">
          {loading ? "Loading..." : "Load More"}
        </Button>
      )}
    </main>
  );
}
