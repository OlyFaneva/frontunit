import React from "react";
import DivisionSection from "@/components/tools/DivisionSection";
import CategoryCard from "@/components/ui/CategoryCard";
import Breadcrumb from "@/components/tools/Breadcrumb";

export default function Disivions() {
  const categoryCount = 41;
  const categories = Array.from({ length: categoryCount }, (_, i) => i);

  const divisionImages: { [key: string]: string } = {
    division1: "/images/division1.png",
    division2: "/images/division2.png",
    division3: "/images/division3.png",
    division4: "/images/division4.png",
    division5: "/images/division5.png",
    division6: "/images/division6.png",
  };

  const thumbnails: string[] = [
    "/images/2.png",
    "/images/3.png",
    "/images/4.png",
  ];

  const titles: string[] = [
    "Électricité",
    "Plomberie",
    "Menuiserie",
    "Peinture",
    "Maçonnerie",
    "Carrelage",
  ];

  return (
    <div>
      <DivisionSection
        images={divisionImages}
        title="Divisions"
        description="Explorer toutes les divisions disponibles dans notre catalogue."
      />
      <div className="p-4 px-16">
        <Breadcrumb
          paths={[{ name: "Accueil", href: "/" }]}
          currentPage="Toutes les divisions"
          className="mb-4"
        />
      </div>
      <div className="flex justify-center mb-20">
        <div className="grid grid-cols-3 gap-16 place-items-center w-full">
          {categories.map((_, index) => (
            <CategoryCard
              key={index}
              mainImage={divisionImages[`division${(index % 6) + 1}`]}
              thumbnails={thumbnails}
              title={titles[index % titles.length]}
            />
          ))}
        </div>
      </div>
    </div>
  );
}




