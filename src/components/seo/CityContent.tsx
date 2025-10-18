import type { City } from '@/data/cities';
import { Card, CardContent } from '@/components/ui/card';

interface CityContentProps {
  city: City;
}

const CityContent = ({ city }: CityContentProps) => {
  return (
    <div className="mt-8 space-y-6">
      {/* Texto introdutório SEO-friendly */}
      <Card>
        <CardContent className="pt-6">
          <h2 className="text-xl font-semibold mb-4">
            Sobre a Tábua de Marés de {city.name}/{city.stateCode}
          </h2>
          <div className="prose prose-sm max-w-none text-muted-foreground space-y-3">
            <p>
              Consulte a <strong>tábua de marés de {city.name}</strong>, {city.state},
              com previsões precisas de maré alta e maré baixa para os próximos 7 dias.
              Nossa tabela de marés é atualizada diariamente e fornece informações essenciais
              para pescadores, surfistas, navegadores e turistas.
            </p>
            <p>
              {city.name} está localizada na região {city.region} do Brasil, com coordenadas
              geográficas {city.lat.toFixed(4)}°, {city.lon.toFixed(4)}°. As marés nesta
              localização são influenciadas pela posição da lua, sol e características
              geográficas locais.
            </p>
            <p>
              Utilize nossa previsão de marés para planejar suas atividades na praia, pesca,
              navegação, surf, mergulho e outras atividades náuticas. Conhecer os horários
              de maré alta e baixa é fundamental para garantir segurança e aproveitar ao
              máximo seu tempo no mar.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* FAQ Section */}
      <Card>
        <CardContent className="pt-6">
          <h2 className="text-xl font-semibold mb-4">
            Perguntas Frequentes sobre Marés em {city.name}
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-sm mb-1">
                O que é maré alta e maré baixa?
              </h3>
              <p className="text-sm text-muted-foreground">
                Maré alta (preamar) é quando o nível do mar atinge seu ponto máximo.
                Maré baixa (baixa-mar) é quando o nível do mar está no seu ponto mínimo.
                Normalmente ocorrem 2 marés altas e 2 baixas por dia.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-sm mb-1">
                Qual o melhor horário para pescar em {city.name}?
              </h3>
              <p className="text-sm text-muted-foreground">
                Geralmente, os melhores horários para pesca são 2 horas antes e 2 horas
                depois da maré alta, quando os peixes estão mais ativos. Consulte nossa
                tábua de marés para planejar sua pescaria.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-sm mb-1">
                Com que frequência as marés mudam?
              </h3>
              <p className="text-sm text-muted-foreground">
                As marés seguem um ciclo de aproximadamente 12 horas e 25 minutos entre
                cada maré alta. Isso significa que os horários de marés avançam cerca de
                50 minutos a cada dia.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-sm mb-1">
                O que influencia as marés?
              </h3>
              <p className="text-sm text-muted-foreground">
                As marés são principalmente influenciadas pela atração gravitacional da
                Lua e do Sol sobre os oceanos. As fases da lua (lua cheia e lua nova)
                causam as maiores variações de maré (marés de sizígia).
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Dicas úteis */}
      <Card>
        <CardContent className="pt-6">
          <h2 className="text-xl font-semibold mb-4">
            Dicas para Aproveitar as Marés em {city.name}
          </h2>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start">
              <span className="mr-2">🎣</span>
              <span>
                <strong>Pesca:</strong> Os melhores momentos são durante a mudança das
                marés, especialmente na transição para maré alta.
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">🏄</span>
              <span>
                <strong>Surf:</strong> Marés médias geralmente oferecem as melhores ondas.
                Verifique as condições locais e a tábua de marés.
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">🤿</span>
              <span>
                <strong>Mergulho:</strong> Maré baixa oferece melhor visibilidade e
                acesso a piscinas naturais e recifes.
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">⛵</span>
              <span>
                <strong>Navegação:</strong> Sempre verifique a profundidade do canal e
                os horários de maré antes de sair para navegar.
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">🏖️</span>
              <span>
                <strong>Praia:</strong> Maré baixa oferece mais área de areia para
                atividades recreativas e caminhadas.
              </span>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default CityContent;
