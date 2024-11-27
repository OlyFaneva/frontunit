import React from "react";

// Définition de l'interface
interface DetailsProps {
  image: string;
  title: string;
  details: string;
}

// Composant principal
const Details: React.FC<DetailsProps> = ({ image, title, details }) => {
  return (
    <div className="flex items-center rounded-lg bg-pink-100 p-4 shadow-md">
      {/* Image */}
      <div className="mr-4 flex-shrink-0">
        <img
          src={image}
          alt={title}
          className="h-20 w-20 object-contain"
          style={{ filter: "drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.1))" }}
        />
      </div>

      {/* Texte */}
      <div>
        <h3 className="text-xl font-bold text-red-600">{title}</h3>
        <p className="mt-2 text-sm text-gray-600">{details}</p>
      </div>
    </div>
  );
};
export default Details;
