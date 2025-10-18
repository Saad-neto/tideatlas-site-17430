import { Waves } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cities } from '@/data/cities';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border mt-12 sm:mt-16">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo e descrição */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Waves className="w-6 h-6 text-primary" />
              <h3 className="text-lg font-bold text-foreground">
                Tábua de Marés
              </h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Seu guia completo para turismo nas praias brasileiras.
              Consulte horários de marés, previsão do tempo e muito mais.
            </p>
          </div>

          {/* Principais cidades */}
          <div>
            <h4 className="text-md font-semibold text-foreground mb-4">
              Principais Cidades
            </h4>
            <ul className="grid grid-cols-2 gap-2">
              {cities.slice(0, 12).map((city) => (
                <li key={city.id}>
                  <Link
                    to={`/tabuada-mares/${city.slug}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {city.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Informações */}
          <div>
            <h4 className="text-md font-semibold text-foreground mb-4">
              Sobre
            </h4>
            <p className="text-sm text-muted-foreground mb-2">
              Informações precisas de tábua de marés para turistas e
              moradores das principais cidades litorâneas do Brasil.
            </p>
            <div className="mt-4">
              <Link
                to="/politica-de-privacidade"
                className="text-sm text-muted-foreground hover:text-primary transition-colors inline-block mb-2"
              >
                Política de Privacidade
              </Link>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              © {currentYear} Tábua de Marés. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
