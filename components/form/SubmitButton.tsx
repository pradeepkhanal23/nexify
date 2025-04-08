"use client";

import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type SubmitButtonProps = {
  btnSize?: "sm" | "default" | "lg";
  className?: string;
  text?: string;
};

const SubmitButton = ({
  btnSize = "lg",
  text = "submit",
  className = "",
}: SubmitButtonProps) => {
  const { pending } = useFormStatus();
  return (
    <Button
      disabled={pending}
      size={btnSize}
      type="submit"
      className={cn("capitalize", className)}
    >
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Please wait...
        </>
      ) : (
        text
      )}
    </Button>
  );
};
export default SubmitButton;
