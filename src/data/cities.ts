// Configuração de todas as cidades costeiras cobertas pelo sistema
export interface City {
  id: string;
  name: string;
  state: string;
  stateCode: string;
  region: 'Norte' | 'Nordeste' | 'Sudeste' | 'Sul';
  lat: number;
  lon: number;
  slug: string;
}

export const cities: City[] = [
  // Norte
  {
    id: 'belem-pa',
    name: 'Belém',
    state: 'Pará',
    stateCode: 'PA',
    region: 'Norte',
    lat: -1.4558,
    lon: -48.4902,
    slug: 'belem-pa'
  },
  {
    id: 'macapa-ap',
    name: 'Macapá',
    state: 'Amapá',
    stateCode: 'AP',
    region: 'Norte',
    lat: 0.0349,
    lon: -51.0694,
    slug: 'macapa-ap'
  },
  {
    id: 'salinopolis-pa',
    name: 'Salinópolis',
    state: 'Pará',
    stateCode: 'PA',
    region: 'Norte',
    lat: -0.6138,
    lon: -47.3561,
    slug: 'salinopolis-pa'
  },

  // Nordeste
  {
    id: 'sao-luis-ma',
    name: 'São Luís',
    state: 'Maranhão',
    stateCode: 'MA',
    region: 'Nordeste',
    lat: -2.5307,
    lon: -44.3068,
    slug: 'sao-luis-ma'
  },
  {
    id: 'fortaleza-ce',
    name: 'Fortaleza',
    state: 'Ceará',
    stateCode: 'CE',
    region: 'Nordeste',
    lat: -3.7172,
    lon: -38.5433,
    slug: 'fortaleza-ce'
  },
  {
    id: 'natal-rn',
    name: 'Natal',
    state: 'Rio Grande do Norte',
    stateCode: 'RN',
    region: 'Nordeste',
    lat: -5.7945,
    lon: -35.2110,
    slug: 'natal-rn'
  },
  {
    id: 'joao-pessoa-pb',
    name: 'João Pessoa',
    state: 'Paraíba',
    stateCode: 'PB',
    region: 'Nordeste',
    lat: -7.1195,
    lon: -34.8450,
    slug: 'joao-pessoa-pb'
  },
  {
    id: 'recife-pe',
    name: 'Recife',
    state: 'Pernambuco',
    stateCode: 'PE',
    region: 'Nordeste',
    lat: -8.0476,
    lon: -34.8770,
    slug: 'recife-pe'
  },
  {
    id: 'maceio-al',
    name: 'Maceió',
    state: 'Alagoas',
    stateCode: 'AL',
    region: 'Nordeste',
    lat: -9.6658,
    lon: -35.7353,
    slug: 'maceio-al'
  },
  {
    id: 'aracaju-se',
    name: 'Aracaju',
    state: 'Sergipe',
    stateCode: 'SE',
    region: 'Nordeste',
    lat: -10.9091,
    lon: -37.0677,
    slug: 'aracaju-se'
  },
  {
    id: 'salvador-ba',
    name: 'Salvador',
    state: 'Bahia',
    stateCode: 'BA',
    region: 'Nordeste',
    lat: -12.9714,
    lon: -38.5014,
    slug: 'salvador-ba'
  },
  {
    id: 'ilheus-ba',
    name: 'Ilhéus',
    state: 'Bahia',
    stateCode: 'BA',
    region: 'Nordeste',
    lat: -14.7889,
    lon: -39.0494,
    slug: 'ilheus-ba'
  },

  // Sudeste
  {
    id: 'vitoria-es',
    name: 'Vitória',
    state: 'Espírito Santo',
    stateCode: 'ES',
    region: 'Sudeste',
    lat: -20.3155,
    lon: -40.3128,
    slug: 'vitoria-es'
  },
  {
    id: 'rio-de-janeiro-rj',
    name: 'Rio de Janeiro',
    state: 'Rio de Janeiro',
    stateCode: 'RJ',
    region: 'Sudeste',
    lat: -22.9068,
    lon: -43.1729,
    slug: 'rio-de-janeiro-rj'
  },
  {
    id: 'angra-dos-reis-rj',
    name: 'Angra dos Reis',
    state: 'Rio de Janeiro',
    stateCode: 'RJ',
    region: 'Sudeste',
    lat: -23.0067,
    lon: -44.3181,
    slug: 'angra-dos-reis-rj'
  },
  {
    id: 'santos-sp',
    name: 'Santos',
    state: 'São Paulo',
    stateCode: 'SP',
    region: 'Sudeste',
    lat: -23.9608,
    lon: -46.3339,
    slug: 'santos-sp'
  },
  {
    id: 'guaruja-sp',
    name: 'Guarujá',
    state: 'São Paulo',
    stateCode: 'SP',
    region: 'Sudeste',
    lat: -23.9933,
    lon: -46.2564,
    slug: 'guaruja-sp'
  },
  {
    id: 'ubatuba-sp',
    name: 'Ubatuba',
    state: 'São Paulo',
    stateCode: 'SP',
    region: 'Sudeste',
    lat: -23.4336,
    lon: -45.0838,
    slug: 'ubatuba-sp'
  },

  // Sul
  {
    id: 'paranagua-pr',
    name: 'Paranaguá',
    state: 'Paraná',
    stateCode: 'PR',
    region: 'Sul',
    lat: -25.5163,
    lon: -48.5097,
    slug: 'paranagua-pr'
  },
  {
    id: 'florianopolis-sc',
    name: 'Florianópolis',
    state: 'Santa Catarina',
    stateCode: 'SC',
    region: 'Sul',
    lat: -27.5954,
    lon: -48.5480,
    slug: 'florianopolis-sc'
  },
  {
    id: 'balneario-camboriu-sc',
    name: 'Balneário Camboriú',
    state: 'Santa Catarina',
    stateCode: 'SC',
    region: 'Sul',
    lat: -26.9906,
    lon: -48.6356,
    slug: 'balneario-camboriu-sc'
  },
  {
    id: 'tramandai-rs',
    name: 'Tramandaí',
    state: 'Rio Grande do Sul',
    stateCode: 'RS',
    region: 'Sul',
    lat: -29.9842,
    lon: -50.1333,
    slug: 'tramandai-rs'
  },
  {
    id: 'torres-rs',
    name: 'Torres',
    state: 'Rio Grande do Sul',
    stateCode: 'RS',
    region: 'Sul',
    lat: -29.3350,
    lon: -49.7272,
    slug: 'torres-rs'
  }
];

// Helper functions
export const getCityBySlug = (slug: string): City | undefined => {
  return cities.find(city => city.slug === slug);
};

export const getCityById = (id: string): City | undefined => {
  return cities.find(city => city.id === id);
};

export const getCitiesByRegion = (region: City['region']): City[] => {
  return cities.filter(city => city.region === region);
};

export const getCitiesByState = (stateCode: string): City[] => {
  return cities.filter(city => city.stateCode === stateCode);
};

// Para manter compatibilidade com o código existente
export const cityNames = cities.map(city => city.name);
