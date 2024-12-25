import { Badge, Card } from "antd"
import Image from "next/image"

export default function Spo() {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">SPO</h2>
          <h3 className="text-xl text-gray-600">Спецпредложения</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { src: '/maldi.jpg', label: 'Мальдивы', discount: 45 },
            { src: '/belek.jpg', label: 'Белек', discount: 40 },
            { src: '/thai.jpeg', label: 'Тайланд', discount: 25 },
            { src: '/oae.jpeg', label: 'ОАЭ', discount: null },
          ].map((offer, index) => (
            <div key={index} className="relative overflow-hidden group cursor-pointer">
              <div className="relative aspect-[3/4]">
                <img
                  src={offer.src}
                  alt={offer.label}
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Label Badge */}
                <div className="absolute top-4 left-4 bg-pink-500 hover:bg-pink-600 text-white px-2 py-1 rounded">
                  {offer.label}
                </div>
                
                {/* Discount Badge */}
                {offer.discount && (
                  <div className="absolute top-4 right-4 bg-pink-500 rounded-full p-3 text-white text-center">
                    <div className="text-xs">СКИДКИ</div>
                    <div className="text-xl font-bold">{offer.discount}%</div>
                  </div>
                )}
                
                {/* Destination Name */}
                <h3 className="absolute bottom-4 left-4 text-white text-2xl font-bold">
                  {offer.label}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


