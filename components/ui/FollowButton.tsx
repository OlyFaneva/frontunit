"use client";

import React, { useState } from "react";
import { FaCheck, FaPlus } from "react-icons/fa";

interface FollowButtonProps {
  className?: string;
}

const FollowButton: React.FC<FollowButtonProps> = ({ className }) => {
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setIsFollowing(!isFollowing)}
      className={`flex items-center justify-center gap-1.5 px-2 py-1 text-[10px] w-20 border rounded-full transition-colors duration-300 ${
        isFollowing
          ? "bg-red-500 text-white border-red-500 hover:bg-red-600"
          : "bg-white text-red-500 border-red-500 hover:bg-red-100"
      } ${className}`}
    >
      {isFollowing ? <FaCheck className="text-[10px]" /> : <FaPlus className="text-[10px]" />}
      <span className="text-[10px]">{isFollowing ? "Suivi" : "Suivre"}</span>
    </button>
  );
};

export default FollowButton;
