import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getUpcomingMoonPhases, getMoonPhaseEmoji, type MoonPhase } from '@/services/moonService';
import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

// Helper para obter emoji (duplicado aqui para não exportar do service)
function getMoonPhaseEmojiLocal(phase: MoonPhase): string {
  const emojis: Record<MoonPhase, string> = {
    'new': '🌑',
    'waxing-crescent': '🌒',
    'first-quarter': '🌓',
    'waxing-gibbous': '🌔',
    'full': '🌕',
    'waning-gibbous': '🌖',
    'last-quarter': '🌗',
    'waning-crescent': '🌘'
  };
  return emojis[phase];
}

const LunarCalendar = () => {
  const [phases, setPhases] = useState<Array<{ date: Date; phase: MoonPhase; phaseName: string }>>([]);

  useEffect(() => {
    const upcomingPhases = getUpcomingMoonPhases(new Date(), 30);
    setPhases(upcomingPhases);
  }, []);

  // Agrupa fases principais (nova, crescente, cheia, minguante)
  const mainPhases = phases.filter(p =>
    p.phase === 'new' || p.phase === 'first-quarter' || p.phase === 'full' || p.phase === 'last-quarter'
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          🗓️ Calendário Lunar - Próximas Fases
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {mainPhases.slice(0, 8).map((phaseData, index) => {
            const isToday = format(phaseData.date, 'yyyy-MM-dd') === format(new Date(), 'yyyy-MM-dd');
            const isSizigia = phaseData.phase === 'full' || phaseData.phase === 'new';

            return (
              <div
                key={index}
                className={`flex items-center justify-between p-3 rounded-lg border transition-colors ${
                  isToday ? 'bg-primary/10 border-primary' : 'bg-secondary/30 border-transparent'
                } ${isSizigia ? 'ring-1 ring-primary/30' : ''}`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl">
                    {getMoonPhaseEmojiLocal(phaseData.phase)}
                  </span>
                  <div>
                    <p className="font-semibold text-sm">
                      {phaseData.phaseName}
                      {isToday && <span className="ml-2 text-xs text-primary">(Hoje)</span>}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {format(phaseData.date, "EEEE, dd 'de' MMMM", { locale: ptBR })}
                    </p>
                    {isSizigia && (
                      <p className="text-xs text-primary mt-1">
                        ⚡ Marés de sizígia
                      </p>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">
                    {format(phaseData.date, 'dd/MM')}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {format(phaseData.date, 'HH:mm')}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Legenda */}
        <div className="mt-4 pt-4 border-t space-y-2">
          <p className="text-xs font-semibold text-muted-foreground">Influência nas Marés:</p>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="flex items-center gap-2">
              <span>🌕 🌑</span>
              <span className="text-muted-foreground">Marés de sizígia (maiores amplitudes)</span>
            </div>
            <div className="flex items-center gap-2">
              <span>🌓 🌗</span>
              <span className="text-muted-foreground">Marés de quadratura (menores amplitudes)</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LunarCalendar;
