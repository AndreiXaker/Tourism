'use client'
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Welcome() {
  const [translateY, setTranslateY] = useState(100); // Начинаем со 100% вниз

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollTop / maxScroll, 1); // 0 (верх), 1 (низ)

      setTranslateY(100 - progress * 100); // От 100% (внизу) до 0% (виден полностью)
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 -z-10">
      {/* Первый фон (основной) */}
      <Image
        src="/bg.svg"
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />

      {/* Второй фон (поднимается вверх при скролле) */}
      <div
        className="absolute inset-0 transition-transform duration-300 ease-out"
        style={{ transform: `translateY(${translateY}%)` }}
      >
        <Image
          src="/bg2.svg"
          alt="Background Bottom"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
      </div>

    </div>
  );
}
