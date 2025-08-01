"use client";

import { Activity, BarChart, Clock, Folders, Lock } from "lucide-react";
import { GlowingEffect } from "./GlowingEffect";

export function GlowingEffectDemo() {
  return (
    <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-12 xl:grid-rows-2">
      {/* Top Left */}
      <GridItem
        area="xl:col-span-6 xl:row-span-1"
        icon={<Lock className="w-4 h-4 text-black dark:text-neutral-400" />}
        title="Secure Applications"
        description="Your personal data and applications are encrypted and stored safely—only accessible to you and verified recruiters."
      />

      {/* Top Right */}
      <GridItem
        area="xl:col-span-6 xl:row-span-1"
        icon={<BarChart className="w-4 h-4 text-black dark:text-neutral-400" />}
        title="Smart Job Matching"
        description="Get personalized job recommendations powered by AI, based on your skills, preferences, and application history."
      />

      {/* Bottom Left */}
      <GridItem
        area="xl:col-span-4 xl:row-span-1"
        icon={<Activity className="w-4 h-4 text-black dark:text-neutral-400" />}
        title="Live Application Tracking"
        description="Stay informed with real-time updates on your job applications, from submission to interview."
      />

      {/* Bottom Middle */}
      <GridItem
        area="xl:col-span-4 xl:row-span-1"
        icon={<Clock className="w-4 h-4 text-black dark:text-neutral-400" />}
        title="Easy Re-Applications"
        description="Quickly revisit and reapply to past job posts or get notified when similar roles open up."
      />

      {/* Bottom Right */}
      <GridItem
        area="xl:col-span-4 xl:row-span-1"
        icon={<Folders className="w-4 h-4 text-black dark:text-neutral-400" />}
        title="Organized Job Dashboard"
        description="All your saved jobs, applications, and interview schedules neatly organized in one place."
      />
    </ul>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={`min-h-[1rem] list-none ${area}`}>
      <div className="relative h-full p-2 border rounded-2xl md:rounded-3xl md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-col justify-between flex-1 gap-3">
            <div className="p-2 border border-gray-600 rounded-lg w-fit">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
                {title}
              </h3>
              <h2 className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
