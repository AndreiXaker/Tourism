import { ChevronDown } from "lucide-react"
import Image from "next/image"
export default function TopForm() {
    return (
        <div className="flex items-center justify-between text-white text-sm pb-2 border-b border-white">
        
        {/* Логотип */}
        <div className="flex items-center space-x-2">
          <Image src="logo1.svg" alt="Logo" width={150} height={150} />
          <span>Турагентсво широких<br /> компетенций</span>
        </div>

        {/* Адрес */}
        <div className="flex items-center space-x-2">
          <Image src="Map.svg" alt="Location" width={24} height={24} />
          <span>г. Москва, Столярный<br /> переулок д.7</span>
        </div>

        {/* Телефон */}
        <div className="flex items-center space-x-2">
          <Image src="Phone.svg" alt="Phone" width={24} height={24} />
          <span>+7 (495) 777-77-77</span>
        </div>

        {/* Соц. сети */}
        <div className="flex items-center space-x-4">
          <Image src="instagram.svg" alt="Instagram" width={24} height={24} />
          <Image src="what.svg" alt="WhatsApp" width={24} height={24} />
          <Image src="telega.svg" alt="Telegram" width={24} height={24} />
        </div>

        {/* Вход */}
        <div className="flex items-center space-x-2">
          <Image src="profile.svg" alt="Profile" width={24} height={24} />
          <span>Войти / Регистрация</span>
        </div>

        {/* Язык */}
        <div className="flex items-center space-x-1 cursor-pointer">
          <span>RU</span>
          <ChevronDown />
        </div>
      </div>
    )
}