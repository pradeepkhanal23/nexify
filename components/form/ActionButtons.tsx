"use client";

import { Loader2, LucidePenSquare, LucideTrash2 } from "lucide-react";
import { Button } from "../ui/button";
import { useFormStatus } from "react-dom";

// buttons for edit and delete actions
type actionType = "edit" | "delete";
export const IconButton = ({ actionType }: { actionType: actionType }) => {
  const { pending } = useFormStatus();

  const renderIcon = () => {
    switch (actionType) {
      case "edit":
        return <LucidePenSquare />;
      case "delete":
        return <LucideTrash2 />;
      default:
        const never: never = actionType;
        throw new Error(`Invalid action type: ${never}`);
    }
  };

  return (
    <Button
      type="submit"
      size="icon"
      variant="link"
      className="p-2 cursor-pointer"
    >
      {pending ? <Loader2 className=" animate-spin" /> : renderIcon()}
    </Button>
  );
};
