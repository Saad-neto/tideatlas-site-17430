import { Waves } from 'lucide-react';
import { formatDate } from '@/lib/utils';

interface HeaderProps {
  cityName: string;
  cityState: string;
}

const Header = ({ cityName, cityState }: HeaderProps) => {
  const currentDate = formatDate();

  return (
    <header className="sticky top-0 z-50 bg-card border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Waves className="w-8 h-8 text-primary" />
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-foreground">
                🌊 Tábua de Marés
              </h1>
              <p className="text-sm text-muted-foreground">
                Seu guia completo para turismo
              </p>
            </div>
          </div>
          <div className="text-center sm:text-right">
            <p className="text-lg font-semibold text-primary">
              {cityName}/{cityState}
            </p>
            <p className="text-sm text-muted-foreground capitalize">
              {currentDate}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
