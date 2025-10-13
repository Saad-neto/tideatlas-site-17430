import { ArrowUp, ArrowDown } from 'lucide-react';
import { TideData } from '@/data/mockData';

interface TideCardProps extends TideData {}

const TideCard = ({ type, time, height }: TideCardProps) => {
  const isHigh = type === 'alta';
  
  return (
    <div className={`rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 ${
      isHigh 
        ? 'bg-gradient-tide text-white' 
        : 'bg-card border-2 border-muted'
    }`}>
      <div className="flex items-center justify-between mb-2">
        <span className={`text-xs sm:text-sm uppercase font-semibold ${
          isHigh ? 'text-white/90' : 'text-muted-foreground'
        }`}>
          Maré {type}
        </span>
        {isHigh ? (
          <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6" />
        ) : (
          <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6 text-tide-low" />
        )}
      </div>
      <div className={`text-3xl sm:text-4xl font-bold my-2 sm:my-3 ${
        !isHigh && 'text-foreground'
      }`}>
        {time}
      </div>
      <div className={`text-base sm:text-lg font-medium ${
        isHigh ? 'text-white/90' : 'text-muted-foreground'
      }`}>
        {height}
      </div>
    </div>
  );
};

export default TideCard;
