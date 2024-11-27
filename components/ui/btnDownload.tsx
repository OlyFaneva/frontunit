'use client';

import React from "react";

export default function BtnDownload({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      className={`bg-bgred text-red-600 font-medium py-2 px-4 rounded-[5px] hover:bg-red-100 transition ${className}`}
    >
      {children}
    </button>
  );
}
