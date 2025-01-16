'use client';
import { useEffect, useState } from 'react';

export default function Insurance({ visible, onClose }) {
  useEffect(() => {
    if (visible) {
      
      if (!document.querySelector('script[src="https://static.cherehapa.ru/widgets/loader.min.js"]')) {
        const script = document.createElement('script');
        script.src = 'https://static.cherehapa.ru/widgets/loader.min.js';
        script.async = true;
        script.dataset.cheOptions = JSON.stringify({
          partnerId: '12241',
          countries: ['russia'],
          countryGroups: ['world-no-russia', 'schengen'],
          sports: ['mountainSkiing', 'mountainSkiingFreeride', 'snowboarding', 'snowboardingFreeride'],
          isIgnoreForm: 'true',
          isCheSupport: false,
        });
        document.body.appendChild(script);
      } else {
        console.log('Виджет уже загружен');
      }
    }
  }, [visible]); 
  return (
    visible && (
      <div id="insurance-widget-container">
      {/* <button className='bg-red-500 absolute m-2 p-2 rounded-2xl text-xl' onClick={onClose}>Закрыть</button> */}
      </div>
    )
  );
}
