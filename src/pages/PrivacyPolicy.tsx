import { Waves } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PrivacyPolicy = () => {
  const currentDate = new Date().toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className="min-h-screen bg-background">
      <Header cityName="João Pessoa" cityState="PB" />
      
      <main className="container mx-auto px-4 py-8 sm:py-12 max-w-4xl">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Waves className="w-8 h-8 text-primary" />
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
              Política de Privacidade
            </h1>
          </div>
          <p className="text-sm text-muted-foreground">
            Última atualização: {currentDate}
          </p>
        </div>

        <div className="space-y-6">
          {/* 1. Introdução */}
          <Card>
            <CardHeader>
              <CardTitle>1. Introdução</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm sm:text-base text-muted-foreground">
              <p>
                A sua privacidade é importante para nós. O site <strong>Tábua de Marés João Pessoa/PB</strong> está 
                comprometido em proteger as informações pessoais dos nossos usuários.
              </p>
              <p>
                Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos suas informações 
                quando você visita nosso site. Ao acessar e usar nosso site, você concorda com as práticas descritas 
                nesta política.
              </p>
              <p>
                Coletamos apenas dados mínimos necessários para melhorar sua experiência de navegação e fornecer 
                conteúdo relevante sobre tábuas de marés.
              </p>
            </CardContent>
          </Card>

          {/* 2. Informações que Coletamos */}
          <Card>
            <CardHeader>
              <CardTitle>2. Informações que Coletamos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm sm:text-base text-muted-foreground">
              <p>Podemos coletar as seguintes categorias de informações:</p>
              
              <div className="pl-4">
                <h4 className="font-semibold text-foreground mb-2">2.1 Dados de Navegação Automática</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Endereço IP</li>
                  <li>Tipo de navegador e versão</li>
                  <li>Sistema operacional</li>
                  <li>Páginas visitadas e tempo de permanência</li>
                  <li>Data e hora de acesso</li>
                  <li>Referência de origem (site de onde veio)</li>
                </ul>
              </div>

              <div className="pl-4">
                <h4 className="font-semibold text-foreground mb-2">2.2 Cookies e Tecnologias Similares</h4>
                <p>
                  Utilizamos cookies próprios e de terceiros (Google AdSense e Google Analytics) para melhorar 
                  sua experiência de navegação e exibir anúncios relevantes.
                </p>
              </div>

              <div className="pl-4">
                <h4 className="font-semibold text-foreground mb-2">2.3 Dados Coletados por Terceiros</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Google Analytics:</strong> Coleta dados estatísticos sobre o uso do site</li>
                  <li><strong>Google AdSense:</strong> Coleta dados para personalização de anúncios</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* 3. Como Usamos as Informações */}
          <Card>
            <CardHeader>
              <CardTitle>3. Como Usamos as Informações</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm sm:text-base text-muted-foreground">
              <p>As informações coletadas são utilizadas para:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Melhorar a experiência do usuário e a funcionalidade do site</li>
                <li>Analisar o tráfego e criar estatísticas de uso</li>
                <li>Exibir anúncios relevantes através do Google AdSense</li>
                <li>Identificar e corrigir problemas técnicos</li>
                <li>Personalizar conteúdo de acordo com suas preferências</li>
                <li>Cumprir obrigações legais quando necessário</li>
              </ul>
              <p className="font-semibold text-foreground mt-4">
                Importante: Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros 
                para fins comerciais.
              </p>
            </CardContent>
          </Card>

          {/* 4. Cookies */}
          <Card>
            <CardHeader>
              <CardTitle>4. Cookies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm sm:text-base text-muted-foreground">
              <div className="pl-4">
                <h4 className="font-semibold text-foreground mb-2">4.1 O que são Cookies?</h4>
                <p>
                  Cookies são pequenos arquivos de texto armazenados no seu dispositivo quando você visita um site. 
                  Eles ajudam o site a lembrar suas preferências e melhorar sua experiência.
                </p>
              </div>

              <div className="pl-4">
                <h4 className="font-semibold text-foreground mb-2">4.2 Tipos de Cookies que Usamos</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Cookies Essenciais:</strong> Necessários para o funcionamento básico do site</li>
                  <li><strong>Cookies de Análise:</strong> Google Analytics para entender como você usa o site</li>
                  <li><strong>Cookies de Publicidade:</strong> Google AdSense para exibir anúncios relevantes</li>
                </ul>
              </div>

              <div className="pl-4">
                <h4 className="font-semibold text-foreground mb-2">4.3 Como Gerenciar Cookies</h4>
                <p>
                  Você pode configurar seu navegador para recusar cookies ou alertá-lo quando eles estiverem sendo enviados. 
                  No entanto, algumas funcionalidades do site podem não funcionar corretamente sem cookies.
                </p>
                <p className="mt-2">
                  Consulte as configurações de privacidade do seu navegador para mais informações sobre como gerenciar cookies.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* 5. Google AdSense e Publicidade */}
          <Card>
            <CardHeader>
              <CardTitle>5. Google AdSense e Publicidade</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm sm:text-base text-muted-foreground">
              <p>
                Utilizamos o <strong>Google AdSense</strong> para exibir anúncios em nosso site. O Google e seus parceiros 
                podem usar cookies e outras tecnologias para:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Exibir anúncios personalizados com base nos seus interesses</li>
                <li>Medir a eficácia dos anúncios</li>
                <li>Evitar a exibição repetitiva dos mesmos anúncios</li>
              </ul>
              <p className="mt-4">
                Para mais informações sobre como o Google usa dados quando você visita sites parceiros, acesse:{' '}
                <a 
                  href="https://policies.google.com/technologies/partner-sites" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Políticas de Privacidade do Google
                </a>
              </p>
              <p className="mt-2">
                Você pode desativar anúncios personalizados visitando as{' '}
                <a 
                  href="https://adssettings.google.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Configurações de Anúncios do Google
                </a>
              </p>
            </CardContent>
          </Card>

          {/* 6. Google Analytics */}
          <Card>
            <CardHeader>
              <CardTitle>6. Google Analytics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm sm:text-base text-muted-foreground">
              <p>
                Usamos o <strong>Google Analytics</strong> para coletar informações sobre como os visitantes usam nosso site. 
                Isso nos ajuda a entender padrões de uso e melhorar nosso conteúdo.
              </p>
              <p>
                O Google Analytics coleta informações de forma anônima, incluindo:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Número de visitantes do site</li>
                <li>Páginas mais visitadas</li>
                <li>Tempo médio de permanência</li>
                <li>Origem do tráfego</li>
                <li>Dispositivos e navegadores utilizados</li>
              </ul>
              <p className="mt-4">
                Para mais informações sobre o Google Analytics, consulte a{' '}
                <a 
                  href="https://policies.google.com/privacy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Política de Privacidade do Google Analytics
                </a>
              </p>
            </CardContent>
          </Card>

          {/* 7. Compartilhamento de Dados */}
          <Card>
            <CardHeader>
              <CardTitle>7. Compartilhamento de Dados</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm sm:text-base text-muted-foreground">
              <p>
                Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto nas 
                seguintes situações:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Google (AdSense e Analytics):</strong> Conforme descrito nas seções anteriores, 
                  compartilhamos dados com o Google para fins de análise e publicidade
                </li>
                <li>
                  <strong>Requisições Legais:</strong> Podemos divulgar informações quando exigido por lei, 
                  ordem judicial ou solicitação governamental
                </li>
                <li>
                  <strong>Proteção de Direitos:</strong> Para proteger nossos direitos, propriedade ou segurança, 
                  ou de nossos usuários
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* 8. Segurança */}
          <Card>
            <CardHeader>
              <CardTitle>8. Segurança</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm sm:text-base text-muted-foreground">
              <p>
                Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações contra 
                acesso não autorizado, alteração, divulgação ou destruição.
              </p>
              <p>
                Estas medidas incluem:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Uso de conexões seguras (HTTPS)</li>
                <li>Monitoramento regular de vulnerabilidades de segurança</li>
                <li>Limitação de acesso a informações pessoais</li>
              </ul>
              <p className="mt-4 font-semibold text-foreground">
                Importante: Embora nos esforcemos para proteger suas informações, nenhum método de transmissão 
                pela Internet ou armazenamento eletrônico é 100% seguro.
              </p>
            </CardContent>
          </Card>

          {/* 9. Direitos dos Usuários (LGPD) */}
          <Card>
            <CardHeader>
              <CardTitle>9. Direitos dos Usuários (LGPD)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm sm:text-base text-muted-foreground">
              <p>
                Em conformidade com a <strong>Lei Geral de Proteção de Dados (LGPD)</strong>, você tem os seguintes direitos:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Direito de Acesso:</strong> Solicitar informações sobre quais dados pessoais possuímos sobre você
                </li>
                <li>
                  <strong>Direito de Correção:</strong> Solicitar a correção de dados incompletos, inexatos ou desatualizados
                </li>
                <li>
                  <strong>Direito de Exclusão:</strong> Solicitar a exclusão de seus dados pessoais, exceto quando 
                  houver base legal para mantê-los
                </li>
                <li>
                  <strong>Direito de Portabilidade:</strong> Solicitar a transferência de seus dados para outro fornecedor
                </li>
                <li>
                  <strong>Direito de Revogação:</strong> Revogar seu consentimento a qualquer momento
                </li>
                <li>
                  <strong>Direito de Informação:</strong> Ser informado sobre as entidades com as quais compartilhamos seus dados
                </li>
              </ul>
              <p className="mt-4">
                Para exercer qualquer um destes direitos, entre em contato conosco através do email:{' '}
                <a href="mailto:contato@tabuademaresjoaopessoa.com.br" className="text-primary hover:underline">
                  contato@tabuademaresjoaopessoa.com.br
                </a>
              </p>
              <p>
                Responderemos às solicitações em até 15 dias úteis.
              </p>
            </CardContent>
          </Card>

          {/* 10. Links Externos */}
          <Card>
            <CardHeader>
              <CardTitle>10. Links Externos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm sm:text-base text-muted-foreground">
              <p>
                Nosso site pode conter links para sites externos que não são operados por nós. Não temos controle 
                sobre o conteúdo e as práticas de privacidade desses sites.
              </p>
              <p>
                Recomendamos que você leia as políticas de privacidade de qualquer site de terceiros que visitar.
              </p>
              <p className="font-semibold text-foreground">
                Não somos responsáveis pelas práticas de privacidade ou conteúdo de sites de terceiros.
              </p>
            </CardContent>
          </Card>

          {/* 11. Alterações nesta Política */}
          <Card>
            <CardHeader>
              <CardTitle>11. Alterações nesta Política</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm sm:text-base text-muted-foreground">
              <p>
                Reservamos o direito de atualizar ou modificar esta Política de Privacidade a qualquer momento. 
                Quando fizermos alterações significativas, notificaremos você através de:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Atualização da data de "Última atualização" no topo desta página</li>
                <li>Aviso destacado em nosso site</li>
              </ul>
              <p className="mt-4">
                Recomendamos que você revise esta política periodicamente para se manter informado sobre como 
                protegemos suas informações.
              </p>
              <p className="font-semibold text-foreground">
                O uso continuado do site após alterações constitui sua aceitação da Política de Privacidade revisada.
              </p>
            </CardContent>
          </Card>

          {/* 12. Contato */}
          <Card>
            <CardHeader>
              <CardTitle>12. Contato</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm sm:text-base text-muted-foreground">
              <p>
                Se você tiver dúvidas, preocupações ou solicitações relacionadas a esta Política de Privacidade ou 
                ao tratamento de seus dados pessoais, entre em contato conosco:
              </p>
              <div className="mt-4 p-4 bg-muted rounded-lg">
                <p className="font-semibold text-foreground">Tábua de Marés João Pessoa/PB</p>
                <p className="mt-2">
                  <strong>Email:</strong>{' '}
                  <a href="mailto:contato@tabuademaresjoaopessoa.com.br" className="text-primary hover:underline">
                    contato@tabuademaresjoaopessoa.com.br
                  </a>
                </p>
                <p className="mt-2">
                  <strong>Prazo de resposta:</strong> Até 15 dias úteis
                </p>
              </div>
              <p className="mt-4 text-xs">
                Faremos o possível para responder a todas as solicitações de forma rápida e completa.
              </p>
            </CardContent>
          </Card>

          {/* Declaração Final */}
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="pt-6">
              <p className="text-sm text-center text-muted-foreground">
                Ao utilizar o site <strong>Tábua de Marés João Pessoa/PB</strong>, você declara estar ciente 
                e concordar com os termos desta Política de Privacidade.
              </p>
              <div className="mt-6 text-center">
                <Link to="/" className="inline-flex items-center gap-2 text-primary hover:underline">
                  <Waves className="w-4 h-4" />
                  Voltar para a página inicial
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;