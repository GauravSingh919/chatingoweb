"use client";

import React from "react";
import {
  Smile,
  ChevronsUp,
  Star,
  Share2,
  UserRound,
  PiggyBank,
  LucideIcon,
} from "lucide-react";

type SolutionItem = {
  title: string;
  description: string;
  Icon: LucideIcon;
};

const SOLUTIONS: SolutionItem[] = [
  {
    title: "Improve employee happiness",
    description: "and engagement",
    Icon: Smile,
  },
  {
    title: "Boost Hiring Manager",
    description: "Confidence and Productivity",
    Icon: ChevronsUp,
  },
  {
    title: "Hire Top Talent Faster and",
    description: "More Efficiently",
    Icon: Star,
  },
  {
    title: "Build a More Diverse and",
    description: "Inclusive Workforce",
    Icon: Share2,
  },
  {
    title: "Reduce the Cost of Hiring",
    description: "Qualified Employees",
    Icon: PiggyBank,
  },
  {
    title: "Fill Open Positions More",
    description: "Quickly",
    Icon: UserRound,
  },
];

function SolutionCard({ item }: { item: SolutionItem }) {
  const { Icon, title, description } = item;
  return (
    <div className="relative overflow-hidden rounded-2xl bg-[linear-gradient(135deg,#2b135a_0%,#170a35_100%)] p-6 text-white shadow-[0_10px_30px_rgba(80,0,140,0.25)] ring-1 ring-white/10">
      <div className="absolute inset-0 opacity-[0.08] [background:radial-gradient(120px_80px_at_20%_20%,#fff_0,transparent_60%),radial-gradient(120px_80px_at_80%_60%,#fff_0,transparent_60%)]" />
      <div className="relative z-10 flex items-start gap-4">
        <div className="grid size-12 place-items-center rounded-full bg-white/10 ring-1 ring-white/20">
          <Icon className="size-6" />
        </div>
        <div>
          <p className="text-sm/5 text-white/80">{title}</p>
          <p className="text-sm/5 font-medium text-white/90">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function SolutionOrientedSection(): JSX.Element {
  return (
    <section className="relative isolate bg-white py-20 text-[#1c1133]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-[#1c1133] sm:text-4xl">
            We are 100% solution oriented.
          </h2>
          <p className="mt-4 text-pretty text-sm/6 text-[#4b4860]">
            Octopus helps organisations with multifaceted challenges that are all addressable
            through the right solution partner. And we help you find them.
          </p>
        </div>

        {/* Background connectors */}
        <div className="pointer-events-none absolute left-1/2 top-[52%] z-0 h-28 w-[92%] -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-gradient-to-r from-transparent via-[#c7b6ff]/30 to-transparent ring-1 ring-[#b7a5ff]/30" />
        <div className="pointer-events-none absolute left-1/2 top-[78%] z-0 h-28 w-[86%] -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-gradient-to-r from-transparent via-[#c7b6ff]/30 to-transparent ring-1 ring-[#b7a5ff]/30" />

        {/* Cards grid */}
        <div className="relative z-10 mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SOLUTIONS.slice(0, 3).map((item) => (
            <SolutionCard key={item.title} item={item} />
          ))}
        </div>

        <div className="relative z-10 mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:[&>*:nth-child(1)]:translate-y-3 lg:[&>*:nth-child(2)]:-translate-y-2 lg:[&>*:nth-child(3)]:translate-y-3">
          {SOLUTIONS.slice(3).map((item) => (
            <SolutionCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

