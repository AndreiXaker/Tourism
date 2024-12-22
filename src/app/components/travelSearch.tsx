'use client'

import { Star } from 'lucide-react'
import { Input, Radio, Select } from 'antd'
import { Button } from 'antd'
export default function TravelSearch() {
  return (
    <div className="bg-blue-500 p-6 rounded-lg">
      {/* Search Type Selection */}
      <Radio.Group defaultValue="flights" className="flex space-x-4 mb-4">
          <Radio value="flights" id="flights"> Туры с перелетом </Radio>
          <Radio value="hotels" id="hotels"> Отели </Radio>
      </Radio.Group>
        
      <div className="bg-white p-4 rounded-lg mb-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div>
            <span className="text-sm text-gray-500">Город вылета</span>
            <Input></Input>
          </div>
          <div>
            <span className="text-sm text-gray-500">Страна</span>
            <Input></Input>
          </div>
          <div>
            <span className="text-sm text-gray-500">Дата вылета</span>
            <Input></Input>
          </div>
          <div>
            <span className="text-sm text-gray-500">Ночей</span>
            <Input></Input>
          </div>
          <div>
            <span className="text-sm text-gray-500">Туристы</span>
            <Input></Input>
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <Button className="bg-red-400 hover:bg-red-500 text-white px-8">
            Найти туры
          </Button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2">
        <Button  className="bg-blue-600 text-white hover:bg-blue-700">
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 fill-current" />
            <Star className="h-4 w-4 fill-current" />
            <Star className="h-4 w-4 fill-current" />
            <Star className="h-4 w-4 fill-current" />
            <Star className="h-4 w-4 fill-current" />
          </div>
        </Button>

        <Select 
        className="bg-blue-600 text-white border-none hover:bg-blue-700 "
        defaultValue='Курорт/отель'
        style={{width : 150}}
        options={[
        { value: 'Турция', label: 'Турция' },
        { value: 'Египет', label: 'Египет' },
        { value: 'Анапа', label: 'Анапа' },
        ]}
        
        />
          

        <Select 
        className="bg-blue-600 text-white border-none hover:bg-blue-700 w-[200px]"
        defaultValue='Питание'
        style={{width : 120}}
        options={[
        { value: 'Все включено', label: 'Все включено' },
        { value: 'Полный пансион', label: 'Полный пансион' },
        { value: 'Полупансион', label: 'Полупансион' },
        ]}
        />
         
           
    

        <Select 
        className="bg-blue-600 text-white border-none hover:bg-blue-700 w-[200px]"
        defaultValue='Рейтинг'
        style={{width : 120}}
        options={[
        { value: 'Высокий', label: 'Высокий' },
        { value: 'Средний', label: 'Средний' },
        { value: 'Низкий', label: 'Низкий' },
        ]}
        />

        <Select 
        className="bg-blue-600 text-white border-none hover:bg-blue-700 w-[200px]"
        defaultValue='Услуги отеля'
        style={{width : 150}}
        options={[
        { value: 'Спа', label: 'Спа' },
        { value: 'Пляж', label: 'Пляж' },
        { value: 'Бассейн', label: 'Бассейн' },
        ]}
        />      
      </div>
    </div>
  )
}

