'use client';
import { useEffect, useState } from 'react';

interface TourvisorWidgetProps {
  visible: boolean;
}

export default function TourvisorWidget({ visible }: TourvisorWidgetProps) {
  

  useEffect(() => {
    if (!visible) return; 

    const existingScript = document.querySelector('script[src="//tourvisor.ru/module/init.js"]');
    if (existingScript) {
      existingScript.remove();
      console.log('Старый скрипт Tourvisor удален');
    }

    
    const script = document.createElement('script');
    script.src = '//tourvisor.ru/module/init.js';
    script.async = true;
    script.type = 'text/javascript';
    script.onload = () => {
      console.log('Tourvisor script загружен');
      
    };
    document.body.appendChild(script);

    return () => {
      script.remove();
      console.log('Tourvisor script удален при размонтировании');
    };
  }, [visible]);

  if (!visible) return null;

  return <div className="tv-search-form tv-moduleid-9969284"></div>;
}
