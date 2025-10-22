import { useParams, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AdSpace from '@/components/layout/AdSpace';
import TideGrid from '@/components/tide/TideGrid';
import TideWeekForecast from '@/components/tide/TideWeekForecast';
import InfoSection from '@/components/info/InfoSection';
import SEO from '@/components/seo/SEO';
import CityContent from '@/components/seo/CityContent';
import MoonPhase from '@/components/moon/MoonPhase';
import LunarCalendar from '@/components/moon/LunarCalendar';
import { getCityBySlug } from '@/data/cities';
import { useTideData } from '@/hooks/useTideData';
import { analytics } from '@/hooks/useAnalytics';
import { RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CityTides = () => {
  const { citySlug } = useParams<{ citySlug: string }>();
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  // Busca a cidade pelo slug
  const city = citySlug ? getCityBySlug(citySlug) : undefined;

  // Rastreia visualização da cidade
  useEffect(() => {
    if (city) {
      analytics.trackCityChange(city.name, city.stateCode);
    }
  }, [city?.id]);

  // Handler para mudança de data com analytics
  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
    analytics.trackDateChange(date);
  };

  // Handler para refresh com analytics
  const handleRefresh = () => {
    if (city) {
      analytics.trackRefresh(city.name);
    }
    refetch();
  };

  // Busca dados de marés
  const { forecast, isLoading, error, isCached, refetch } = useTideData(city, 7, selectedDate);

  // Se a cidade não existir, redireciona para 404
  if (!city) {
    return <Navigate to="/404" replace />;
  }

  // Pega os eventos de maré do dia selecionado
  // Como passamos startDate para useTideData, o primeiro dia do forecast
  // SEMPRE será a data selecionada
  const displayTides = forecast?.days[0]?.events || [];
  const selectedDayData = forecast?.days[0];

  return (
    <div className="min-h-screen bg-background">
      <SEO city={city} />
      <Header
        cityName={city.name}
        cityState={city.stateCode}
        selectedDate={selectedDate}
        onDateChange={handleDateChange}
      />

      <main className="container mx-auto px-4 py-6 sm:py-8">
        <AdSpace position="top" />

        <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
              Tábua de Marés - {city.name}/{city.stateCode}
            </h1>
            <p className="text-muted-foreground">
              {city.state} - Região {city.region}
            </p>
            {isCached && (
              <p className="text-xs text-muted-foreground mt-1">
                Dados em cache
              </p>
            )}
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={handleRefresh}
            disabled={isLoading}
            className="self-start sm:self-auto"
          >
            <RefreshCw className={`w-4 h-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
            Atualizar
          </Button>
        </div>

        <TideGrid
          tides={displayTides}
          date={selectedDayData?.date}
          isLoading={isLoading}
          error={error}
        />

        {/* Disclaimer */}
        <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 rounded">
          <p className="text-xs sm:text-sm text-yellow-800 dark:text-yellow-200">
            <strong>⚠️ Aviso:</strong> As informações de marés são para fins informativos e educacionais.
            Não devem ser usadas para navegação marítima ou atividades que envolvam segurança.
            Consulte fontes oficiais para dados precisos.
          </p>
        </div>

        {/* Fase da Lua */}
        <div className="mt-6">
          <MoonPhase />
        </div>

        <AdSpace position="middle" />

        <TideWeekForecast
          days={forecast?.days || []}
          isLoading={isLoading}
        />

        {/* Calendário Lunar */}
        <div className="mt-6">
          <LunarCalendar />
        </div>

        <AdSpace position="middle2" />

        <InfoSection />

        <CityContent city={city} />

        <AdSpace position="bottom" />
      </main>

      <Footer />
    </div>
  );
};

export default CityTides;
