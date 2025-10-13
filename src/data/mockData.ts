// Dados da cidade atual
export const currentCity = {
  name: 'João Pessoa',
  state: 'PB',
  lat: -7.1195,
  lon: -34.8450
};

// Interface para dados de maré
export interface TideData {
  type: 'alta' | 'baixa';
  time: string;
  height: string;
}

// Marés de hoje (simuladas)
export const todayTides: TideData[] = [
  { type: 'alta', time: '04:23', height: '2.8m' },
  { type: 'baixa', time: '10:47', height: '0.4m' },
  { type: 'alta', time: '16:55', height: '2.6m' },
  { type: 'baixa', time: '23:12', height: '0.6m' }
];

// Informações climáticas (placeholder)
export const weatherData = {
  temperature: 28,
  humidity: 75,
  condition: 'Ensolarado',
  windSpeed: 12,
  uvIndex: 8
};

// Condições da água
export const waterConditions = {
  temperature: 26,
  waveHeight: '0.8m',
  visibility: 'Boa',
  quality: 'Excelente'
};

// Praias próximas
export const nearbyBeaches = [
  { name: 'Praia de Tambáu', distance: '2km', rating: 4.5 },
  { name: 'Praia de Cabo Branco', distance: '4km', rating: 4.7 },
  { name: 'Praia do Bessa', distance: '6km', rating: 4.3 }
];

// Lista de cidades para o footer
export const cities = [
  'João Pessoa', 'Natal', 'Recife', 'Salvador',
  'Fortaleza', 'Rio de Janeiro', 'Florianópolis',
  'Santos', 'Guarujá', 'Vitória'
];
