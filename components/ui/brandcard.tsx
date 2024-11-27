import React from "react";

type BrandCardProps = {
  logo: string; // URL de l'image du logo
  name: string; // Nom de la marque
};

const BrandCard: React.FC<BrandCardProps> = ({ logo, name }) => {
  return (
    <div className=" bg-[#F2F2F2] shadow-md rounded-lg p-2 flex h-[299px] flex-col items-center justify-between w-[225px]">
      <img
        src={logo}
        alt={name}
        className="w-[209px] h-[191px] object-contain mb-4"
      />
      <h3 className="text-gray-700 font-semibold text-sm">{name}</h3>
      <button className="mt-2 mx-1 w-full h-[60px] text-[#DA1A31] bg-[#DA1A3122] px-3 py-1 rounded-lg text-lg font-semibold" >
              Suivre
            </button>
    </div>
  );
};

export default BrandCard;
