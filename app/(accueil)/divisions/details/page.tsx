import React from "react";
import { FaBolt } from "react-icons/fa";
import DivisionSection from "@/components/tools/DivisionSection";
import Card from "@/components/tools/card";

export default function DisivionsDetails() {
  const divisionImages: { [key: string]: string } = {
    division1: "/images/division5.png",
  };
  const cardsData = Array.from({ length: 45 }, (_, index) => ({
    imageSrc: `/images/details/${index + 1}.png`,
    brand: "Tanguay",
    title: `Plusminus-${6230 + index}`,
  }));
  
  console.log(cardsData);
  

  return (
    <div>
      <DivisionSection
        images={divisionImages}
        title="Électricité"
        description={
          <>
            Téléchargez et recherchez des produits électriques. <br />
            Parcourez la bibliothèque organisée de produits spécifiques aux fabricants de objet BIM pour rechercher et sélectionner les produits électriques à utiliser dans votre projet. Explorez toutes les divisions disponibles dans notre catalogue.
          </>
        }
        imageSize="h-[164px] w-[164px]"
        gridCols="grid-cols-1"
        icon={<FaBolt className="text-red-600 text-4xl" />}
      />
      <div className="flex justify-center p-12">
        <div className="grid grid-cols-5 gap-8 place-items-center w-full">
          {cardsData.map((card, index) => (
            <Card
              key={index}
              imageSrc={card.imageSrc}
              brand={card.brand}
              title={card.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
