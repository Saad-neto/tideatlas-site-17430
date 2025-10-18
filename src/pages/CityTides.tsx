import { useParams, Navigate } from 'react-router-dom';
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
import { RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CityTides = () => {
  const { citySlug } = useParams<{ citySlug: string }>();

  // Busca a cidade pelo slug
  const city = citySlug ? getCityBySlug(citySlug) : undefined;

  // Busca dados de marés
  const { forecast, isLoading, error, isCached, refetch } = useTideData(city, 7);

  // Se a cidade não existir, redireciona para 404
  if (!city) {
    return <Navigate to="/404" replace />;
  }

  // Pega os eventos de maré do dia atual
  const todayTides = forecast?.days[0]?.events || [];

  return (
    <div className="min-h-screen bg-background">
      <SEO city={city} />
      <Header cityName={city.name} cityState={city.stateCode} />

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
            onClick={refetch}
            disabled={isLoading}
            className="self-start sm:self-auto"
          >
            <RefreshCw className={`w-4 h-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
            Atualizar
          </Button>
        </div>

        <TideGrid
          tides={todayTides}
          date={forecast?.days[0]?.date}
          isLoading={isLoading}
          error={error}
        />

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
