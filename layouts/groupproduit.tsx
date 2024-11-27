
import React from "react";
import CardList from "@/components/ui/cardproduitlist";
import imgs1 from "@/public/images/Rectangle 27.png";
import imgs2 from "@/public/images/Rectangle 27 (1).png";
import imgs3 from "@/public/images/Rectangle 27 (2).png";
import imgs4 from "@/public/images/Rectangle 26 (4).png";
import imgs5 from "@/public/images/Rectangle 26.png";
import imgs6 from "@/public/images/Rectangle 26 (1).png";
import imgs7 from "@/public/images/Rectangle 26 (2).png";
import imgs8 from "@/public/images/Rectangle 26 (3).png";
import imgs9 from "@/public/images/Rectangle 28.png";
import imgs10 from "@/public/images/Rectangle 28 (1).png";
import imgs11 from "@/public/images/Rectangle 28 (2).png";
import imgs12 from "@/public/images/Rectangle 28 (3).png";
import imgs13 from "@/public/images/Rectangle 29.png";
import imgs14 from "@/public/images/Rectangle 29 (1).png";


const Home = () => {
const data = [
{
title: "Salon",
cards: [
{ image: imgs5.src, details: "Canapé d'angle", variant: "petit-carrée" },
{ image: imgs6.src, details: "meuble TV", variant: "petit-carrée" },
{ image: imgs7.src, details: "nibliothèque", variant: "petit-carrée" },
{ image: imgs8.src, details: "étagère murales", variant: "petit-carrée" },
],
footer: "Voir plus"
},
{
title: "colonne de rangement Salle de bain",
cards: [
{ image: imgs4.src, details: "aaa", variant: "carrée-plein" },
],
footer: "Jetez un œil à notre gamme étendue"
},
{
title: "Nouveautés pour la maison à moins de 50 €",
cards: [
{ image: imgs1.src, details: "Table de chevet", variant: "petit-carrée" },
{ image: imgs2.src, details: "Tabouret pliant", variant: "petit-carrée" },
{ image: imgs3.src, details: "Tabouret pliant", variant: "petit-carrée" },
],
footer: "Trouvez les dernières innovations pour votre maison"

},
{
title: "Chambre",
cards: [
{ image: imgs9.src, details: "table de nuit", variant: "petit-carrée" },
{ image: imgs10.src, details: "lit 2 places", variant: "petit-carrée" },
{ image: imgs11.src, details: "lit superposé", variant: "petit-carrée" },
{ image: imgs12.src, details: "armoir", variant: "petit-carrée" },
],
footer: "Voir plus"
},
{
    title: "Cuisine",
    cards: [
    { image: imgs13.src, details: "Table de cuisine", variant: "rectangle" },
    { image: imgs6.src, details: "meuble TV", variant: "petit-carrée" },
    { image: imgs7.src, details: "nibliothèque", variant: "petit-carrée" },
    ],
    footer: "Discover plus in Home"
    },
    
    {
    title: "Nouveautés pour la maison à moins de 50 €",
    cards: [
    { image: imgs1.src, details: "Table de chevet", variant: "petit-carrée" },
    { image: imgs2.src, details: "Tabouret pliant", variant: "petit-carrée" },
    { image: imgs3.src, details: "Tabouret pliant", variant: "petit-carrée" },
    ],
    footer: "Trouvez les dernières innovations pour votre maison"
    },
    {
        title: "Dressing",
        cards: [
        { image: imgs14.src, details: "aaa", variant: "carrée-plein" },
        ],
        footer: "Discover plus in Home"
        },
    {
    title: "Chambre",
    cards: [
    { image: imgs9.src, details: "table de nuit", variant: "petit-carrée" },
    { image: imgs10.src, details: "lit 2 places", variant: "petit-carrée" },
    { image: imgs11.src, details: "lit superposé", variant: "petit-carrée" },
    { image: imgs12.src, details: "armoir", variant: "petit-carrée" },
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
<div className="px-16 my-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[#BEB8B8] text-lg ml-2 font-bold">Collections</h2>
        <button className="text-red-600 text-xl font-bold hover:underline">
          Plus
        </button>
      </div>

      <div className="bg-white min-h-screen py-6">
        {groupedData.map((group, groupIndex) => (
          <React.Fragment key={groupIndex}>
            <div className="flex justify-between mb-10">
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