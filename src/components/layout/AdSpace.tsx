import { useEffect, useRef } from 'react';

interface AdSpaceProps {
  position: 'top' | 'middle' | 'middle2' | 'bottom';
  size?: string;
}

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

const AdSpace = ({ position }: AdSpaceProps) => {
  const adRef = useRef<HTMLDivElement>(null);
  const isAdPushed = useRef(false);

  // Configurações de layout por posição
  const adConfig = {
    top: {
      format: 'auto',
      fullWidthResponsive: true,
      style: { display: 'block' } as React.CSSProperties
    },
    middle: {
      format: 'rectangle',
      fullWidthResponsive: true,
      style: { display: 'block' } as React.CSSProperties
    },
    middle2: {
      format: 'auto',
      fullWidthResponsive: true,
      style: { display: 'block' } as React.CSSProperties
    },
    bottom: {
      format: 'auto',
      fullWidthResponsive: true,
      style: { display: 'block' } as React.CSSProperties
    }
  };

  const config = adConfig[position];

  useEffect(() => {
    // Evita push duplicado
    if (isAdPushed.current) return;

    try {
      // Aguarda o script do AdSense carregar
      const pushAd = () => {
        if (typeof window !== 'undefined' && window.adsbygoogle) {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
          isAdPushed.current = true;
        }
      };

      // Se o script já carregou, push imediato
      if (window.adsbygoogle) {
        pushAd();
      } else {
        // Caso contrário, aguarda um pouco
        const timer = setTimeout(pushAd, 100);
        return () => clearTimeout(timer);
      }
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  return (
    <div ref={adRef} className="my-4 sm:my-6 flex justify-center">
      <ins
        className="adsbygoogle"
        style={config.style}
        data-ad-client="ca-pub-4456197804298904"
        data-ad-format={config.format}
        data-full-width-responsive={config.fullWidthResponsive.toString()}
      />
    </div>
  );
};

export default AdSpace;
