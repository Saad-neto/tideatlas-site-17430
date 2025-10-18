import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { DailyTide } from '@/types/tide';
import { ArrowUp, ArrowDown, Calendar } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface TideWeekForecastProps {
  days: DailyTide[];
  isLoading?: boolean;
}

const TideWeekForecast = ({ days, isLoading }: TideWeekForecastProps) => {
  if (isLoading) {
    return (
      <section className="my-8">
        <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
          <Calendar className="w-6 h-6" />
          Previsão dos Próximos 7 Dias
        </h2>
        <div className="space-y-3">
          {[1, 2, 3, 4, 5, 6, 7].map((i) => (
            <div key={i} className="bg-card border border-border rounded-lg p-4 animate-pulse">
              <div className="h-6 bg-muted rounded w-1/3 mb-2"></div>
              <div className="h-4 bg-muted rounded w-2/3"></div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (!days || days.length === 0) {
    return null;
  }

  return (
    <section className="my-8">
      <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
        <Calendar className="w-6 h-6" />
        Previsão dos Próximos 7 Dias
      </h2>

      <Accordion type="single" collapsible className="w-full space-y-2">
        {days.map((day, index) => {
          const isToday = index === 0;
          const dateStr = format(day.date, "EEEE, d 'de' MMMM", { locale: ptBR });
          const highTides = day.events.filter(e => e.type === 'high');
          const lowTides = day.events.filter(e => e.type === 'low');

          return (
            <AccordionItem
              key={day.date.toISOString()}
              value={day.date.toISOString()}
              className="bg-card border border-border rounded-lg overflow-hidden"
            >
              <AccordionTrigger className="px-4 py-3 hover:no-underline hover:bg-muted/50">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full text-left pr-4">
                  <div>
                    <p className="font-semibold text-foreground capitalize">
                      {isToday ? 'Hoje' : dateStr}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {highTides.length} marés altas • {lowTides.length} marés baixas
                    </p>
                  </div>
                  <div className="flex gap-4 mt-2 sm:mt-0">
                    <div className="flex items-center gap-1 text-sm">
                      <ArrowUp className="w-4 h-4 text-blue-500" />
                      <span className="text-muted-foreground">
                        {highTides.length > 0 ? `${highTides[0].height.toFixed(1)}m` : '-'}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-sm">
                      <ArrowDown className="w-4 h-4 text-amber-500" />
                      <span className="text-muted-foreground">
                        {lowTides.length > 0 ? `${lowTides[0].height.toFixed(1)}m` : '-'}
                      </span>
                    </div>
                  </div>
                </div>
              </AccordionTrigger>

              <AccordionContent className="px-4 pb-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                  {day.events.map((event, i) => (
                    <div
                      key={i}
                      className={`flex items-center justify-between p-3 rounded-md ${
                        event.type === 'high'
                          ? 'bg-blue-500/10 border border-blue-500/20'
                          : 'bg-amber-500/10 border border-amber-500/20'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {event.type === 'high' ? (
                          <ArrowUp className="w-5 h-5 text-blue-500" />
                        ) : (
                          <ArrowDown className="w-5 h-5 text-amber-500" />
                        )}
                        <div>
                          <p className="text-sm font-medium text-foreground">
                            {event.type === 'high' ? 'Maré Alta' : 'Maré Baixa'}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {format(event.time, 'HH:mm')}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-foreground">
                          {event.height.toFixed(1)}m
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </section>
  );
};

export default TideWeekForecast;
