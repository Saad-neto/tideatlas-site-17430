import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { calculateMoonPhase, type MoonData } from '@/services/moonService';
import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

const MoonPhase = () => {
  const [moonData, setMoonData] = useState<MoonData | null>(null);

  useEffect(() => {
    const data = calculateMoonPhase(new Date());
    setMoonData(data);
  }, []);

  if (!moonData) return null;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <span className="text-2xl">{moonData.phaseEmoji}</span>
          Fase da Lua
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {/* Fase atual */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Fase Atual:</span>
          <span className="font-semibold">{moonData.phaseName}</span>
        </div>

        {/* Iluminação */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Iluminação:</span>
          <span className="font-semibold">{moonData.illumination}%</span>
        </div>

        {/* Barra de progresso da iluminação */}
        <div className="w-full bg-secondary rounded-full h-2">
          <div
            className="bg-primary h-2 rounded-full transition-all duration-500"
            style={{ width: `${moonData.illumination}%` }}
          />
        </div>

        {/* Idade da lua */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Idade da Lua:</span>
          <span className="font-semibold">{moonData.age.toFixed(1)} dias</span>
        </div>

        {/* Influência nas marés */}
        <div className="mt-4 p-3 bg-secondary/50 rounded-lg">
          <div className="flex items-start gap-2">
            <span className="text-lg">
              {moonData.tideInfluence === 'high' ? '⚡' : 'ℹ️'}
            </span>
            <div className="flex-1">
              <p className="text-sm font-semibold mb-1">
                {moonData.tideInfluence === 'high' ? 'Marés de Sizígia' : 'Marés Normais'}
              </p>
              <p className="text-xs text-muted-foreground">
                {moonData.tideInfluence === 'high'
                  ? 'Lua cheia ou nova causa marés mais altas e mais baixas. Ideal para observação de marés extremas.'
                  : 'Marés com amplitude normal. Bom para atividades náuticas regulares.'}
              </p>
            </div>
          </div>
        </div>

        {/* Próximas fases importantes */}
        <div className="mt-4 space-y-2 text-xs">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">🌕 Próxima Lua Cheia:</span>
            <span className="font-medium">
              {format(moonData.nextFullMoon, "dd/MM 'às' HH:mm", { locale: ptBR })}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground">🌑 Próxima Lua Nova:</span>
            <span className="font-medium">
              {format(moonData.nextNewMoon, "dd/MM 'às' HH:mm", { locale: ptBR })}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MoonPhase;
