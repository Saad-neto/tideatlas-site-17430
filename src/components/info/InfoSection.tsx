import InfoCard from './InfoCard';
import { 
  Sun, 
  Droplets, 
  MapPin, 
  UtensilsCrossed, 
  Hotel, 
  Map 
} from 'lucide-react';
import { 
  weatherData, 
  waterConditions, 
  nearbyBeaches 
} from '@/data/mockData';

const InfoSection = () => {
  return (
    <section className="my-8 sm:my-12">
      <div className="text-center mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
          Informações Úteis
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground">
          Tudo que você precisa saber para aproveitar seu dia na praia
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Previsão do Tempo */}
        <InfoCard title="Previsão do Tempo" icon={Sun}>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Temperatura:</span>
              <span className="font-semibold">{weatherData.temperature}°C</span>
            </div>
            <div className="flex justify-between">
              <span>Condição:</span>
              <span className="font-semibold">{weatherData.condition}</span>
            </div>
            <div className="flex justify-between">
              <span>Umidade:</span>
              <span className="font-semibold">{weatherData.humidity}%</span>
            </div>
            <div className="flex justify-between">
              <span>Vento:</span>
              <span className="font-semibold">{weatherData.windSpeed} km/h</span>
            </div>
          </div>
        </InfoCard>

        {/* Condições da Água */}
        <InfoCard title="Condições da Água" icon={Droplets}>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Temperatura:</span>
              <span className="font-semibold">{waterConditions.temperature}°C</span>
            </div>
            <div className="flex justify-between">
              <span>Altura das Ondas:</span>
              <span className="font-semibold">{waterConditions.waveHeight}</span>
            </div>
            <div className="flex justify-between">
              <span>Visibilidade:</span>
              <span className="font-semibold">{waterConditions.visibility}</span>
            </div>
            <div className="flex justify-between">
              <span>Qualidade:</span>
              <span className="font-semibold">{waterConditions.quality}</span>
            </div>
          </div>
        </InfoCard>

        {/* Praias Próximas */}
        <InfoCard title="Praias Próximas" icon={MapPin}>
          <div className="space-y-3">
            {nearbyBeaches.map((beach) => (
              <div key={beach.name} className="flex justify-between items-center">
                <div>
                  <p className="font-semibold text-foreground">{beach.name}</p>
                  <p className="text-xs">{beach.distance}</p>
                </div>
                <span className="text-sm">⭐ {beach.rating}</span>
              </div>
            ))}
          </div>
        </InfoCard>

        {/* Restaurantes */}
        <InfoCard title="Restaurantes" icon={UtensilsCrossed}>
          <p className="mb-3">
            Conheça os melhores restaurantes com frutos do mar frescos e culinária regional.
          </p>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>🍽️ Restaurante do Porto</span>
              <span>⭐ 4.8</span>
            </div>
            <div className="flex justify-between">
              <span>🦞 Maré Alta</span>
              <span>⭐ 4.6</span>
            </div>
            <div className="flex justify-between">
              <span>🐟 Peixada da Praia</span>
              <span>⭐ 4.7</span>
            </div>
          </div>
        </InfoCard>

        {/* Hotéis */}
        <InfoCard title="Hotéis e Pousadas" icon={Hotel}>
          <p className="mb-3">
            Opções de hospedagem próximas às principais praias da cidade.
          </p>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>🏨 Hotel Beira-Mar</span>
              <span>⭐ 4.5</span>
            </div>
            <div className="flex justify-between">
              <span>🏡 Pousada da Praia</span>
              <span>⭐ 4.7</span>
            </div>
            <div className="flex justify-between">
              <span>🏖️ Resort Tropical</span>
              <span>⭐ 4.9</span>
            </div>
          </div>
        </InfoCard>

        {/* Pontos Turísticos */}
        <InfoCard title="Pontos Turísticos" icon={Map}>
          <p className="mb-3">
            Explore as atrações imperdíveis da região.
          </p>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>🏛️ Centro Histórico</span>
              <span>📍 3km</span>
            </div>
            <div className="flex justify-between">
              <span>🌅 Ponta do Seixas</span>
              <span>📍 8km</span>
            </div>
            <div className="flex justify-between">
              <span>🎨 Mercado de Artesanato</span>
              <span>📍 2km</span>
            </div>
          </div>
        </InfoCard>
      </div>
    </section>
  );
};

export default InfoSection;
