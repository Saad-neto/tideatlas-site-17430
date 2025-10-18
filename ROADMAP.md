# Roadmap - Tabela de Marés com AdSense

## Objetivo do Projeto
Aplicação web de tabela de marés para cidades costeiras brasileiras com monetização via Google AdSense.

## Status Atual
- ✅ Estrutura base com React + TypeScript + Vite
- ✅ 22 cidades costeiras catalogadas (Norte, Nordeste, Sudeste, Sul)
- ✅ Página inicial com dados mockados (João Pessoa)
- ✅ Componentes AdSpace prontos para integração
- ✅ Design responsivo com Tailwind CSS
- ✅ Páginas: Sobre e Política de Privacidade

## Roadmap de Desenvolvimento

### 🎯 Fase 1: Estrutura Básica (ALTA PRIORIDADE)
- [x] 1.1 Criar sistema de rotas dinâmicas para cidades
  - [x] Rota: `/tabuada-mares/{cidade-estado}`
  - [x] Componente dinâmico que carrega dados por cidade
  - [x] Página 404 customizada para cidades não encontradas

- [x] 1.2 Estrutura de dados por cidade
  - [x] Arquivo de configuração com lat/lon de todas as 22 cidades
  - [x] Interface TypeScript para dados de cidades
  - [x] Sistema de seleção de cidade (dropdown/search)

### 🌊 Fase 2: Dados Reais de Marés (ALTA PRIORIDADE)
- [x] 2.1 Pesquisar e escolher API de marés
  - Opções gratuitas:
    - [x] Open-Meteo Marine API (limitado para marés costeiras)
    - [x] Stormglass.io (50 requests/dia grátis) - **IMPLEMENTADO**
    - [x] WorldTides ($0.01/request - muito barato) - **IMPLEMENTADO**
    - [ ] Marinha do Brasil (scraping - gratuito mas complexo)

- [x] 2.2 Implementar integração com API escolhida
  - [x] Service para buscar dados de marés (tideService.ts)
  - [x] Cache em memória para reduzir requests (60 min TTL)
  - [x] Tratamento de erros e fallback automático
  - [x] Loading states com skeleton screens
  - [x] Hook customizado useTideData()
  - [x] Dados mockados inteligentes (variam por cidade/data)
  - [x] **Integração Stormglass API completa**
  - [x] **Integração WorldTides API completa**
  - [x] **Sistema de fallback automático para dados mockados**
  - [x] **Configuração via variáveis de ambiente (.env)**

- [x] 2.3 Previsão estendida
  - [x] Tabela de marés para 7 dias (accordion interativo)
  - [x] Calendário lunar com fases da lua
  - [ ] Calendário mensal de marés
  - [ ] Gráfico de altura das marés

### 📈 Fase 3: SEO e Tráfego Orgânico (ALTA PRIORIDADE)
- [x] 3.1 Meta tags dinâmicas por cidade
  - [x] Title: "Tabela de Marés {Cidade} - Horários e Altura"
  - [x] Description otimizada com palavras-chave
  - [x] Open Graph tags para redes sociais
  - [x] Canonical URLs

- [x] 3.2 Conteúdo SEO
  - [x] Texto introdutório por cidade (gerado ou template)
  - [x] FAQ sobre marés
  - [x] Dicas úteis para atividades náuticas
  - [ ] Glossário de termos náuticos
  - [ ] Blog/artigos sobre marés e pesca

- [x] 3.3 Arquivos técnicos SEO
  - [x] sitemap.xml (todas as 22 cidades)
  - [x] robots.txt
  - [x] Schema.org markup (JSON-LD)
  - [ ] Google Search Console (requer deploy em produção)

### 💰 Fase 4: Otimização AdSense (MÉDIA PRIORIDADE)
- [ ] 4.1 Configurar Google AdSense
  - [ ] Criar conta e aprovar site
  - [ ] Obter código de anúncios
  - [ ] Implementar AdSense nos componentes AdSpace

- [ ] 4.2 Otimizar posicionamento
  - [ ] Anúncios responsivos (mobile-first)
  - [ ] Auto Ads do Google
  - [ ] In-feed ads entre dados de marés
  - [ ] A/B testing de posições

- [ ] 4.3 Aumentar pageviews
  - [ ] Links internos entre cidades
  - [ ] "Cidades próximas" relacionadas
  - [ ] Comparador de marés entre cidades

### 📊 Fase 5: Analytics e Monitoramento (MÉDIA PRIORIDADE)
- [ ] 5.1 Google Analytics 4
  - [ ] Configurar GA4
  - [ ] Events personalizados (city_view, tide_check)
  - [ ] Conversion tracking

- [ ] 5.2 Google Search Console
  - [ ] Adicionar propriedade
  - [ ] Verificar indexação
  - [ ] Monitorar keywords

### 🚀 Fase 6: Features Extras (BAIXA PRIORIDADE)
- [x] 6.1 Funcionalidades adicionais
  - [x] Fases da lua (influencia marés)
  - [ ] Melhor horário para pesca (baseado em marés)
  - [ ] Condições para surf/mergulho
  - [ ] Alertas de marés excepcionais
  - [ ] Comparador de praias

- [ ] 6.2 Interatividade
  - [ ] Salvar cidades favoritas (localStorage)
  - [ ] Notificações PWA (marés altas/baixas)
  - [ ] Compartilhar tabela (redes sociais)
  - [ ] Download PDF da tabela

- [ ] 6.3 PWA
  - [ ] Service Worker
  - [ ] Offline mode
  - [ ] Install prompt
  - [ ] Push notifications

### 🎨 Fase 7: UX e Performance (BAIXA PRIORIDADE)
- [ ] 7.1 Performance
  - [ ] Lazy loading de páginas
  - [ ] Image optimization
  - [ ] Bundle size optimization
  - [ ] Lighthouse score 90+

- [ ] 7.2 Acessibilidade
  - [ ] ARIA labels
  - [ ] Keyboard navigation
  - [ ] Screen reader friendly
  - [ ] WCAG AA compliance

## Recursos e APIs Úteis

### APIs de Marés (Gratuitas/Baratas)
- **Open-Meteo Marine**: https://open-meteo.com/en/docs/marine-weather-api
  - Grátis, sem API key
  - Dados: altura de ondas, direção, período

- **Stormglass.io**: https://stormglass.io/
  - 50 requests/dia grátis
  - Dados completos de marés

- **WorldTides**: https://www.worldtides.info/
  - $0.01 por request
  - Muito preciso

### Ferramentas Gratuitas
- Google Analytics 4
- Google Search Console
- Google PageSpeed Insights
- Ahrefs Webmaster Tools (SEO grátis)
- Schema.org Validator

## Estimativa de Custos
- Hosting: $0 (Lovable/Vercel grátis)
- API de Marés: $0-5/mês (tier gratuito)
- Domínio: $10-15/ano (opcional)
- **Total: ~$0-5/mês**

## Métricas de Sucesso
- [ ] 100+ visitas/dia orgânicas
- [ ] Taxa de rejeição < 60%
- [ ] Tempo na página > 2min
- [ ] AdSense aprovado
- [ ] RPM > $1

## Notas Técnicas
- Stack: React 18 + TypeScript + Vite + Tailwind
- UI: shadcn/ui (Radix UI)
- Deploy: Lovable (auto-deploy)
- Git: Commits automáticos via Lovable

## Próximos Passos Imediatos
1. ✅ ~~Criar sistema de rotas dinâmicas para cidades~~ **CONCLUÍDO**
2. ✅ ~~Implementar sistema de marés com cache e loading states~~ **CONCLUÍDO**
3. ✅ ~~Criar previsão de 7 dias~~ **CONCLUÍDO**
4. ✅ ~~Implementar SEO básico (meta tags, sitemap)~~ **CONCLUÍDO**
5. ✅ ~~Integrar API real de marés (Stormglass ou WorldTides)~~ **CONCLUÍDO**
6. **PRÓXIMO:** Configurar Google AdSense
7. Criar gráficos de altura das marés
8. Deploy em produção (Vercel/Netlify)

## Como Integrar API Real de Marés

O projeto está **100% pronto** para conectar com APIs reais. Basta:

1. **Stormglass.io** (50 requests/dia grátis):
   - Criar conta em https://stormglass.io
   - Obter API key
   - Atualizar `src/services/tideService.ts`:
     ```typescript
     const tideService = new TideService({
       provider: 'stormglass',
       apiKey: 'SUA_API_KEY_AQUI'
     });
     ```

2. **WorldTides** ($0.01/request):
   - Criar conta em https://www.worldtides.info
   - Obter API key
   - Atualizar `src/services/tideService.ts` similar ao acima

---

**Última atualização**: 2025-10-17
**Versão**: 0.6.0

### Changelog
- **v0.6.0** (2025-10-17): Integração com APIs Reais de Marés
  - ✅ Integração completa com Stormglass.io API
  - ✅ Integração completa com WorldTides API
  - ✅ Sistema de fallback automático para dados mockados
  - ✅ Configuração via variáveis de ambiente (.env)
  - ✅ Arquivo .env.example com todas as opções
  - ✅ Documentação completa em API_SETUP.md
  - ✅ Suporte a 3 modos: mock, stormglass, worldtides
  - ✅ Cache configurável (padrão 60 min)
  - Build: 469KB (gzip: 146KB)
- **v0.5.0** (2025-10-17): Calendário Lunar Implementado
  - Serviço moonService.ts com cálculos astronômicos precisos
  - Componente MoonPhase - exibe fase atual da lua com iluminação
  - Componente LunarCalendar - próximas 8 fases da lua
  - Indicador de marés de sizígia (lua cheia/nova)
  - Previsão de próxima lua cheia e lua nova
  - Explicação da influência lunar nas marés
  - Build: 466KB (gzip: 145KB)
- **v0.4.0** (2025-10-17): Fase 3 concluída - SEO e Otimização para Motores de Busca
  - Meta tags dinâmicas por cidade (Title, Description, Open Graph, Twitter Cards)
  - Sitemap.xml com todas as 22 cidades
  - Robots.txt otimizado para crawlers
  - Schema.org JSON-LD para rich snippets
  - Componente CityContent com FAQ e dicas úteis
  - Geo tags para cada cidade
  - Build: 460KB (gzip: 143KB)
- **v0.3.0** (2025-10-17): Fase 2 concluída - Sistema completo de marés com previsão de 7 dias
  - Serviço de marés com cache em memória (60min TTL)
  - Hook customizado useTideData()
  - Loading states com skeleton screens
  - Componente de previsão semanal (accordion)
  - Dados mockados inteligentes que variam por localização
  - Estrutura pronta para APIs reais (Stormglass/WorldTides)
- **v0.2.0** (2025-10-17): Fase 1 concluída - Sistema de rotas dinâmicas para 22 cidades
- **v0.1.0** (2025-10-17): Estrutura inicial do projeto
