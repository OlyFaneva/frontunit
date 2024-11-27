/* eslint-disable @next/next/no-img-element */
import React from "react";
import FollowButton from "./FollowButton";
import Link from "next/link";

interface CategoryCardProps {
    mainImage: string;
    thumbnails: string[];
    title: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ mainImage, thumbnails, title }) => {
    return (
        <div className="flex flex-col items-center gap-4 w-[343px]">
            <div className="px-6 relative flex justify-center w-full items-end h-[231px]">
                <div className="absolute bg-[#ffecec] w-full h-[51%] rounded-sm"></div>
                <img
                    src={mainImage}
                    alt={title}
                    className="z-40 w-full h-60 object-contain"
                />
            </div>
            <div className="flex gap-4">
                {thumbnails.map((thumbnail, index) => (
                    <img
                        key={index}
                        src={thumbnail}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-[103px] object-contain bg-bgred rounded-sm"
                    />
                ))}
            </div>
            <div className="flex flex-col w-full gap-2">
                <Link href={'/'}>
                    <p className="text-gray-800 font-medium text-lg hover:underline underline-offset-2">{title}</p>
                </Link>
                <FollowButton />
            </div>
        </div>
    );
};


export default CategoryCard;
