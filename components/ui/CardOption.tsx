import React from "react";

interface CardOptionProps {
  title: string;
  icon: string;
  selected: boolean;
  onClick: () => void;
}

const CardOption: React.FC<CardOptionProps> = ({ title, icon, selected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`flex flex-col items-center justify-center w-20 h-20 border-2 rounded-lg cursor-pointer ${
        selected ? "border-red-500 bg-red-50" : "border-gray-300 bg-white"
      }`}
    >
      <img src={icon} alt={title} className="h-8 w-8" />
      <span className={`mt-1 text-sm font-medium ${selected ? "text-red-500" : "text-gray-500"}`}>
        {title}
      </span>
    </div>
  );
};

export default CardOption;
