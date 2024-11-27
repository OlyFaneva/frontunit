"use client "
// components/SlideBarLayout.tsx
import React, { useState } from 'react';
import RedButton from '../components/ui/followboutton';
import { FaWrench, FaLightbulb, FaCouch, FaBicycle, FaTools } from 'react-icons/fa';
import imgs1 from "@/public/images/Rectangle 16 (14).png";

const divisions = [
{ icon:
<FaWrench />, title: 'Plomberie', image: imgs1.src,details:
"Téléchargez et recherchez des produits électriques. Parcourez la bibliothèque organisée de produits spécifiques auxfabricants d'objet BIM pour rechercher et sélectionner les produits électriques à utiliser dans votre projet.",
},
{ icon:
<FaLightbulb />, title: 'Électricité', image: imgs1.src, details:
"Téléchargez et recherchez des produits électriques. Parcourez la bibliothèque organisée de produits spécifiques auxfabricants d'objet BIM pour rechercher et sélectionner les produits électriques à utiliser dans votre projet.",
},
{ icon:
<FaCouch />, title: 'Ameublement et Décoration', image: imgs1.src, details:
"Téléchargez et recherchez des produits électriques. Parcourez la bibliothèque organisée de produits spécifiques auxfabricants d'objet BIM pour rechercher et sélectionner les produits électriques à utiliser dans votre projet.",
},
{ icon:
<FaBicycle />, title: 'Transport', image: imgs1.src, details:
"Téléchargez et recherchez des produits électriques. Parcourez la bibliothèque organisée de produits spécifiques auxfabricants d'objet BIM pour rechercher et sélectionner les produits électriques à utiliser dans votre projet.",
},
{ icon:
<FaTools />, title: 'Installations spéciales' , image: imgs1.src, details:
"Téléchargez et recherchez des produits électriques. Parcourez la bibliothèque organisée de produits spécifiques auxfabricants d'objet BIM pour rechercher et sélectionner les produits électriques à utiliser dans votre projet.",
},
];
const SlideBarLayout: React.FC = () => {
return (
<div className="px-16 pt-16 pb-3 bg-white">
  <div className="flex justify-between items-center mb-4">
    <h2 className="text-[#BEB8B8] text-lg font-bold">Toutes les divisions</h2>
    <button className="text-red-600 text-xl font-bold hover:underline">Plus</button>
  </div>

  <div className="flex space-x-2 text-[#DA1A31] overflow-x-scroll no-scrollbar">
    {divisions.map((division, index) => (
    <div className='text-[#DA1A31]'>
      <RedButton key={index} icon={division.icon} label={division.title} />
    </div>
    ))}
  </div>
</div>
);
};

export default SlideBarLayout;