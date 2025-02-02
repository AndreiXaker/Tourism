'use client';
import Image from 'next/image';
import { useState } from 'react';
import TourvisorWidget from '../widgets/tourvision';

export default function Menu() {
  const [showWidget, setShowWidget] = useState(false);

  const options = [
    { src: '/gold_air.svg', text: 'Туры по всему миру', onClick: () => setShowWidget(true) },
    { src: '/airplane.svg', text: 'Отели по всему миру' },
    { src: '/airplane.svg', text: 'Туры и санатории России' },
    { src: '/airplane.svg', text: 'Авиабилеты' },
    { src: '/airplane.svg', text: 'Трансферы' },
    { src: '/airplane.svg', text: 'Страхование' },
    { src: '/airplane.svg', text: 'Экскурсии' },
    { src: '/airplane.svg', text: 'Морские и речные круизы' },
    { src: '/airplane.svg', text: 'Ж/Д билеты' },
  ];

  return (
    <div className="text-white w-full overflow-x-auto p-4">
      <div className="flex space-x-4">
        {options.map((option, index) => (
          <div
            key={index}
            className="bg-black bg-opacity-30 p-4 rounded-lg flex flex-col w-[162px] h-[108px] cursor-pointer"
            onClick={option.onClick}
          >
            <Image src={option.src} alt={option.text} width={28} height={27} />
            <p className="mt-2 text-start text-xs">{option.text}</p>
          </div>
        ))}
      </div>

      
      {showWidget && (
        <div className="mt-4">
          <TourvisorWidget visible={showWidget}/>
        </div>
      )}
    </div>
  );
}
