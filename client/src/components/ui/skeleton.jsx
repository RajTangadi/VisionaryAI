import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }) {
  return (
    <div
      data-slot="skeleton"
      className={cn(
        "animate-pulse bg-gray-300 dark:bg-gray-700 h-40 w-full rounded-md",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
