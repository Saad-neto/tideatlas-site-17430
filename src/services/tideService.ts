// Serviço para buscar dados de marés
// Estrutura preparada para integração com APIs reais (Stormglass, WorldTides, etc)

import { City } from '@/data/cities';
import { TideForecast, TideEvent, DailyTide, TideApiResponse, TideServiceConfig } from '@/types/tide';

class TideService {
  private config: TideServiceConfig;
  private cache: Map<string, { data: TideForecast; expires: number }>;

  constructor(config: TideServiceConfig = {}) {
    this.config = {
      provider: 'mock',
      cacheDuration: 60, // 60 minutos
      ...config
    };
    this.cache = new Map();
  }

  /**
   * Busca dados de marés para uma cidade e período
   */
  async getTideForecast(city: City, days: number = 7): Promise<TideApiResponse> {
    const cacheKey = `${city.id}-${days}`;

    // Verifica cache
    const cached = this.cache.get(cacheKey);
    if (cached && cached.expires > Date.now()) {
      return {
        success: true,
        data: cached.data,
        cached: true
      };
    }

    try {
      // Simula delay apenas para dados mockados
      if (this.config.provider === 'mock') {
        await this.delay(300);
      }

      let forecast: TideForecast;

      switch (this.config.provider) {
        case 'mock':
          forecast = this.generateMockData(city, days);
          break;

        // Pronto para APIs reais
        case 'stormglass':
          forecast = await this.fetchFromStormglass(city, days);
          break;

        case 'worldtides':
          forecast = await this.fetchFromWorldTides(city, days);
          break;

        default:
          forecast = this.generateMockData(city, days);
      }

      // Salva no cache
      const expiresIn = (this.config.cacheDuration || 60) * 60 * 1000;
      this.cache.set(cacheKey, {
        data: forecast,
        expires: Date.now() + expiresIn
      });

      return {
        success: true,
        data: forecast,
        cached: false
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Erro ao buscar dados de marés'
      };
    }
  }

  /**
   * Gera dados mockados realistas baseados na localização
   */
  private generateMockData(city: City, days: number): TideForecast {
    const dailyTides: DailyTide[] = [];
    const now = new Date();
    now.setHours(0, 0, 0, 0);

    // Fator de variação baseado na latitude (marés variam por região)
    const latFactor = Math.abs(city.lat) / 90;
    const lonFactor = Math.sin(city.lon * Math.PI / 180);

    for (let day = 0; day < days; day++) {
      const date = new Date(now);
      date.setDate(date.getDate() + day);

      // Normalmente há 2 marés altas e 2 baixas por dia
      // Horários variam ~50 minutos por dia (ciclo lunar)
      const dayOffset = day * 50; // minutos
      const events: TideEvent[] = [];

      // Primeira maré alta (madrugada)
      const high1Time = new Date(date);
      high1Time.setHours(4, 20 + dayOffset, 0);
      events.push({
        type: 'high',
        time: high1Time,
        height: 2.3 + (latFactor * 0.8) + (Math.random() * 0.3)
      });

      // Primeira maré baixa (manhã)
      const low1Time = new Date(date);
      low1Time.setHours(10, 45 + dayOffset, 0);
      events.push({
        type: 'low',
        time: low1Time,
        height: 0.3 + (latFactor * 0.2) + (Math.random() * 0.2)
      });

      // Segunda maré alta (tarde)
      const high2Time = new Date(date);
      high2Time.setHours(16, 50 + dayOffset, 0);
      events.push({
        type: 'high',
        time: high2Time,
        height: 2.1 + (latFactor * 0.7) + (Math.random() * 0.3)
      });

      // Segunda maré baixa (noite)
      const low2Time = new Date(date);
      low2Time.setHours(23, 10 + dayOffset, 0);
      events.push({
        type: 'low',
        time: low2Time,
        height: 0.4 + (latFactor * 0.3) + (Math.random() * 0.2)
      });

      dailyTides.push({
        date,
        events: events.sort((a, b) => a.time.getTime() - b.time.getTime())
      });
    }

    return {
      city: city.name,
      latitude: city.lat,
      longitude: city.lon,
      days: dailyTides,
      lastUpdated: new Date()
    };
  }

  /**
   * Integração com Stormglass API
   * Documentação: https://docs.stormglass.io/#/tide
   */
  private async fetchFromStormglass(city: City, days: number): Promise<TideForecast> {
    const apiKey = this.config.apiKey;

    if (!apiKey) {
      console.warn('Stormglass API key não configurada. Usando dados mockados.');
      return this.generateMockData(city, days);
    }

    try {
      const start = new Date();
      start.setHours(0, 0, 0, 0);
      const end = new Date(start);
      end.setDate(end.getDate() + days);

      const startTimestamp = Math.floor(start.getTime() / 1000);
      const endTimestamp = Math.floor(end.getTime() / 1000);

      const url = `https://api.stormglass.io/v2/tide/extremes/point?lat=${city.lat}&lng=${city.lon}&start=${startTimestamp}&end=${endTimestamp}`;

      const response = await fetch(url, {
        headers: {
          'Authorization': apiKey
        }
      });

      if (!response.ok) {
        throw new Error(`Stormglass API error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();

      // Processa a resposta da API
      return this.parseStormglassResponse(data, city);

    } catch (error) {
      console.error('Erro ao buscar dados do Stormglass:', error);
      console.warn('Usando dados mockados como fallback');
      return this.generateMockData(city, days);
    }
  }

  /**
   * Processa resposta da API Stormglass
   */
  private parseStormglassResponse(apiData: any, city: City): TideForecast {
    const dailyTides: DailyTide[] = [];
    const eventsGroupedByDay = new Map<string, TideEvent[]>();

    // Agrupa eventos por dia
    for (const extreme of apiData.data) {
      const time = new Date(extreme.time);
      const dateKey = time.toISOString().split('T')[0];

      if (!eventsGroupedByDay.has(dateKey)) {
        eventsGroupedByDay.set(dateKey, []);
      }

      eventsGroupedByDay.get(dateKey)!.push({
        type: extreme.type === 'high' ? 'high' : 'low',
        time,
        height: extreme.height
      });
    }

    // Cria DailyTide para cada dia
    for (const [dateKey, events] of eventsGroupedByDay.entries()) {
      const date = new Date(dateKey);
      date.setHours(0, 0, 0, 0);

      dailyTides.push({
        date,
        events: events.sort((a, b) => a.time.getTime() - b.time.getTime())
      });
    }

    return {
      city: city.name,
      latitude: city.lat,
      longitude: city.lon,
      days: dailyTides.sort((a, b) => a.date.getTime() - b.date.getTime()),
      lastUpdated: new Date()
    };
  }

  /**
   * Integração com WorldTides API
   * Documentação: https://www.worldtides.info/apidocs
   */
  private async fetchFromWorldTides(city: City, days: number): Promise<TideForecast> {
    const apiKey = this.config.apiKey;

    if (!apiKey) {
      console.warn('WorldTides API key não configurada. Usando dados mockados.');
      return this.generateMockData(city, days);
    }

    try {
      const start = new Date();
      start.setHours(0, 0, 0, 0);
      const length = days * 86400; // segundos

      const url = `https://www.worldtides.info/api/v3?extremes&lat=${city.lat}&lon=${city.lon}&start=${Math.floor(start.getTime() / 1000)}&length=${length}&key=${apiKey}`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`WorldTides API error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();

      if (data.status !== 200) {
        throw new Error(`WorldTides API error: ${data.error || 'Unknown error'}`);
      }

      // Processa a resposta da API
      return this.parseWorldTidesResponse(data, city);

    } catch (error) {
      console.error('Erro ao buscar dados do WorldTides:', error);
      console.warn('Usando dados mockados como fallback');
      return this.generateMockData(city, days);
    }
  }

  /**
   * Processa resposta da API WorldTides
   */
  private parseWorldTidesResponse(apiData: any, city: City): TideForecast {
    const dailyTides: DailyTide[] = [];
    const eventsGroupedByDay = new Map<string, TideEvent[]>();

    // Agrupa eventos por dia
    for (const extreme of apiData.extremes) {
      const time = new Date(extreme.dt * 1000);
      const dateKey = time.toISOString().split('T')[0];

      if (!eventsGroupedByDay.has(dateKey)) {
        eventsGroupedByDay.set(dateKey, []);
      }

      eventsGroupedByDay.get(dateKey)!.push({
        type: extreme.type === 'High' ? 'high' : 'low',
        time,
        height: extreme.height
      });
    }

    // Cria DailyTide para cada dia
    for (const [dateKey, events] of eventsGroupedByDay.entries()) {
      const date = new Date(dateKey);
      date.setHours(0, 0, 0, 0);

      dailyTides.push({
        date,
        events: events.sort((a, b) => a.time.getTime() - b.time.getTime())
      });
    }

    return {
      city: city.name,
      latitude: city.lat,
      longitude: city.lon,
      days: dailyTides.sort((a, b) => a.date.getTime() - b.date.getTime()),
      lastUpdated: new Date()
    };
  }

  /**
   * Limpa o cache
   */
  clearCache(): void {
    this.cache.clear();
  }

  /**
   * Simula delay de rede
   */
  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

// Lê configuração das variáveis de ambiente
const provider = (import.meta.env.VITE_TIDE_PROVIDER || 'mock') as 'mock' | 'stormglass' | 'worldtides';
const apiKey = provider === 'stormglass'
  ? import.meta.env.VITE_STORMGLASS_API_KEY
  : provider === 'worldtides'
  ? import.meta.env.VITE_WORLDTIDES_API_KEY
  : undefined;
const cacheDuration = parseInt(import.meta.env.VITE_CACHE_DURATION || '60', 10);

// Instância singleton com configuração do .env
export const tideService = new TideService({
  provider,
  apiKey,
  cacheDuration
});

export default tideService;
