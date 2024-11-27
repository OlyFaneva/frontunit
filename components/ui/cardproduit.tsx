import React from "react";

type CardVariant = "petit-carrée" | "rectangle" | "carrée-plein";

type CardProps = {
  image: string;
  details: string;
  groupDetails?: string;
  variant: CardVariant;
};

const Card: React.FC<CardProps> = ({ image, details, variant }) => {
  const variantClasses = {
    "petit-carrée": "w-[130px] h-[115]",
    rectangle: "w-full h-[140px]",
    "carrée-plein": "w-[300px] h-[288px]",
  };

  return (
    <div className={`h-[145px] overflow-hidden p-1 ${variantClasses[variant]}`}>
      <img
        src={image}
        alt={details}
        className={`h-[115px] w-auto rounded-[2px] object-cover ${variantClasses[variant]}`}
      />
      {details && (
        <div className="pt-1">
          <p className="text-[16px] font-medium text-gray-800">{details}</p>
        </div>
      )}
    </div>
  );
};

export default Card;
