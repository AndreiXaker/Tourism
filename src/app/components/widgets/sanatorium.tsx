'use client';
import { useEffect } from 'react';

interface SanatoriumSearchProps {
  visible: boolean;
  onClose: () => void;
}

export default function SanatoriumSearch({ visible, onClose }: SanatoriumSearchProps) {
  useEffect(() => {
    if (!visible) return;

    
    const scriptJQuery = document.createElement('script');
    scriptJQuery.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js';
    scriptJQuery.async = true;
    document.body.appendChild(scriptJQuery);

    
    const scriptSearch = document.createElement('script');
    scriptSearch.src = 'https://tonia.ru/module/js/search.js';
    scriptSearch.async = true;
    document.body.appendChild(scriptSearch);

    
    scriptSearch.onload = () => {
      const scriptActivation = document.createElement('script');
      scriptActivation.innerHTML = 'agency_module_activation("Y1hSTfD")';
      document.body.appendChild(scriptActivation);
    };

    
    return () => {
      scriptJQuery.remove();
      scriptSearch.remove();
    };
  }, [visible]);

  return visible ? <div id="sanatorium-search-module"></div> : null;
}
