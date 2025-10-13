import { Waves } from 'lucide-react';
import { Link } from 'react-router-dom';
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
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <Waves className="w-8 h-8 text-primary" />
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-foreground">
                🌊 Tábua de Marés
              </h1>
              <p className="text-sm text-muted-foreground">
                Seu guia completo para turismo
              </p>
            </div>
          </Link>
          <div className="flex items-center gap-6">
            <nav className="hidden sm:flex gap-6">
              <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Início
              </Link>
              <Link to="/sobre" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Sobre
              </Link>
            </nav>
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
      </div>
    </header>
  );
};

export default Header;
