import React from "react";
import Link from "next/link";

export default function Breadcrumb({
  paths,
  currentPage,
  className = "",
}: {
  paths: { name: string; href: string }[];
  currentPage: string; 
  className?: string; 
}) {
  return (
    <div className={`flex items-center space-x-2${className}`}>
      {paths.map((path, index) => (
        <React.Fragment key={index}>
          <Link href={path.href}>
            <span className="text-base hover:text-primary hover:underline font-bold">
              {path.name}
            </span>
          </Link>
          <span>/</span>
        </React.Fragment>
      ))}
      <span className="text-gray-500 font-semibold">{currentPage}</span>
    </div>
  );
}
