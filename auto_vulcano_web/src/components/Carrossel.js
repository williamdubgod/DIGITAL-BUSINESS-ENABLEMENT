
// Não estou conseguindo criar o componente carrossel para minhas paginas, por conta do next.js, aparentemente ele conflita com o useState.

import React, { useState } from 'react';
import Car from "@/assets/corolla-cross(1).png";
import Image from 'next/image'

import { useClient } from 'next/client';
import { useState } from 'react';

const images = [Car, Car, Car];

const Carrossel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-screen-xl mx-auto">
      <div className="carousel">
        <button
          className="absolute top-1/2 transform -translate-y-1/2 left-2 text-2xl bg-transparent border-none cursor-pointer z-10"
          onClick={prevImage}
        >
          &#10094;
        </button>
        <Image
          src={images[currentImageIndex]}
          alt="Carro"
          className="w-full h-auto"
        />
        <button
          className="absolute top-1/2 transform -translate-y-1/2 right-2 text-2xl bg-transparent border-none cursor-pointer z-10"
          onClick={nextImage}
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Carrossel;




