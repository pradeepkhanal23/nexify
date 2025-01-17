import { cn } from "@/lib/utils";
import React from "react";

// defining the type of the Container Props

type ContainerProps = {
  // children can be any React node e.g. other components, text, etc..
  children: React.ReactNode;
  // if any className is provided, then it will be of type string
  className?: string;
};

// creating a universal(global) container that wraps any component to maintain consistency with its fixed set of classes ("max-w-7xl mx-auto p-5") in this case along with the provided additional classnames
const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={cn("max-w-7xl mx-auto p-5", className)}>{children}</div>
  );
};
export default Container;

// here the cn() utility function is an helper that manages and merges the classnames for tailwindcss
