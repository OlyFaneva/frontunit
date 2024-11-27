import React from "react";
import FollowButton from "@/components/ui/FollowButton";

interface CompanyCardProps {
  logoPath: string; 
}

const CompanyCard: React.FC<CompanyCardProps> = ({ logoPath }) => {
  return (
    <div className="flex items-center justify-between p-2 border rounded-lg shadow-sm bg-white">
      <img
        src={logoPath}
        alt="Logo"
        className="w-12 h-12 object-contain"
        onError={(e) => {
          (e.target as HTMLImageElement).src = "/images/fallback.png"; 
        }}
      />
      <FollowButton />
    </div>
  );
};

export default CompanyCard;
