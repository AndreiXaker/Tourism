'use client';
import { useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';
import { Search } from 'lucide-react';
export default function SearchBar() {
  const [activeTab, setActiveTab] = useState('Туры');

  const tabs = [
    { name: 'Туры', icon: '/palm.svg' },
    { name: 'Отели', icon: '/hotel1.svg' },
    { name: 'Экскурсии', icon: '/travel_map.svg' },
  ];

  return (
    <div className="w-[1510ox] h-[185px] p-4 bg-black bg-opacity-30 rounded-lg shadow-lg">
      {/* Tabs */}
      <div className="flex ">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            className={`flex items-center px-4 py-3 rounded-t-md ${
              activeTab === tab.name ? 'bg-gradient-to-br from-yellow-800 to-yellow-200 text-black' : 'bg-gray-700 text-white'
            }`}
            onClick={() => setActiveTab(tab.name)}
          >
            <Image src={tab.icon} alt={tab.name} width={20} height={20} className="mr-2" />
            {tab.name}
          </button>
        ))}
      </div>

      {/* Search Bar */}
      <div className="bg-white flex items-center p-2 rounded-lg shadow-inner">
        <div className="flex items-center space-x-2 px-4 border-r">
          <Search className='text-gray-400'/>
          <input type="text" placeholder="Куда хотите поехать?" className="outline-none w-48 text-xs text-black" />
        </div>
        <div className="flex-1 text-center text-gray-500 border-r px-4">2 взрослых</div>
        <div className="flex-1 text-center text-gray-500 border-r px-4">Город вылета</div>
        <button className="bg-gradient-to-br from-yellow-800 to-yellow-200 text-black px-6 py-2 rounded-lg ml-2">
          Найти
        </button>
      </div>

      {/* Search Count */}
      <div className="mt-2 text-gray-300 text-sm flex items-center">
        <Search size={18}/>
        <span className="ml-2">Найдено туров за сутки: <strong><br/>12 452 203</strong></span>
      </div>
    </div>
  );
}
