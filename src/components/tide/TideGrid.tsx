import TideCard from './TideCard';
import { TideData } from '@/data/mockData';

interface TideGridProps {
  tides: TideData[];
}

const TideGrid = ({ tides }: TideGridProps) => {
  return (
    <section className="my-6 sm:my-8">
      <div className="text-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
          Horários de Maré Hoje
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground">
          Confira os melhores horários para aproveitar a praia
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {tides.map((tide, index) => (
          <TideCard key={index} {...tide} />
        ))}
      </div>
    </section>
  );
};

export default TideGrid;
