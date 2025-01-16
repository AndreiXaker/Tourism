'use client';
import { useEffect } from 'react';

export default function TourvisorWidget({ visible }) {
  useEffect(() => {
    if (visible) {
        if (!document.querySelector('script[src="//tourvisor.ru/module/init.js"]')) {
            const script = document.createElement('script');
            script.src = '//tourvisor.ru/module/init.js';
            script.async = true;
            script.type = 'text/javascript';
            document.body.appendChild(script);
          } else {
            console.log('Виджет уже загружен');
          }
        }
        
  }, [visible]);

  return (
    visible && (
      <div id="tv-search-form tv-moduleid-9968994">
      </div>
    )
  );
}
