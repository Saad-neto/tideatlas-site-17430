import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Waves, Anchor, Fish, Wind, Camera, Users, MapPin, Heart, CheckCircle2, Mail } from 'lucide-react';
import { currentCity } from '@/data/mockData';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header cityName={currentCity.name} cityState={currentCity.state} />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="relative overflow-hidden rounded-2xl bg-gradient-tide p-8 sm:p-12 md:p-16 text-center mb-12 shadow-lg">
          <div className="relative z-10">
            <Waves className="w-16 h-16 mx-auto mb-4 text-primary-foreground" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Sobre Nós
            </h1>
            <p className="text-lg sm:text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Sua fonte confiável de informações sobre marés em João Pessoa
            </p>
          </div>
        </section>

        {/* Nossa Missão */}
        <section className="mb-12">
          <Card className="border-2 shadow-lg">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Anchor className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-2xl sm:text-3xl">Nossa Missão</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-base sm:text-lg leading-relaxed">
                Nossa missão é fornecer informações precisas e atualizadas sobre as tábuas de marés de João Pessoa, 
                auxiliando pescadores, surfistas, banhistas e todos os amantes do mar a planejarem suas atividades 
                com segurança e eficiência. Queremos conectar as pessoas ao maravilhoso litoral paraibano, facilitando 
                o acesso a dados confiáveis que tornam cada visita à praia uma experiência mais proveitosa e segura.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Por Que Criamos */}
        <section className="mb-12">
          <Card className="border-2 shadow-lg">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-secondary" />
              </div>
              <CardTitle className="text-2xl sm:text-3xl">Por Que Criamos Este Site</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-base sm:text-lg leading-relaxed mb-4">
                Este projeto nasceu da nossa paixão pelo mar e pelas belas praias de João Pessoa. Durante anos, 
                percebemos a dificuldade que muitas pessoas enfrentavam para encontrar informações confiáveis e 
                atualizadas sobre as marés de forma rápida e acessível.
              </p>
              <p className="text-base sm:text-lg leading-relaxed">
                Seja para planejar uma pescaria, uma sessão de surf, um mergulho nas piscinas naturais ou simplesmente 
                aproveitar um dia de praia com a família, saber os horários e alturas das marés é fundamental. 
                Decidimos então criar uma plataforma simples, gratuita e confiável que reunisse todas essas informações 
                em um só lugar, ajudando tanto a comunidade local quanto os turistas que visitam nossa querida João Pessoa.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* O Que Oferecemos */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-foreground">O Que Oferecemos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Waves, title: 'Dados Atualizados', desc: 'Tábuas de marés atualizadas diariamente' },
              { icon: MapPin, title: 'Informações Precisas', desc: 'Altura e horários exatos das marés' },
              { icon: CheckCircle2, title: 'Previsões', desc: 'Dados para os próximos dias' },
              { icon: Users, title: 'Acesso Gratuito', desc: 'Interface simples de qualquer dispositivo' }
            ].map((item, idx) => (
              <Card key={idx} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription>{item.desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </section>

        {/* Para Quem É Este Site */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-foreground">Para Quem É Este Site</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Fish,
                title: 'Pescadores',
                items: ['Melhores horários para pesca', 'Planeje pescarias antecipadamente', 'Maximize suas chances']
              },
              {
                icon: Wind,
                title: 'Surfistas',
                items: ['Descubra quando as ondas estarão melhores', 'Planeje suas sessões de surf', 'Condições ideais']
              },
              {
                icon: Waves,
                title: 'Banhistas',
                items: ['Melhores horários para banho', 'Visite piscinas naturais', 'Planeje com segurança']
              },
              {
                icon: Camera,
                title: 'Fotógrafos',
                items: ['Nascer/pôr do sol ideal', 'Fotografe piscinas naturais', 'Sessões fotográficas perfeitas']
              }
            ].map((group, idx) => (
              <Card key={idx} className="hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                    <group.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{group.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {group.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* João Pessoa */}
        <section className="mb-12">
          <Card className="border-2 shadow-lg bg-gradient-to-br from-card to-accent/5">
            <CardHeader className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-2xl sm:text-3xl">João Pessoa e Suas Praias</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-base sm:text-lg leading-relaxed mb-4">
                João Pessoa, capital da Paraíba, é um verdadeiro paraíso litorâneo com praias de beleza incomparável. 
                Das águas calmas e cristalinas às formações naturais espetaculares, o litoral pessoense oferece 
                experiências únicas para moradores e visitantes.
              </p>
              <p className="text-base sm:text-lg leading-relaxed mb-4">
                Praias como Tambaú, Cabo Branco, Manaíra, Bessa e Ponta do Seixas encantam com suas piscinas naturais, 
                recifes e areias douradas. Conhecer as marés é essencial para aproveitar ao máximo cada uma dessas 
                maravilhas, seja para explorar as piscinas que se formam na maré baixa ou para aproveitar o melhor 
                momento para um banho de mar.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Nosso Compromisso */}
        <section className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 text-foreground">Nosso Compromisso</h2>
          <Card className="border-2 shadow-lg">
            <CardContent className="pt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Informações sempre atualizadas',
                  'Dados de fontes confiáveis',
                  'Site gratuito e acessível',
                  'Melhoria contínua da plataforma',
                  'Respeito à privacidade dos usuários',
                  'Conteúdo original e de qualidade'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contato */}
        <section className="mb-12">
          <Card className="border-2 shadow-lg text-center">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-2xl sm:text-3xl">Fale Conosco</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Sua opinião é muito importante para nós! Sugestões, dúvidas ou feedback são sempre bem-vindos.
              </p>
              <p className="text-muted-foreground mb-6">
                Entre em contato: <a href="mailto:contato@tabuademaresjoaopessoa.com.br" className="text-primary hover:underline">contato@tabuademaresjoaopessoa.com.br</a>
              </p>
            </CardContent>
          </Card>
        </section>

        {/* CTA Final */}
        <section className="text-center">
          <Card className="border-2 shadow-xl bg-gradient-tide">
            <CardContent className="py-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary-foreground mb-4">
                Pronto para Explorar?
              </h2>
              <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
                Comece agora a planejar suas atividades na praia com informações precisas sobre as marés
              </p>
              <Link to="/">
                <Button size="lg" variant="secondary" className="font-semibold">
                  Ver Tábua de Marés Hoje
                </Button>
              </Link>
            </CardContent>
          </Card>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
