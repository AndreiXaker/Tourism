'use client';
import Image from 'next/image';
import { useState } from 'react';
import TourvisorWidget from './widgets/tourvision';
import KiwiTaxiWidget from './widgets/transfers';
import Insurance from './widgets/insurance';
export default function Menu() {
  const [widgetVisible, setWidgetVisible] = useState(false);
  const [travelWidgetVisible, setTravelWidgetVisible] = useState(false);
  const [transfersWidgetVisible, setTransfersWidgetVisible] = useState(false);

  const menuItems = [
    { src: '/world.svg', label: 'Туры по всему миру', onClick: () => setTravelWidgetVisible(true) },
    { src: '/hotel.svg', label: 'Отели по всему миру' },
    { src: '/russianTour.svg', label: 'Туры и санатории России' },
    { src: '/aviaTickets.svg', label: 'Авиабилеты' },
    { src: '/transfers.svg', label: 'Трансферы', onClick : () => setTransfersWidgetVisible(true) },
    { src: '/savity.svg', label: 'Страхование', onClick : () => setWidgetVisible(true)},
    { src: '/excoursion.svg', label: 'Экскурсии' },
    { src: '/cruises.svg', label: 'Морские и речные круизы' },
    { src: '/zhd.svg', label: 'Железнодорожные билеты' },
  ];

  return (
    <div className="bg-zinc-900 text-white w-full overflow-x-auto">
      <div className="flex justify-between items-center p-4 space-x-4">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center flex-grow text-center"
            onClick={item.onClick}
          >
            <Image
              src={item.src}
              alt={item.label}
              width={100}
              height={100}
              className="rounded-lg cursor-pointer"
            />
            <span className="mt-2 text-lg font-semibold">{item.label}</span>
          </div>
        ))}
      </div>
      <KiwiTaxiWidget visible={transfersWidgetVisible} onClose={() => setTransfersWidgetVisible(false)}>
      </KiwiTaxiWidget>
      <Insurance visible={widgetVisible} onClose={() => setWidgetVisible(false)} />
      <TourvisorWidget visible={travelWidgetVisible} />
    
    </div>
    
  );
}
