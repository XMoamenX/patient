"use client";

import React from "react";
import { useEffect, useState } from "react";
import { Moon, Sun } from "@phosphor-icons/react";

interface ThemeSelectorProps {
  open?: boolean;
}

const ThemeSelector: React.FC<ThemeSelectorProps> = ({ open = false }: ThemeSelectorProps) => {
  const [theme, setTheme] = useState("dark");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    console.log("ThemeSelector mounted");
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) return;
    console.log("ThemeSelector loaded");
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    console.log("localStorage.theme", localStorage.theme);

    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (!isLoaded) return;
    
    if (theme === "dark") {
      localStorage.theme = "dark";
      window.document.documentElement.classList.add("dark");
    } else if (theme === "light") {
      localStorage.theme = "light";
      window.document.documentElement.classList.remove("dark");
    } else {
      localStorage.removeItem("theme");
      if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        document.documentElement.classList.add("dark");
        setTheme("dark");
      } else {
        document.documentElement.classList.remove("dark");
        setTheme("light");
      }
    }
    console.log("localStorage.theme", localStorage.theme);
  }, [theme]);

  return (
    <div className= "group flex justify-start items-center h-4 text-neutral-700 dark:text-neutral-200 text-sm  hover:cursor-pointer">
      {theme === "dark" && (
        <button onClick={() => setTheme("light")} className=" flex flex-row justify-center items-center gap-1 ">
          <Sun size={18} />
          {open && <span className="group-hover:translate-x-1 hover:transition hover:duration-150">Light</span>}
        </button>
      )}

      {theme === "light" && (
        <button onClick={() => setTheme("dark")}  className="group flex flex-row justify-center items-center gap-2">
          <Moon size={18} />
          {open && <span className="group-hover:translate-x-1 hover:transition hover:duration-150">Dark</span>}
        </button>
      )}
    </div>
  );
};

export { ThemeSelector };