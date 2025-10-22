import { Waves, MapPin, Calendar as CalendarIcon } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { formatDate, cn } from '@/lib/utils';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { cities } from '@/data/cities';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface HeaderProps {
  cityName: string;
  cityState: string;
  selectedDate?: Date;
  onDateChange?: (date: Date) => void;
}

const Header = ({ cityName, cityState, selectedDate, onDateChange }: HeaderProps) => {
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

  const displayDate = selectedDate || new Date();

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
            <div className="flex items-center gap-3 flex-wrap">
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

              {onDateChange && (
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-[180px] sm:w-[200px] justify-start text-left font-normal",
                        !selectedDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {format(displayDate, "PP", { locale: ptBR })}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="end">
                    <Calendar
                      mode="single"
                      selected={displayDate}
                      onSelect={(date) => date && onDateChange(date)}
                      initialFocus
                      locale={ptBR}
                      disabled={(date) => {
                        const today = new Date();
                        today.setHours(0, 0, 0, 0);
                        const maxDate = new Date();
                        maxDate.setDate(maxDate.getDate() + 7);
                        return date < today || date > maxDate;
                      }}
                    />
                  </PopoverContent>
                </Popover>
              )}
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
