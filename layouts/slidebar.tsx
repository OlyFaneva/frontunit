/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { useState, useEffect } from 'react';
import  img1  from '../public/images/Rectangle 12.png'
import  img2  from '../public/images/Rectangle 17.png'
import  img3  from '../public/images/Rectangle 16 (6).png'
import  img4  from '../public/images/Rectangle 16 (7).png'

interface Slide {
  id: number;
  title: string;
  description: string;
  image: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Porte intérieure",
    description: "Disponible en différente couleur",
    image:  img1.src,
  },
  {
    id: 2,
    title: "Lit",
    description: "Disponible en 4 couleur",
    image:  img2.src, 
  },{
    id: 3,
    title: "Armoir à trois portes",
    description: "Disponible en marron",
    image:  img3.src, 
  },{
    id: 4,
    title: "tabouret à quatre pieds",
    description: "Disponible en différente couleur",
    image:  img4.src, 
  }
];

const slidebar: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[360px] bg-pink-100 pb-0">
      
      <div className="flex items-center justify-arround max-w-7xl mb-10 pt-4 pb-0">
        
        <div className="flex-1">
          <h1 className="text-4xl relative left-12 w-[650px] ml-5 font-bold text-red-600">
            Bienvenue sur notre <br /> catalogue numérique
          </h1>
        </div>
        
        <div className="flex-1  flex items-center relative m-2 ml-12 left-52 ">
          <div className='relative left-10'>
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="w-[288px] h-[290px] object-cover"
          />
          <div className="relative flex justify-center ml-10 mt-4 w-60 gap-4 py-2 ">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-red-500' : 'bg-gray-300'
            }`}
          ></button>
        ))}
      </div>
          </div>
          <div className="absolute top-[92px] ml-0 right-0 w-[276px] h-[238px] p-2 rounded text-center">
            <h2 className="font-semibold">{slides[currentSlide].title}</h2>
            <p className="text-gray-500 text-sm">
              {slides[currentSlide].description}
            </p>
            <button className="mt-2 bg-red-500 text-white px-4 w-[186px] h-[35px] rounded-lg hover:bg-red-600">
              <p className='flex gap-2 text-lg font-semibold'>
                <span><img src="/icons/Vector.png" alt="" className='mt-1' /></span>
              Voir produits
                </p>
            </button>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default slidebar;
