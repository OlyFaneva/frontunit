/* eslint-disable @next/next/no-img-element */
'use client';

import React from "react";
import BtnDownload from "../ui/btnDownload";

export default function Card({
  imageSrc,
  brand,
  title,
}: {
  imageSrc: string;
  brand: string;
  title: string;
}) {
  return (
    <div className="p-4 max-w-sm">
      <div className="flex justify-center mb-4 bg-bgred rounded-[5px]">
        <img
          src={imageSrc}
          alt={title}
          className="h-64 w-full object-contain"
        />
      </div>
      <p className="text-sm text-gray-500 w-full hover:underline cursor-pointer">{brand}</p>
      <h2 className="text-lg h-12 font-bold mb-4 w-full hover:underline cursor-pointer">{title}</h2>
      <BtnDownload className="w-full">Télécharger</BtnDownload>
    </div>
  );
}
