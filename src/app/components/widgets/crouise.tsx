'use client';
import { useEffect, useState } from 'react';

interface InfoflotWidgetProps {
  visible: boolean;
}

export default function InfoflotWidget({ visible }: InfoflotWidgetProps) {
  const [widgetKey, setWidgetKey] = useState(0);

  useEffect(() => {
    if (!visible) return;

    // Проверим, не загружен ли уже скрипт
    const existingScript = document.querySelector('script[src="https://bitrix.infoflot.com/local/templates/infoflot/frontend/js/infoflotIframe.js"]');
    if (existingScript) {
      console.log('Скрипт уже загружен');
      setWidgetKey((prev) => prev + 1); // Перерендер компонента
      return;
    }

  
    const script = document.createElement('script');
    script.src = 'https://bitrix.infoflot.com/local/templates/infoflot/frontend/js/infoflotIframe.js';
    script.async = true;

    script.onload = () => {
      
      if (window.createInfoflotWidget) {
        console.log('Скрипт загружен, вызываем createInfoflotWidget');
        
  
        const widgetContainer = document.createElement('div');
        widgetContainer.className = 'infoflotWidget';
        widgetContainer.setAttribute('data-id', 'YTo0OntzOjI6IklEIjtzOjQ6IjM3MjYiO3M6NDoiVVNFUiI7czoyODoiYVc1bWIwQnRZWE4wWlhJdGRIVnliM1l1Y25VPSI7czo2OiJSQU5ET00iO3M6ODoib2k4c2xwZ3IiO3M6MTU6IklORk9GTE9ULUFQSUtFWSI7czo0MDoiMzNiOGM0MmM2YmM2MzA1NzhkNTNkYzg4YjdhODgzNDFiMTMyMGFhNyI7fQ==');
        
        
        document.body.appendChild(widgetContainer);

        
        window.createInfoflotWidget(
          'https://bitrix.infoflot.com/rest/api/search.filter/',
          {
            key: 'YTo0OntzOjI6IklEIjtzOjQ6IjM3MjYiO3M6NDoiVVNFUiI7czoyODoiYVc1bWIwQnRZWE4wWlhJdGRIVnliM1l1Y25VPSI7czo2OiJSQU5ET00iO3M6ODoib2k4c2xwZ3IiO3M6MTU6IklORk9GTE9ULUFQSUtFWSI7czo0MDoiMzNiOGM0MmM2YmM2MzA1NzhkNTNkYzg4YjdhODgzNDFiMTMyMGFhNyI7fQ==',
            referer: encodeURIComponent(location.href),
          }
        );
        setWidgetKey((prev) => prev + 1); 
      } else {
        console.error('createInfoflotWidget не доступна');
      }
    };

    
    document.body.appendChild(script);

    return () => {
      
      script.remove();
      console.log('Скрипт Infoflot удален при размонтировании');
    };
  }, [visible]);

  return visible ? <div key={widgetKey} className="infoflot-widget-container"></div> : null;
}
