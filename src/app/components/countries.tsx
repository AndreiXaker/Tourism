'use client'
import { List } from "antd";
import { Search } from "lucide-react";
import Image from "next/image";
import { useState } from 'react';

const countryTours = [
  { name: "Абхазия", flag: "/flags/Property 1=abkhazia.png" },
  { name: "Афганистан", flag: "/flags/Property 1=afghanistan.png" },
  { name: "Албания", flag: "/flags/Property 1=albania.png" },
  { name: "Самоа", flag: "/flags/Property 1=americansamoa.png" },
  { name: "Андора", flag: "/flags/Property 1=andorra.png" },
  { name: "Аргентина", flag: "/flags/Property 1=argentina.svg" },
  { name: "Австралия", flag: "/flags/Property 1=australia.png" },
  { name: "Австрия", flag: "/flags/Property 1=austria.png" },
];

export default function Countries() {
    const [selected, setSelected] = useState("Любой курорт");

    return (
        <div className="flex flex-1 space-x-20">
            <div className="w-[387px] p-4 bg-black bg-opacity-40 rounded-lg shadow-lg mt-6">
                <div className="mb-4 flex items-center bg-white/10 p-2 rounded-lg border border-gray-400 w-full">
                    <Search className="text-white text-lg mr-2" />
                    <input
                        type="text"
                        placeholder="Введите запрос для поиска"
                        className="bg-transparent border-none outline-none text-white flex-grow placeholder-white"
                    />
                </div>
                <List
                    className="h-96 overflow-y-auto custom-scroll"
                    dataSource={countryTours}
                    renderItem={({ name, flag }) => (
                        <List.Item
                            className={`flex items-center justify-between p-2 rounded-lg cursor-pointer 
                                        ${selected === name ? "bg-white/20" : "hover:bg-white/10"}`}
                            onClick={() => setSelected(name)}
                        >
                            <div className="flex items-center gap-2 text-white">
                                <Image src={flag} alt={name} width={30} height={20} />
                                {name}
                            </div>
                        </List.Item>
                    )}
                />
            </div>
            <div className="flex flex-col">
            <div className="flex flex-1 text-white">
                <div className="flex flex-1 w-max h-min space-x-16">
                    <div className="p-4 bg-black bg-opacity-40 rounded-2xl shadow-lg mt-6">О стране</div>
                    <div className="p-4 bg-black bg-opacity-40 rounded-2xl shadow-lg mt-6">Туры</div>
                    <div className="p-4 bg-black bg-opacity-40 rounded-2xl shadow-lg mt-6">Курорты</div>
                    <div className="p-4 bg-black bg-opacity-40 rounded-2xl shadow-lg mt-6">Отели</div>
                    <div className="p-4 bg-black bg-opacity-40 rounded-2xl shadow-lg mt-6">Виза</div>
                    <div className="p-4 bg-black bg-opacity-40 rounded-2xl shadow-lg mt-6">Условия въезда</div>
                    <div className="p-4 bg-black bg-opacity-40 rounded-2xl shadow-lg mt-6">Доп. информация</div>
                </div>
            </div>
            
            {/* Перемещенный блок информации о стране */}
            <div className="w-full h-96 text-white bg-black bg-opacity-40 rounded-2xl shadow-lg mt-6 p-4">
                Информация о стране
            </div>
            </div>
        </div>
    );
}
