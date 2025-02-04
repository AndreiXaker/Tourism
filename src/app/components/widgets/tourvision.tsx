'use client';
import { useEffect, useState } from 'react';

interface TourvisorWidgetProps {
  visible: boolean;
}

export default function TourvisorWidget({ visible }: TourvisorWidgetProps) {
  const [widgetKey, setWidgetKey] = useState(0);

  useEffect(() => {
    if (!visible) return; // Если виджет не должен отображаться, не загружаем скрипт

    const existingScript = document.querySelector('script[src="//tourvisor.ru/module/init.js"]');
    if (existingScript) {
      existingScript.remove();
      console.log('Удален старый скрипт Tourvisor');
    }

    const script = document.createElement('script');
    script.src = '//tourvisor.ru/module/init.js';
    script.async = true;
    script.onload = () => {
      console.log('Tourvisor script загружен');
      setWidgetKey((prev) => prev + 1); 
    };
    document.body.appendChild(script);

    return () => {
      script.remove();
      console.log('Tourvisor script удален при размонтировании');
    };
  }, [visible]);

  if (!visible) return null;

  return <div key={widgetKey} className="tv-search-form tv-moduleid-9969284"></div>;
}
