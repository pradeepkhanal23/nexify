import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/*

clsx:
      clsx helps conditionally join class names based on input.
      It can dynamically handle logic like adding a class only if a certain condition is true.

twMerge:
      Tailwind CSS doesn't inherently handle conflicting class names (e.g., bg-red-500 and bg-blue-500 used together).
      twMerge resolves conflicts and ensures the last conflicting class takes precedence. 

cn:
      First, clsx evaluates and combines the class names conditionally.
      Then, twMerge resolves any Tailwind class name conflicts. 

cn("bg-red-500", isActive && "text-white", "bg-blue-500");
// Output: "bg-blue-500 text-white" (if isActive is true)


*/
