import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { FileText, AlertCircle } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header cityName="João Pessoa" cityState="PB" />

      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="bg-card rounded-lg shadow-lg p-6 sm:p-8 md:p-10">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="w-8 h-8 text-primary" />
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
              Termos de Uso
            </h1>
          </div>

          <div className="mb-6 p-4 bg-muted rounded-lg flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
            <p className="text-sm text-muted-foreground">
              <strong>Última atualização:</strong> 22 de outubro de 2025
            </p>
          </div>

          <div className="prose prose-sm sm:prose-base max-w-none space-y-6">
            {/* Introdução */}
            <section>
              <p className="text-muted-foreground leading-relaxed">
                Bem-vindo ao <strong>Tábua de Marés</strong>. Ao acessar e usar este site, você concorda em cumprir e estar vinculado aos seguintes termos e condições de uso. Se você não concordar com qualquer parte destes termos, por favor, não use nosso site.
              </p>
            </section>

            {/* 1. Aceitação dos Termos */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3 flex items-center gap-2">
                1. Aceitação dos Termos
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Ao acessar e usar o site <strong>Tábua de Marés</strong> (tabuademare.site), você concorda em estar legalmente vinculado a estes Termos de Uso e à nossa <Link to="/politica-de-privacidade" className="text-primary hover:underline">Política de Privacidade</Link>. Se você não concordar com estes termos, não use este site.
              </p>
            </section>

            {/* 2. Descrição do Serviço */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                2. Descrição do Serviço
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                O <strong>Tábua de Marés</strong> é um site informativo que fornece:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Previsões de marés para cidades costeiras do Brasil</li>
                <li>Informações sobre fases lunares e calendário lunar</li>
                <li>Guia turístico com informações sobre praias</li>
                <li>Dados meteorológicos básicos</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3">
                Este serviço é fornecido <strong>gratuitamente</strong> para fins informativos e educacionais.
              </p>
            </section>

            {/* 3. Uso Aceitável */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                3. Uso Aceitável
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Você concorda em usar o site apenas para fins legais e de acordo com estes Termos. Você <strong>NÃO PODE</strong>:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Usar o site de qualquer forma que viole leis locais, estaduais, nacionais ou internacionais</li>
                <li>Tentar obter acesso não autorizado ao site, servidores ou redes conectadas</li>
                <li>Usar o site para transmitir vírus, malware ou qualquer código malicioso</li>
                <li>Fazer scraping, crawling ou uso automatizado excessivo do site</li>
                <li>Reproduzir, duplicar ou copiar o conteúdo sem autorização prévia por escrito</li>
                <li>Usar o site para fins comerciais sem nossa autorização</li>
                <li>Modificar, adaptar ou hackear o site</li>
              </ul>
            </section>

            {/* 4. Limitação de Responsabilidade e Disclaimer */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                4. Limitação de Responsabilidade e Disclaimer
              </h2>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 mb-4">
                <p className="text-sm font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                  ⚠️ AVISO IMPORTANTE SOBRE DADOS DE MARÉS
                </p>
                <p className="text-sm text-yellow-700 dark:text-yellow-300">
                  As informações de marés fornecidas neste site são para <strong>fins informativos e educacionais apenas</strong>. NÃO devem ser usadas para navegação marítima, atividades profissionais ou situações que envolvam segurança de vidas humanas.
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-3">
                <strong>O Tábua de Marés</strong> não garante:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>A precisão, completude ou atualidade das informações de marés</li>
                <li>Que o site estará disponível ininterruptamente</li>
                <li>Que o site estará livre de erros ou vírus</li>
                <li>Que os resultados obtidos através do uso do site serão precisos ou confiáveis</li>
              </ul>

              <p className="text-muted-foreground leading-relaxed mt-4">
                <strong>NA MÁXIMA EXTENSÃO PERMITIDA POR LEI</strong>, o Tábua de Marés e seus operadores <strong>NÃO SERÃO RESPONSÁVEIS</strong> por quaisquer danos diretos, indiretos, incidentais, especiais, consequenciais ou punitivos resultantes de:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4 mt-2">
                <li>Uso ou incapacidade de usar o site</li>
                <li>Confiança em informações fornecidas pelo site</li>
                <li>Decisões tomadas com base nas informações do site</li>
                <li>Erros, omissões ou imprecisões no conteúdo</li>
                <li>Interrupção ou encerramento do serviço</li>
              </ul>
            </section>

            {/* 5. Propriedade Intelectual */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                5. Propriedade Intelectual
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Todo o conteúdo do site, incluindo mas não limitado a:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Texto, gráficos, logotipos, ícones</li>
                <li>Imagens, áudio, vídeo</li>
                <li>Software, código-fonte</li>
                <li>Compilação de dados</li>
                <li>Design e layout</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3">
                É de propriedade do <strong>Tábua de Marés</strong> ou de seus licenciadores e está protegido por leis de direitos autorais brasileiras e internacionais.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3">
                Você pode visualizar e imprimir páginas do site para uso pessoal e não comercial, mas <strong>não pode</strong> modificar, distribuir, transmitir, exibir, executar, reproduzir, publicar, licenciar ou criar trabalhos derivados sem autorização prévia por escrito.
              </p>
            </section>

            {/* 6. Links de Terceiros */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                6. Links para Sites de Terceiros
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Nosso site pode conter links para sites de terceiros que não são de nossa propriedade ou controle. Não temos controle sobre, e não assumimos responsabilidade pelo conteúdo, políticas de privacidade ou práticas de sites de terceiros. Ao usar o site, você reconhece e concorda que não seremos responsáveis por qualquer dano ou perda causados pelo uso de sites de terceiros.
              </p>
            </section>

            {/* 7. Publicidade e Google AdSense */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                7. Publicidade e Google AdSense
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Este site exibe anúncios através do <strong>Google AdSense</strong> e outros serviços de publicidade para gerar receita e manter o serviço gratuito.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Ao usar este site, você concorda que:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Anúncios serão exibidos durante sua navegação</li>
                <li>Cookies de publicidade podem ser usados para personalizar anúncios (veja nossa <Link to="/politica-de-privacidade" className="text-primary hover:underline">Política de Privacidade</Link>)</li>
                <li>Não somos responsáveis pelo conteúdo dos anúncios de terceiros</li>
                <li>Você não tentará fraudar, manipular ou interferir com o sistema de anúncios</li>
                <li>Cliques fraudulentos em anúncios são estritamente proibidos</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3">
                Para mais informações sobre como seus dados são usados para publicidade, consulte nossa <Link to="/politica-de-privacidade" className="text-primary hover:underline">Política de Privacidade</Link> e a <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Política de Anúncios do Google</a>.
              </p>
            </section>

            {/* 8. Idade Mínima */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                8. Idade Mínima
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Este site é destinado a usuários com <strong>13 anos ou mais</strong>. Se você tem menos de 13 anos, não use este site. Se você tem entre 13 e 18 anos, você deve ter permissão de um dos pais ou responsável legal para usar o site.
              </p>
            </section>

            {/* 9. Modificações do Serviço */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                9. Modificações do Serviço e dos Termos
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Reservamo-nos o direito de:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Modificar ou descontinuar o site (ou qualquer parte dele) a qualquer momento, com ou sem aviso prévio</li>
                <li>Alterar estes Termos de Uso a qualquer momento</li>
                <li>Restringir o acesso ao site a certos usuários</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-3">
                <strong>Mudanças nos Termos:</strong> Quando atualizarmos estes termos, alteraremos a data de "Última atualização" no topo desta página. O uso continuado do site após alterações constitui aceitação dos novos termos.
              </p>
            </section>

            {/* 10. Rescisão */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                10. Rescisão de Acesso
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Podemos encerrar ou suspender seu acesso ao site imediatamente, sem aviso prévio ou responsabilidade, por qualquer motivo, incluindo, sem limitação, se você violar estes Termos de Uso.
              </p>
            </section>

            {/* 11. Lei Aplicável */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                11. Lei Aplicável e Jurisdição
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Estes Termos de Uso são regidos e interpretados de acordo com as <strong>leis do Brasil</strong>. Qualquer disputa relacionada a estes termos será resolvida nos tribunais do Brasil, Estado da Paraíba, Comarca de João Pessoa.
              </p>
            </section>

            {/* 12. LGPD */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                12. Lei Geral de Proteção de Dados (LGPD)
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Estamos comprometidos em proteger seus dados pessoais de acordo com a <strong>Lei nº 13.709/2018 (LGPD)</strong>. Para informações detalhadas sobre como coletamos, usamos e protegemos seus dados, consulte nossa <Link to="/politica-de-privacidade" className="text-primary hover:underline">Política de Privacidade</Link>.
              </p>
            </section>

            {/* 13. Isenção de Garantias */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                13. Isenção de Garantias
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                O SITE É FORNECIDO "<strong>NO ESTADO EM QUE SE ENCONTRA</strong>" E "<strong>CONFORME DISPONÍVEL</strong>", SEM GARANTIAS DE QUALQUER TIPO, EXPRESSAS OU IMPLÍCITAS, INCLUINDO, MAS NÃO SE LIMITANDO A:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Garantias de comercialização</li>
                <li>Adequação a um propósito específico</li>
                <li>Não violação de direitos</li>
                <li>Precisão ou confiabilidade das informações</li>
              </ul>
            </section>

            {/* 14. Separabilidade */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                14. Separabilidade
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Se qualquer disposição destes Termos for considerada inválida ou inexequível por um tribunal de jurisdição competente, as disposições restantes permanecerão em pleno vigor e efeito.
              </p>
            </section>

            {/* 15. Acordo Completo */}
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                15. Acordo Completo
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Estes Termos de Uso, juntamente com nossa Política de Privacidade, constituem o acordo completo entre você e o Tábua de Marés em relação ao uso do site e substituem todos os acordos anteriores ou contemporâneos.
              </p>
            </section>

            {/* Contato */}
            <section className="mt-8 p-6 bg-muted rounded-lg">
              <h2 className="text-2xl font-semibold text-foreground mb-3">
                📧 Contato
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco:
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p><strong>Email:</strong> <a href="mailto:contato@tabuademaresjoaopessoa.com.br" className="text-primary hover:underline">contato@tabuademaresjoaopessoa.com.br</a></p>
                <p><strong>Site:</strong> <a href="https://www.tabuademare.site" className="text-primary hover:underline">www.tabuademare.site</a></p>
              </div>
            </section>

            {/* Footer de Aceitação */}
            <section className="mt-8 p-4 bg-primary/10 border-l-4 border-primary rounded">
              <p className="text-sm text-foreground">
                <strong>Ao continuar a usar este site, você reconhece que leu, compreendeu e concorda em estar vinculado a estes Termos de Uso.</strong>
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfService;
