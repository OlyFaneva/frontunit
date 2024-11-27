import React from "react";
import BrandCard from "@/components/ui/brandcard";

interface Brand {
logo: string ,
name: string,
}

const brands: Brand[] = [
{ logo: "/images/image (1).png",
name: "tanguay"
},
{ logo: "/images/image (2).png",
name: "GARAGA"
},
{ logo: "/images/image (3).png",
name: "Thermoplaste"
},
{ logo: "/images/image (4).png",
name: "iD Zen"
},
];

const BrandSection: React.FC = () => {
return (
<div className="py-5 bg-white px-16">
    <h2 className="text-[#BEB8B8] text-xl font-montserrat " style={{ fontSize: '20px' }}>Marques</h2>
    <div className="flex flex-wrap gap-6 justify-start">
        {brands.map((brand, index) => (
        <BrandCard key={index} logo={brand.logo} name={brand.name} />
        ))}
    </div>
</div>
);
};

export default BrandSection;