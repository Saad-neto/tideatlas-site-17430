import { useEffect } from 'react';

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

/**
 * Hook customizado para gerenciar Google AdSense
 * Garante que os anúncios sejam carregados corretamente
 */
export const useAdSense = () => {
  useEffect(() => {
    try {
      // Inicializa o adsbygoogle se ainda não existir
      if (typeof window !== 'undefined') {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);
};

export default useAdSense;
