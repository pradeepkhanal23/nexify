import { cn } from "@/lib/utils";

type EmptyListProps = {
  message: string;
  className?: string;
};

const EmptyList = ({ message, className }: EmptyListProps) => {
  return <h2 className={cn("text-xl", className)}>{message}</h2>;
};
export default EmptyList;
