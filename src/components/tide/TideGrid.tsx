import TideCard from './TideCard';
import { TideEvent } from '@/types/tide';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface TideGridProps {
  tides: TideEvent[];
  date?: Date;
  isLoading?: boolean;
  error?: string | null;
}

const TideGrid = ({ tides, date, isLoading, error }: TideGridProps) => {
  const displayDate = date || new Date();
  const formattedDate = format(displayDate, "EEEE, d 'de' MMMM", { locale: ptBR });

  if (isLoading) {
    return (
      <section className="my-6 sm:my-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Horários de Maré
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground capitalize">
            {formattedDate}
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-lg p-4 animate-pulse"
            >
              <div className="h-4 bg-muted rounded mb-3"></div>
              <div className="h-8 bg-muted rounded mb-2"></div>
              <div className="h-4 bg-muted rounded w-2/3"></div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="my-6 sm:my-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Horários de Maré
          </h2>
        </div>
        <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6 text-center">
          <p className="text-destructive font-medium">{error}</p>
          <p className="text-sm text-muted-foreground mt-2">
            Tente novamente mais tarde
          </p>
        </div>
      </section>
    );
  }

  if (!tides || tides.length === 0) {
    return (
      <section className="my-6 sm:my-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Horários de Maré
          </h2>
        </div>
        <div className="bg-muted rounded-lg p-6 text-center">
          <p className="text-muted-foreground">
            Nenhum dado de maré disponível para esta data
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="my-6 sm:my-8">
      <div className="text-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
          Horários de Maré
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground capitalize">
          {formattedDate}
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {tides.map((tide, index) => (
          <TideCard
            key={index}
            type={tide.type === 'high' ? 'alta' : 'baixa'}
            time={format(tide.time, 'HH:mm')}
            height={`${tide.height.toFixed(1)}m`}
          />
        ))}
      </div>
    </section>
  );
};

export default TideGrid;
