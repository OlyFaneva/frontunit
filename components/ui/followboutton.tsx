"use client";

import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";

interface RedButtonProps {
  icon: React.ReactNode;
  label: string;
}

const RedButton: React.FC<RedButtonProps> = ({ icon, label }) => {
  // État local pour gérer l'état du bouton
  const [isChecked, setIsChecked] = useState(false);

  // Fonction pour gérer le clic sur le bouton
  const handleButtonClick = () => {
    setIsChecked((prevState) => !prevState);
  };

  return (
    <div className="mr-3 flex items-center justify-between rounded-full border border-red-300 bg-pink-100 px-4 py-2">
      <div className="flex items-center">
        <span className="mr-2 text-xl text-red-600">{icon}</span>
        <span className="text-sm font-medium text-[#DA1A31]">{label}</span>
      </div>

      <button
        onClick={handleButtonClick}
        className={`ml-2 flex gap-1 rounded-full border px-2 py-1 text-xs font-semibold transition ${
          isChecked
            ? "border-red-400 bg-red-300 text-red-600 hover:bg-red-600 hover:text-white"
            : "border-red-400 bg-red-300 text-red-600 hover:bg-red-600 hover:text-white"
        }`}
      >
        {isChecked ? <FaCheck size={12} /> : "+ "}{" "}
        <p>{isChecked ? "Suivi" : "Suivre"}</p>
      </button>
    </div>
  );
};

export default RedButton;
