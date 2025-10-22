import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Declare gtag global
declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string | Date,
      config?: Record<string, any>
    ) => void;
    dataLayer?: any[];
  }
}

/**
 * Hook para rastrear pageviews automaticamente
 */
export const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    // Rastreia mudança de página
    if (typeof window.gtag !== 'undefined') {
      window.gtag('config', 'G-RX6W16TS1E', {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);
};

/**
 * Hook para enviar eventos personalizados ao GA4
 */
export const useAnalyticsEvent = () => {
  const trackEvent = (
    eventName: string,
    eventParams?: Record<string, any>
  ) => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', eventName, eventParams);
    } else {
      console.warn('Google Analytics not loaded');
    }
  };

  return { trackEvent };
};

/**
 * Funções helper para eventos comuns
 */
export const analytics = {
  // Rastreia mudança de cidade
  trackCityChange: (cityName: string, cityState: string) => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'city_change', {
        event_category: 'Navigation',
        event_label: `${cityName}/${cityState}`,
        city: cityName,
        state: cityState,
      });
    }
  },

  // Rastreia mudança de data
  trackDateChange: (selectedDate: Date) => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'date_filter_change', {
        event_category: 'Interaction',
        event_label: selectedDate.toISOString().split('T')[0],
        date: selectedDate.toISOString(),
      });
    }
  },

  // Rastreia clique em atualizar
  trackRefresh: (cityName: string) => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'refresh_data', {
        event_category: 'Interaction',
        event_label: cityName,
      });
    }
  },

  // Rastreia visualização de política/termos
  trackLegalPageView: (pageName: 'privacy' | 'terms') => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'legal_page_view', {
        event_category: 'Engagement',
        event_label: pageName,
        page_name: pageName,
      });
    }
  },

  // Rastreia cliques no footer
  trackFooterClick: (linkText: string) => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'footer_link_click', {
        event_category: 'Navigation',
        event_label: linkText,
      });
    }
  },

  // Rastreia erro ao carregar dados
  trackError: (errorType: string, errorMessage: string) => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'error', {
        event_category: 'Error',
        event_label: errorType,
        error_message: errorMessage,
      });
    }
  },

  // Rastreia uso do calendário lunar
  trackLunarCalendarView: () => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'lunar_calendar_view', {
        event_category: 'Engagement',
        event_label: 'Lunar Calendar',
      });
    }
  },
};

export default useAnalyticsEvent;
