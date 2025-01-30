'use client';
import { List} from "antd";
import { ChevronDown, Filter, Search } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const countryTours = [
  'Алания', 'Армения', 'Беларусь', 'Болгария', 'Венгрия', 'Германия', 'Греция', 'Израиль', 'Испания', 'Казахстан', 'Киргизия'
]

const hotels = [
  "Какой-нибудь крутой отель",
  "Какой-нибудь крутой отель",
  "Какой-нибудь крутой отель",
  "Какой-нибудь крутой отель",
  "Какой-нибудь крутой отель",
  "Какой-нибудь крутой отель",
  "Какой-нибудь крутой отель",
  "Какой-нибудь крутой отель",
  "Какой-нибудь крутой отель",
  "Какой-нибудь крутой отель",
  "Какой-нибудь крутой отель",
  "Какой-нибудь крутой отель",
  "Какой-нибудь крутой отель",
  "Какой-нибудь крутой отель",
  "Какой-нибудь крутой отель",
  
];
export default function OptionsTravel() {
  const [rating, setRating] = useState(1);  
  const [hover, setHover] = useState(0);
  const [selected,setSelected] = useState('Любой курорт')   
  const [search, setSearch] = useState("");
  return (
    <div className="w-full p-4 bg-black bg-opacity-10 rounded-lg shadow-lg mt-6">
      
      <div className="flex items-center gap-4 flex-wrap">
        
        {/* Класс отеля */}
        <div className="flex items-center gap-2 bg-black/40 text-white p-3 rounded-lg">
          Класс отеля 
          {Array.from({ length: 5 }, (_, i) => (
            <Image
              key={i}
              src={i < (hover || rating) ? "/stars.svg" : "/empty_star.svg"}
              alt="star"
              width={20}
              height={20}
              className="cursor-pointer transition-transform transform hover:scale-110"
              onMouseEnter={() => setHover(i + 1)}
              onMouseLeave={() => setHover(0)}
              onClick={() => setRating(i + 1)}
            />
          ))}
        </div>

        {/* Другие фильтры, каждый в отдельном div */}
        {["Тип отеля", "Питание", "Рейтинг", "Услуги отеля"].map((text, index) => (
          <div key={index} className="flex items-center gap-2 bg-black/40 text-white p-3 rounded-lg cursor-pointer ">
            {text} <ChevronDown className="text-white" />
          </div>
        ))}
        
      </div>
      <div className="flex flex-1 gap-2">
      {/* Список курортов */}
      <div className="w-64 bg-black/40 p-4 rounded-xl mt-4 ">
      <List
        className="h-96 overflow-y-auto custom-scroll"
        dataSource={countryTours}
        renderItem={(resort) => (
          <List.Item
            className={`flex items-center justify-between p-2 rounded-lg cursor-pointer 
                        ${selected === resort ? "bg-white/20" : "hover:bg-white/10"}`}
            onClick={() => setSelected(resort)}
          >
            <div className="flex items-center gap-2 text-white">
              <Image src={selected == resort ? '/rightCircle.svg': '/circle.svg'} alt="star" width={20} height={20} />
              {resort}
            </div>
            {resort !== "Любой курорт" }
          </List.Item>
        )}
      />
    </div >
     {/* Список отелей */}
    <div className="w-full bg-black/40 p-4 rounded-xl mt-4 ">
    {/* Поле поиска */}
    <div className="flex items-center bg-white/10 p-2 rounded-lg border-b border-white w-full">
    <Search className="text-white text-lg mr-2" />
    <input
    type="text"
    placeholder="Введите название отеля"
    className="bg-transparent border-none outline-none text-white flex-grow placeholder-white"
    />
    <Filter className="text-white text-lg cursor-pointer" />
    </div>
    {/* Список отелей */}
    <List
  className="h-80 overflow-y-auto custom-scroll mt-3"
  dataSource={hotels}
  renderItem={(hotel) => (
    <List.Item
  className={`flex items-center justify-between  cursor-pointer  
              ${selected === hotel ? "bg-white/20" : "hover:bg-white/10"}`}
  onClick={() => setSelected(hotel)}
>
      <div className="flex items-center gap-2 text-white max-h-full">
        <Image
          src={selected === hotel ? "/rightCircle.svg" : "/circle.svg"}
          alt="icon"
          width={20}
          height={20}
        />
        {hotel}
      </div>
    </List.Item>
  )}
/>
    </div>
    </div>

    <div className="flex items-center gap-4 flex-wrap">
    <div className="flex w-[215px] mt-4 items-center justify-between bg-black/40 text-white p-3 rounded-lg cursor-pointer ">
      Бюджет <ChevronDown className="text-white" />
    </div>

    <div className="flex w-[350px] mt-4 items-center justify-between bg-black/40 text-white p-3 rounded-lg cursor-pointer ">
      Только Чартер
      <Image
          src='/circle.svg'
          alt="icon"
          width={20}
          height={20}
        />
    </div>

    <div className="flex w-[350px] mt-4 items-center justify-between bg-black/40 text-white p-3 rounded-lg cursor-pointer ">
      Гарантия мест в отеле
      <Image
          src='/circle.svg'
          alt="icon"
          width={20}
          height={20}
        />
    </div>
    
    <button className="w-[360px] h-[48px] bg-gradient-to-br from-yellow-800 to-yellow-200 text-black px-6 py-2 rounded-lg ml-2 mt-4">
          Найти туры
    </button>
    </div>
    </div>


    
  );
}
