"use client";

import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

type SlideItem = {
  id: number;
  image: string;
  title: string;
  subtitle: string;
};

type ScrollableSliderProps = {
  items: SlideItem[];
  title: string;
};

const ScrollableSlider: React.FC<ScrollableSliderProps> = ({ items, title }) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };
  return (
    <div className="relative w-full bg-[#FDEFF1] py-8 px-16 h-[486px]">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">{title}</h2>
      <button
        className="absolute left-[30px] top-1/2 transform -translate-y-1/2 bg-[#DA1A3155] text-[#091E42] rounded-full p-3 z-10"
        onClick={scrollLeft}
      >
        <FaChevronLeft size={20} />
      </button>
      <div
        ref={sliderRef}
        className="flex space-x-4  overflow-x-scroll w-full no-scrollbar scroll-smooth"
      >
        {items.map((item) => (
          <div
            key={item.id}
            className="min-w-[225px] min-h-[325px] bg-[#F2F2F2] font-montserrat rounded-lg shadow-md flex flex-col items-center text-start px-2 py-3 mb-4"
          >
            <img
              src={item.image}
              alt={item.subtitle}
              className="h-[204px] w-[191] object-contain"
            /> <div className=" w-full">
            <h3 className="text-sm hover:underline hover:cursor-pointer text-gray-800">{item.subtitle}</h3>
            
            <p className="text-lg hover:underline hover:cursor-pointer font-semibold text-gray-800">{item.title}</p>
            
            </div>
            <button className="mt-2 mx-1 w-full h-[60px] text-[#DA1A31] bg-[#DA1A3122] px-3 py-1 rounded-lg text-lg font-semibold">
              Télécharger
            </button>
          </div>
        ))}
      </div>
      <button
        className="absolute right-[30px] top-1/2 transform -translate-y-1/2 bg-[#DA1A3155] text-[#091E42] rounded-full shadow-md p-3 z-10"
        onClick={scrollRight}
      >
        <FaChevronRight size={20} />
      </button>
    </div>
  );
};

export default ScrollableSlider;
