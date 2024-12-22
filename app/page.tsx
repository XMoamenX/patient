"use client";
import { SidebarDemo } from "./components/navbar/nav";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Dashboard from "./components/home/dashboard";


export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 flex-1 max-w-screen mx-auto border border-neutral-200 dark:border-neutral-700 overflow-hidden",
        "h-screen" // for your use case, use `h-screen` instead of `h-[60vh]`
      )}
    >
      <SidebarDemo open={open} setOpen={setOpen} />
      <Dashboard />
    </div>
  );
}