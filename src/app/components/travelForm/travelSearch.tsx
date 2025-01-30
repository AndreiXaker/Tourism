'use client'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'
import TopForm from './top-form'
import Menu from './menu'
import SearchBar from './searchBar'
import OptionsTravel from './options/optionsTravel'

export default function TravelSearch() {
  return (
    <div className="relative w-full max-w-[1400px] mx-auto p-4 rounded-lg backdrop-blur-sm shadow-lg bg-black/20 text-white">
      <TopForm />
      
      <div className="mt-3">
        <div className="text-5xl font-bold">Мастер Туров</div> 
        <div className="font-bold mt-2">Это наша сильная сторона, мы знаем об этом все!</div>
      </div>
      
      <Menu />
      <SearchBar />
      <OptionsTravel />
    </div>
  )
}
