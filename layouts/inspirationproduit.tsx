
import React from "react";
import CardList from "@/components/ui/cardproduitlist";
import imgs1 from "@/public/images/Rectangle 30 (1).png";
import imgs2 from "@/public/images/Rectangle 30 (2).png";
import imgs3 from "@/public/images/Rectangle 30 (3).png";
import imgs4 from "@/public/images/Rectangle 30 (4).png";
import imgs5 from "@/public/images/Rectangle 30 (5).png";
import imgs6 from "@/public/images/Rectangle 30 (6).png";
import imgs7 from "@/public/images/Rectangle 30 (7).png";
import imgs8 from "@/public/images/Rectangle 30 (8).png";
import imgs9 from "@/public/images/Rectangle 30 (9).png";


const Home = () => {
const data = [
{
title: "Salon",
cards: [
{ image: imgs1.src, details: "Canapé d'angle", variant: "carrée-plein" },
],
footer: "Voir plus"
},
{
title: "colonne de rangement Salle de bain",
cards: [
{ image: imgs2.src, details: "aaa", variant: "petit-carrée" },
{ image: imgs3.src, details: "Table de chevet", variant: "petit-carrée" },
{ image: imgs4.src, details: "Tabouret pliant", variant: "petit-carrée" },
{ image: imgs5.src, details: "Tabouret pliant", variant: "petit-carrée" },

],
footer: "Jetez un œil à notre gamme étendue"
},
{
title: "Nouveautés pour la maison à moins de 50 €",
cards: [
{ image: imgs6.src, details: "Table de chevet", variant: "petit-carrée" },
{ image: imgs7.src, details: "Tabouret pliant", variant: "petit-carrée" },
{ image: imgs8.src, details: "Tabouret pliant", variant: "petit-carrée" },
],
footer: "Jetez un œil à notre gamme étendue"

},
{
title: "Chambre",
cards: [
{ image: imgs9.src, details: "table de nuit", variant: "carrée-plein" },

],
footer: "Voir plus"
},
];


const chunkData = (arr: any[], size: number) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  };

  const groupedData = chunkData(data, 4);

return (
<div className="px-16 my-8 h-auto ">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[#BEB8B8] text-lg ml-2 font-bold">Collections</h2>
        <button className="text-red-600 text-xl font-bold hover:underline">
          Plus
        </button>
      </div>

      <div className="bg-white min-h-auto py-6">
        {groupedData.map((group, groupIndex) => (
          <React.Fragment key={groupIndex}>
            <div className="flex justify-between">
              {group.map((item, index) => (
                <CardList key={index} groups={[item]} />
              ))}
            </div>
            {/* Ajouter un saut de ligne entre les groupes */}
            {groupIndex < groupedData.length - 1 && (
              <div className="w-full my-4"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
);
};

export default Home;