import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedButtonProps {
  label: string;
  iconMain: React.ReactNode;
  iconBefore: React.ReactNode;
  iconAfter: React.ReactNode;
  className?: string;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  label,
  iconMain,
  iconBefore,
  iconAfter,
}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setIsActive(!isActive)}
      className={cn(
        "flex items-center gap-1.5 px-3 py-2 rounded-full transition-colors duration-300 text-[12px]",
        isActive
          ? "bg-red-500 text-white hover:bg-red-600"
          : "border border-red-500 text-red-500 hover:bg-red-100 hover:text-red-600"
      )}
    >
      <span>{iconMain}</span>
      <span className="font-medium">{label}</span>
      <span>{isActive ? iconAfter : iconBefore}</span>
    </button>
  );
};

export default AnimatedButton;
