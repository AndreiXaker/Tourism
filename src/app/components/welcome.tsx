import Image from "next/image"
export default function Welcome() {
    return (
        <div className="relative">
        {/* Изображение */}
        <Image
          src="/pic1.svg"
          alt="pic"
          width={4111}
          height={1816}
          className="w-full h-auto"
        />

        {/* Текст поверх изображения */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold px-4 py-2 rounded-lg">
          Комбинация туров это наша сильная сторона,  мы знаем об этом все!
          </h1>
        </div>
        
      </div>
    )
}