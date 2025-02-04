'use client';
import { Button } from 'antd';
import { useEffect } from 'react';

interface KiwiTaxiWidgetProps {
  visible: boolean;
  onClose: () => void;

}
export default function KiwiTaxiWidget({ visible, onClose } : KiwiTaxiWidgetProps) {
  useEffect(() => {
    if (visible) {
      let widgetContainer = document.querySelector('[data-kiwitaxi-white-label]');
      if (!widgetContainer) {
        widgetContainer = document.createElement('div');
        widgetContainer.setAttribute('data-kiwitaxi-white-label', '');

        const widgetElement = document.createElement('div');
        widgetElement.setAttribute('data-kiwitaxi-white-label-element', '');
        widgetContainer.appendChild(widgetElement);

        document.getElementById('kiwitaxi-widget-container')?.appendChild(widgetContainer);

        const configScript = document.createElement('script');
        configScript.setAttribute('data-kiwitaxi-white-label-config', '');
        configScript.type = 'application/json';
        configScript.textContent = JSON.stringify({
          language: 'ru',
          transfers_limit: 10,
          transfer_options: [],
          transfer_options_limit: 12,
          display_currency: '',
          country: {},
          place_from: {},
          place_to: {},
          max_height: 0,
          disable_currency_selector: false,
          hide_form_extras: false,
          deep_link: true,
          hide_external_links: false,
          ref_params: {
            pap: '67818469a10db',
            pap_bid: '30328da0',
          },
          scroll_offset: 0,
        });

        widgetContainer.appendChild(configScript);

        const script = document.createElement('script');
        script.src = 'https://widget-white-label.kiwitaxi.com/js/kiwitaxi-white-label.js';
        script.async = true;
        document.body.appendChild(script);
      }
    }
  }, [visible]);

  return (
    visible && (
      <div  id="kiwitaxi-widget-container">
      <Button className=' absolute m-2 p-2 rounded-2xl text-lg' onClick={onClose}>Закрыть</Button>
      </div>
    )
  );
}
