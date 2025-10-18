# 🌊 Tábua de Marés Brasil

Aplicação web moderna para consultar tábua de marés de 22 cidades costeiras brasileiras com calendário lunar e monetização via Google AdSense.

![Version](https://img.shields.io/badge/version-0.6.0-blue)
![Build](https://img.shields.io/badge/build-passing-brightgreen)
![License](https://img.shields.io/badge/license-MIT-green)

## ✨ Funcionalidades

### 🌊 Dados de Marés
- ✅ **22 cidades costeiras** (Norte, Nordeste, Sudeste, Sul)
- ✅ **Tábua de marés do dia** (4 eventos: 2 altas + 2 baixas)
- ✅ **Previsão de 7 dias** (accordion expansível)
- ✅ **APIs reais suportadas:**
  - Stormglass.io (50 requests/dia grátis)
  - WorldTides ($0.01/request)
  - Dados mockados (fallback automático)

### 🌙 Calendário Lunar
- ✅ **Fase atual da lua** com iluminação e emoji
- ✅ **Próximas 8 fases** da lua
- ✅ **Indicador de marés de sizígia** (lua cheia/nova)
- ✅ **Influência lunar nas marés** explicada

### 🔍 SEO Otimizado
- ✅ **Meta tags dinâmicas** por cidade
- ✅ **Open Graph** e Twitter Cards
- ✅ **Sitemap.xml** com 22 cidades
- ✅ **Schema.org JSON-LD** para rich snippets
- ✅ **Conteúdo SEO** (FAQ, dicas de pesca/surf)

### 🎨 UI/UX
- ✅ **Design responsivo** (mobile-first)
- ✅ **Loading states** com skeleton screens
- ✅ **Sistema de cache** (60 min padrão)
- ✅ **Formatação em português** (date-fns)

## 🚀 Começando

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone <YOUR_GIT_URL>

# Entre no diretório
cd adsense_tabuade_mares

# Instale as dependências
npm install

# Copie o arquivo de exemplo
cp .env.example .env
```

### Configuração

Edite o arquivo `.env`:

```env
# Para usar dados mockados (padrão)
VITE_TIDE_PROVIDER=mock

# Para usar API real (ver API_SETUP.md)
VITE_TIDE_PROVIDER=stormglass
VITE_STORMGLASS_API_KEY=sua-api-key-aqui
VITE_CACHE_DURATION=120
```

📖 **Guia completo:** [API_SETUP.md](./API_SETUP.md)

### Rodando o projeto

```bash
# Desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## 📦 Stack Tecnológica

- **Frontend:** React 18 + TypeScript
- **Build:** Vite 5
- **UI:** shadcn/ui (Radix UI)
- **Styling:** Tailwind CSS
- **Routing:** React Router v6
- **Data:** date-fns, React Query
- **APIs:** Stormglass.io, WorldTides

## 🌍 Cidades Cobertas

### Norte (3)
- Belém/PA, Macapá/AP, Salinópolis/PA

### Nordeste (9)
- São Luís/MA, Fortaleza/CE, Natal/RN, João Pessoa/PB, Recife/PE, Maceió/AL, Aracaju/SE, Salvador/BA, Ilhéus/BA

### Sudeste (6)
- Vitória/ES, Rio de Janeiro/RJ, Angra dos Reis/RJ, Santos/SP, Guarujá/SP, Ubatuba/SP

### Sul (4)
- Paranaguá/PR, Florianópolis/SC, Balneário Camboriú/SC, Tramandaí/RS, Torres/RS

## 📊 Performance

- **Bundle size:** 469KB (gzip: 146KB)
- **Cache TTL:** 60-120 min (configurável)
- **API requests:** ~10-15/dia (com cache)

## 🗺️ Roadmap

- [x] Sistema de rotas dinâmicas
- [x] Dados de marés (mock + APIs reais)
- [x] Calendário lunar
- [x] SEO completo
- [ ] Google AdSense
- [ ] Google Analytics
- [ ] Gráficos de altura das marés
- [ ] PWA / Service Worker

Ver [ROADMAP.md](./ROADMAP.md) completo.

## 📄 Documentação

- [API_SETUP.md](./API_SETUP.md) - Configurar APIs de marés
- [ROADMAP.md](./ROADMAP.md) - Planejamento completo

## 🚀 Deploy

### Via Lovable

Abra o [Lovable Project](https://lovable.dev/projects/912d94fd-3752-49fe-9b13-ce1f655661de) e clique em Share → Publish.

### Via Vercel/Netlify

Configure as variáveis de ambiente no dashboard e faça deploy do repositório.

## 🤝 Contribuindo

Contribuições são bem-vindas! Abra uma issue ou pull request.

## 📝 Licença

MIT

## 🙏 Agradecimentos

- [Stormglass.io](https://stormglass.io/) - API de marés gratuita
- [WorldTides](https://www.worldtides.info/) - API de marés precisa
- [shadcn/ui](https://ui.shadcn.com/) - Componentes React lindos

---

**Desenvolvido com ❤️ para a comunidade náutica brasileira 🇧🇷**
