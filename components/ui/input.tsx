import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full rounded-md border border-disabled bg-transparent text-gray-500 px-3 py-1 text-base font-semibold transition-all file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-disabled focus-visible:border-primary focus-visible:shadow-[0_0_0_4px_rgba(218,26,49,0.5)] focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
