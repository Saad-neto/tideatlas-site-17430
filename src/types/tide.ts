// Types para dados de marés

export interface TideEvent {
  type: 'high' | 'low';
  time: Date;
  height: number; // em metros
}

export interface DailyTide {
  date: Date;
  events: TideEvent[];
}

export interface TideForecast {
  city: string;
  latitude: number;
  longitude: number;
  days: DailyTide[];
  lastUpdated: Date;
}

export interface TideServiceConfig {
  apiKey?: string;
  provider?: 'mock' | 'stormglass' | 'worldtides' | 'marinha-brasil';
  cacheDuration?: number; // em minutos
}

export interface TideApiResponse {
  success: boolean;
  data?: TideForecast;
  error?: string;
  cached?: boolean;
}
