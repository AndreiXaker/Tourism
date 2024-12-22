import Image from 'next/image';

export default function Menu() {
  return (
    <div className="bg-zinc-900 text-white w-full overflow-x-auto">
      <div className="flex justify-between items-center p-4 space-x-4">
        {[
          { src: '/world.svg', label: 'Туры по всему миру' },
          { src: '/hotel.svg', label: 'Отели по всему миру' },
          { src: '/russianTour.svg', label: 'Туры и санатории России' },
          { src: '/aviaTickets.svg', label: 'Авиабилеты' },
          { src: '/transfers.svg', label: 'Трансферы' },
          { src: '/savity.svg', label: 'Страхование' },
          { src: '/excoursion.svg', label: 'Экскурсии' },
          { src: '/cruises.svg', label: 'Морские и речные круизы' },
          { src: '/zhd.svg', label: 'Железнодорожные билеты' },
        ].map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center flex-grow text-center"
          >
            <Image
              src={item.src}
              alt={item.label}
              width={100}
              height={100}
              className="rounded-lg"
            />
            <span className="mt-2 text-lg font-semibold">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
