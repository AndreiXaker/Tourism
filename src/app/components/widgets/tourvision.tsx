'use client';
import { useEffect } from 'react';

interface TourvisorWidgetProps {
  visible: boolean;
}

export default function TourvisorWidget() {
  useEffect(() => {
   {
      const existingScript = document.querySelector('script[src="//tourvisor.ru/module/init.js"]');
      if (!existingScript) {
        const script = document.createElement('script');
        script.src = '//tourvisor.ru/module/init.js';
        script.async = true;
        script.type = 'text/javascript';
        script.onload = () => {
          console.log('Tourvisor script loaded');
        };
        document.body.appendChild(script);
      } else {
        console.log('Виджет уже загружен');
      }
    }
  });

  return (
      <div className="tv-search-form tv-moduleid-9969284">
      </div>
  );
}