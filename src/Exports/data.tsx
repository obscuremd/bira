import Image from "next/image";

export const LandingPageMenuItems = [
  {
    name: "Home",
    anchor: "#home",
  },
  {
    name: "features",
    anchor: "#features",
  },
  {
    name: "How it works",
    anchor: "#how it works",
  },
  {
    name: "preview",
    anchor: "#preview",
  },
];

const StyledImage = ({ image }: { image: string }) => (
  <Image
    src={image}
    alt="startup template"
    width={500}
    height={500}
    className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
  />
);

export const TimelineData = [
  {
    title: "Create Your Account",
    content: (
      <div>
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Start your job search by creating an account in seconds. Just sign up
          with your email, and youll get instant access to verified job listings
          tailored to your profile.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <StyledImage image="/Assetive/a1.png" />
          <StyledImage image="/Assetive/a2.png" />
          <StyledImage image="/Assetive/a3.png" />
        </div>
      </div>
    ),
  },
  {
    title: "Upload Your Resume and Documents",
    content: (
      <div>
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Easily upload your resume, certificates, and other supporting
          documents. Our platform uses this information to match you with the
          best-fit job opportunities.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <StyledImage image="/Assetive/a4.png" />
          <StyledImage image="/Assetive/a5.png" />
          <StyledImage image="/Assetive/a6.png" />
          <StyledImage image="/Assetive/a7.png" />
        </div>
      </div>
    ),
  },
  {
    title: "Secure & Track Your Progress",
    content: (
      <div>
        <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          All your data is encrypted and protected. Track your applications in
          real-time, receive updates from employers, and manage your job search
          confidently—all in one place.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <StyledImage image="/Assetive/a7.png" />
          <StyledImage image="/Assetive/a8.png" />
          <StyledImage image="/Assetive/a9.png" />
          <StyledImage image="/Assetive/a10.png" />
        </div>
      </div>
    ),
  },
];

export const testimonials = [
  {
    quote:
      "Bira helped me land my dream job in just a few days. The platform made everything smooth—from discovery to application. Truly a life-changer!",
    name: "Sarah Chen",
    designation: "Marketing Specialist at Creatix",
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "I was matched with roles that actually fit my skills and interests. The AI suggestions were spot-on, and the platform made it easy to track everything.",
    name: "Michael Rodriguez",
    designation: "Frontend Developer at PixelForge",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "The job dashboard and real-time application tracking were game-changers. I felt in control and informed every step of the way.",
    name: "Emily Watson",
    designation: "Operations Assistant at TalentNest",
    src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "I appreciate how Bira filters out fake job listings and only shows verified roles. It gave me peace of mind while searching.",
    name: "James Kim",
    designation: "Graduate Trainee at BrightPath",
    src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "The whole experience felt personal and intuitive. I didn’t feel like just another applicant—Bira made the journey feel tailored to me.",
    name: "Lisa Thompson",
    designation: "UX Designer at Flowline Studio",
    src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const data = [
  {
    image:
      "https://plus.unsplash.com/premium_photo-1663091354914-7b4e0b00731e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8am9ifGVufDB8fDB8fHww",
    title: "Frontend Developer",
    description:
      "We’re looking for a passionate Frontend Developer to join our team and help build intuitive user interfaces for our web applications.",
    companyName: "TechNova Solutions",
    location: "San Francisco, CA",
    jobType: "Full-Time",
    careerLevel: "Mid-Level",
    workSetup: "Hybrid",
    ApplicationDeadline: "2025-09-15",
  },
  {
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8am9ifGVufDB8fDB8fHww",

    title: "Marketing Coordinator",
    description:
      "Coordinate marketing campaigns, support content creation, and work closely with cross-functional teams to boost brand engagement.",
    companyName: "BrightEdge Media",
    location: "Austin, TX",
    jobType: "Part-Time",
    careerLevel: "Entry-Level",
    workSetup: "On-Site",
    ApplicationDeadline: "2025-08-25",
  },
  {
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8am9ifGVufDB8fDB8fHww",
    title: "Data Analyst",
    description:
      "Analyze large datasets to provide actionable insights for strategic decision-making. Strong SQL and Python skills preferred.",
    companyName: "InsightCore Analytics",
    location: "Remote",
    jobType: "Contract",
    careerLevel: "Mid-Level",
    workSetup: "Remote",
    ApplicationDeadline: "2025-09-10",
  },
  {
    image:
      "https://images.unsplash.com/photo-1629904853716-f0bc54eea481?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGpvYnxlbnwwfHwwfHx8MA%3D%3D",
    title: "UX/UI Designer",
    description:
      "Design beautiful, user-friendly interfaces that align with our brand identity and enhance user experience across platforms.",
    companyName: "PixelWave Studio",
    location: "New York, NY",
    jobType: "Full-Time",
    careerLevel: "Senior-Level",
    workSetup: "Hybrid",
    ApplicationDeadline: "2025-09-01",
  },
  {
    image:
      "https://images.unsplash.com/photo-1653566031535-bcf33e1c2893?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGpvYnxlbnwwfHwwfHx8MA%3D%3D",
    title: "Backend Engineer",
    description:
      "Join our development team to build scalable APIs and manage cloud infrastructure. Experience with Node.js and AWS required.",
    companyName: "CodeAxis Inc.",
    location: "Seattle, WA",
    jobType: "Full-Time",
    careerLevel: "Mid-Level",
    workSetup: "Remote",
    ApplicationDeadline: "2025-09-20",
  },
];
