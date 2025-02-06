"use client";

import { SignOutButton } from "@clerk/nextjs";
import Link from "next/link";
import { useToast } from "@/hooks/use-toast";

function SignOutLink() {
  const { toast } = useToast();

  const handleLogout = () => {
    toast({
      title: "User Logout Action",
      description: "User is logging out..",
    });
  };
  return (
    <SignOutButton>
      <Link href="/" className="w-full text-left" onClick={handleLogout}>
        Logout
      </Link>
    </SignOutButton>
  );
}
export default SignOutLink;
