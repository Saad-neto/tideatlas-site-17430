// Serviço para cálculo de fases da lua
// Baseado em algoritmos astronômicos

export type MoonPhase = 'new' | 'waxing-crescent' | 'first-quarter' | 'waxing-gibbous' | 'full' | 'waning-gibbous' | 'last-quarter' | 'waning-crescent';

export interface MoonData {
  phase: MoonPhase;
  phaseName: string;
  phaseEmoji: string;
  illumination: number; // 0-100%
  age: number; // dias desde lua nova (0-29.53)
  nextFullMoon: Date;
  nextNewMoon: Date;
  tideInfluence: 'high' | 'normal'; // high = sizígia (lua cheia/nova)
}

/**
 * Calcula a fase da lua para uma data específica
 * Algoritmo baseado em cálculos astronômicos simplificados
 */
export function calculateMoonPhase(date: Date = new Date()): MoonData {
  // Data de referência conhecida (lua nova)
  const knownNewMoon = new Date('2000-01-06T18:14:00Z');
  const lunarCycle = 29.53058867; // dias do ciclo lunar

  // Calcula dias desde a lua nova de referência
  const daysSinceReference = (date.getTime() - knownNewMoon.getTime()) / (1000 * 60 * 60 * 24);

  // Calcula a idade da lua atual (dias desde última lua nova)
  const moonAge = daysSinceReference % lunarCycle;

  // Calcula a iluminação (0-100%)
  const illumination = (1 - Math.cos((moonAge / lunarCycle) * 2 * Math.PI)) * 50;

  // Determina a fase
  const phase = getMoonPhaseFromAge(moonAge);
  const phaseName = getMoonPhaseName(phase);
  const phaseEmoji = getMoonPhaseEmoji(phase);

  // Calcula próxima lua cheia e nova
  const nextFullMoon = calculateNextPhaseDate(date, 'full', moonAge, lunarCycle);
  const nextNewMoon = calculateNextPhaseDate(date, 'new', moonAge, lunarCycle);

  // Determina influência nas marés (sizígia = marés mais altas/baixas)
  const tideInfluence = (phase === 'full' || phase === 'new') ? 'high' : 'normal';

  return {
    phase,
    phaseName,
    phaseEmoji,
    illumination: Math.round(illumination * 10) / 10,
    age: Math.round(moonAge * 10) / 10,
    nextFullMoon,
    nextNewMoon,
    tideInfluence
  };
}

function getMoonPhaseFromAge(age: number): MoonPhase {
  if (age < 1.84566) return 'new';
  if (age < 5.53699) return 'waxing-crescent';
  if (age < 9.22831) return 'first-quarter';
  if (age < 12.91963) return 'waxing-gibbous';
  if (age < 16.61096) return 'full';
  if (age < 20.30228) return 'waning-gibbous';
  if (age < 23.99361) return 'last-quarter';
  if (age < 27.68493) return 'waning-crescent';
  return 'new';
}

function getMoonPhaseName(phase: MoonPhase): string {
  const names: Record<MoonPhase, string> = {
    'new': 'Lua Nova',
    'waxing-crescent': 'Lua Crescente',
    'first-quarter': 'Quarto Crescente',
    'waxing-gibbous': 'Lua Gibosa Crescente',
    'full': 'Lua Cheia',
    'waning-gibbous': 'Lua Gibosa Minguante',
    'last-quarter': 'Quarto Minguante',
    'waning-crescent': 'Lua Minguante'
  };
  return names[phase];
}

function getMoonPhaseEmoji(phase: MoonPhase): string {
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

function calculateNextPhaseDate(currentDate: Date, targetPhase: 'full' | 'new', currentAge: number, lunarCycle: number): Date {
  const targetAge = targetPhase === 'new' ? 0 : lunarCycle / 2;

  let daysUntilPhase: number;
  if (targetPhase === 'new') {
    // Próxima lua nova
    daysUntilPhase = currentAge < 0.5 ? -currentAge : lunarCycle - currentAge;
  } else {
    // Próxima lua cheia
    const fullMoonAge = lunarCycle / 2;
    if (currentAge < fullMoonAge) {
      daysUntilPhase = fullMoonAge - currentAge;
    } else {
      daysUntilPhase = lunarCycle - currentAge + fullMoonAge;
    }
  }

  const nextDate = new Date(currentDate.getTime() + daysUntilPhase * 24 * 60 * 60 * 1000);
  return nextDate;
}

/**
 * Calcula as próximas fases da lua (próximos 30 dias)
 */
export function getUpcomingMoonPhases(startDate: Date = new Date(), days: number = 30): Array<{ date: Date; phase: MoonPhase; phaseName: string }> {
  const phases: Array<{ date: Date; phase: MoonPhase; phaseName: string }> = [];
  const lunarCycle = 29.53058867;

  for (let i = 0; i < days; i++) {
    const date = new Date(startDate.getTime() + i * 24 * 60 * 60 * 1000);
    const moonData = calculateMoonPhase(date);

    // Adiciona apenas quando há mudança de fase principal
    if (i === 0 ||
        moonData.phase === 'new' ||
        moonData.phase === 'first-quarter' ||
        moonData.phase === 'full' ||
        moonData.phase === 'last-quarter') {

      // Verifica se é o primeiro dia dessa fase (evita duplicatas)
      const prevDate = new Date(date.getTime() - 24 * 60 * 60 * 1000);
      const prevPhase = calculateMoonPhase(prevDate).phase;

      if (i === 0 || prevPhase !== moonData.phase) {
        phases.push({
          date,
          phase: moonData.phase,
          phaseName: moonData.phaseName
        });
      }
    }
  }

  return phases;
}
