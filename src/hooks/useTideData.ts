// Hook customizado para buscar dados de marés

import { useState, useEffect } from 'react';
import { City } from '@/data/cities';
import { TideForecast } from '@/types/tide';
import tideService from '@/services/tideService';

interface UseTideDataResult {
  forecast: TideForecast | null;
  isLoading: boolean;
  error: string | null;
  isCached: boolean;
  refetch: () => void;
}

export function useTideData(city: City | undefined, days: number = 7): UseTideDataResult {
  const [forecast, setForecast] = useState<TideForecast | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isCached, setIsCached] = useState<boolean>(false);

  const fetchData = async () => {
    if (!city) {
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await tideService.getTideForecast(city, days);

      if (response.success && response.data) {
        setForecast(response.data);
        setIsCached(response.cached || false);
        setError(null);
      } else {
        setError(response.error || 'Erro ao carregar dados de marés');
        setForecast(null);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro desconhecido');
      setForecast(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [city?.id, days]);

  return {
    forecast,
    isLoading,
    error,
    isCached,
    refetch: fetchData
  };
}

export default useTideData;
