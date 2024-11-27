import React from "react";

interface CardProjetProps {
title: string;
details: string;
}

const CardProjet: React.FC<CardProjetProps> = ({ title, details}) => {
    return (
    <div
        className="bg-white shadow-md rounded-lg w-[320px] h-[222px] p-6 border mb-5 mr-5 border-gray-100 hover:shadow-xl transition-shadow duration-200">
        <h3 className="text-lg font-semibold text-black mb-2">{title}</h3>
        <p className="text-gray-500 text-sm mb-4">{details}</p>
        
        <button className="mt-2 mx-1 w-full h-[60px] text-[#DA1A31] bg-[#DA1A3122] px-3 py-1 rounded-lg text-lg font-semibold">
              Télécharger
            </button>
    </div>
    );
    };

    export default CardProjet;