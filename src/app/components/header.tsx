import Link from "next/link";
import Image from "next/image";
import {Button} from 'antd'
export default function Header() {
    return (
      <header className="flex bg-zinc-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-3">
            {/* Logo */}
            <div className="flex-shrink-0">
                <Image
                  src="/logo.svg"
                  alt="Logo"
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                />
            </div>
  
            {/* Social Media Icons */}
            <div className="flex items-center space-x-4 mx-auto">
              <Image 
                src="/inst.svg"
                alt="inst"
                width={27}
                height={27}
              />
              <Image
                src="/facebook.svg"
                alt="facebook"
                width={27}
                height={27}
              />
              <Image 
                src='/vk.svg'
                alt='vk'
                width={20}
                height={20}
              />
              <Image 
                src='/ok.svg'
                alt='ok'
                width={35}
                height={35}
              />
              <Image 
                src='/whatsapp.svg'
                alt='whatsapp'
                width={30}
                height={30}
              />
              <Image 
                src='/telegram.svg'
                alt='telegram'
                width={25}
                height={26}
              />
              <Image 
                src='/youtube.svg'
                alt='youtube'
                width={30}
                height={30}
              />
            </div>
  
            {/* Language Selector and Login Button */}
            <div className="flex items-center space-x-6">
              {/* Language Selector */}
              <div className="hidden md:flex items-center space-x-2 text-sm">
                <Link href="#" className="hover:text-blue-400">RU</Link>
                <span>/</span>
                <Link href="#" className="hover:text-blue-400">EN</Link>
                <span>/</span>
                <Link href="#" className="hover:text-blue-400">中国人</Link>
              </div>
  
              {/* Login Button */}
              <Button 
                className="bg-blue-500 hover:bg-blue-600 text-white rounded-none"
              >
                Войти в Личный кабинет
              </Button>
            </div>
          </div>
        </div>
      </header>
    )
  }
  