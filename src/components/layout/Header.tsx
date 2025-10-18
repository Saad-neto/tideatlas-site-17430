import { Waves, MapPin } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { formatDate } from '@/lib/utils';
import { cities } from '@/data/cities';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface HeaderProps {
  cityName: string;
  cityState: string;
}

const Header = ({ cityName, cityState }: HeaderProps) => {
  const currentDate = formatDate();
  const navigate = useNavigate();

  const currentCity = cities.find(
    city => city.name === cityName && city.stateCode === cityState
  );

  const handleCityChange = (cityId: string) => {
    const selectedCity = cities.find(city => city.id === cityId);
    if (selectedCity) {
      navigate(`/tabuada-mares/${selectedCity.slug}`);
    }
  };

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
          <div className="flex items-center gap-4">
            <nav className="hidden sm:flex gap-6">
              <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Início
              </Link>
              <Link to="/sobre" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Sobre
              </Link>
            </nav>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-primary hidden sm:block" />
              <Select value={currentCity?.id} onValueChange={handleCityChange}>
                <SelectTrigger className="w-[180px] sm:w-[200px]">
                  <SelectValue placeholder="Selecione a cidade" />
                </SelectTrigger>
                <SelectContent>
                  {cities.map((city) => (
                    <SelectItem key={city.id} value={city.id}>
                      {city.name}/{city.stateCode}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="hidden lg:block text-right">
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
