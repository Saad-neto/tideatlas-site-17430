# 🌊 Configuração de APIs de Marés

Este guia explica como configurar APIs reais de marés no projeto.

## 📋 Visão Geral

O projeto suporta 3 modos de operação:

1. **Mock** (padrão) - Dados simulados, sem necessidade de API key
2. **Stormglass** - API gratuita (50 requests/dia)
3. **WorldTides** - API paga ($0.01/request, muito preciso)

## 🚀 Configuração Inicial

### 1. Copie o arquivo de exemplo

```bash
cp .env.example .env
```

### 2. Edite o arquivo `.env`

Abra o arquivo `.env` e configure conforme necessário.

---

## 🆓 Opção 1: Usar Dados Mockados (Padrão)

**Custo:** Gratuito
**Precisão:** Baixa (dados simulados)
**Limite:** Ilimitado

### Configuração:

```env
VITE_TIDE_PROVIDER=mock
VITE_CACHE_DURATION=60
```

✅ **Pronto!** Não precisa de API key, funciona imediatamente.

---

## 🌩️ Opção 2: Stormglass.io (Recomendado)

**Custo:** Gratuito (50 requests/dia)
**Precisão:** Alta
**Limite:** 50 requests/dia no plano gratuito

### Passo a Passo:

#### 1. Crie uma conta gratuita

Acesse: https://stormglass.io/

#### 2. Obtenha sua API Key

1. Faça login no dashboard
2. Vá em **API Settings**
3. Copie sua API Key

#### 3. Configure o `.env`

```env
VITE_TIDE_PROVIDER=stormglass
VITE_STORMGLASS_API_KEY=sua-api-key-aqui
VITE_CACHE_DURATION=120
```

**⚠️ Importante:**
- Com 22 cidades e cache de 120 minutos, você fará ~12-15 requests/dia
- Fica bem dentro do limite gratuito de 50/dia
- Aumente `VITE_CACHE_DURATION` para economizar requests

#### 4. Teste

```bash
npm run dev
```

Abra qualquer cidade e veja os dados reais de marés!

---

## 🌍 Opção 3: WorldTides

**Custo:** $0.01 por request
**Precisão:** Muito alta
**Limite:** Depende do crédito

### Passo a Passo:

#### 1. Crie uma conta

Acesse: https://www.worldtides.info/

#### 2. Adicione créditos

- Mínimo: $5
- Cada request custa $0.01
- Com cache de 120 min e 22 cidades: ~$0.10-0.15/dia

#### 3. Obtenha sua API Key

1. Dashboard → API Key
2. Copie a chave

#### 4. Configure o `.env`

```env
VITE_TIDE_PROVIDER=worldtides
VITE_WORLDTIDES_API_KEY=sua-api-key-aqui
VITE_CACHE_DURATION=120
```

#### 5. Teste

```bash
npm run dev
```

---

## 🔄 Sistema de Fallback

**Tranquilidade garantida!**

Se a API falhar (quota excedida, erro de rede, etc), o sistema **automaticamente** retorna aos dados mockados. Você verá:

```
⚠️ Stormglass API error: 429 Too Many Requests
ℹ️ Usando dados mockados como fallback
```

O site **nunca fica fora do ar** por problemas de API!

---

## 💾 Sistema de Cache

Para economizar requests e melhorar performance:

- **Padrão:** 60 minutos
- **Recomendado:** 120 minutos (2 horas)
- **Máximo:** Você decide!

Marés mudam lentamente, então cache de 2-4 horas é perfeitamente aceitável.

```env
VITE_CACHE_DURATION=120  # 2 horas
```

---

## 📊 Comparação de APIs

| Característica | Mock | Stormglass | WorldTides |
|---------------|------|------------|------------|
| **Custo** | Grátis | Grátis | $0.01/req |
| **Precisão** | Baixa | Alta | Muito alta |
| **Limite/dia** | ∞ | 50 | Depende do crédito |
| **Setup** | Nenhum | Conta grátis | Conta + crédito |
| **API Key** | Não | Sim | Sim |
| **Cobertura** | Global | Global | Global |

---

## 🛡️ Segurança

### ⚠️ NUNCA commite o arquivo `.env`!

O arquivo `.env` está no `.gitignore` e **não deve** ser versionado.

**✅ Certo:**
```bash
git add .env.example  # OK!
```

**❌ Errado:**
```bash
git add .env  # NUNCA!
```

### Em produção (Vercel/Netlify)

Configure as variáveis de ambiente no dashboard:

**Vercel:**
- Settings → Environment Variables
- Adicione cada variável (VITE_TIDE_PROVIDER, VITE_STORMGLASS_API_KEY, etc)

**Netlify:**
- Site settings → Build & deploy → Environment
- Adicione as variáveis

---

## 🧪 Testando

### Testar localmente

```bash
# Instalar dependências
npm install

# Rodar em dev
npm run dev

# Build para produção
npm run build
```

### Verificar qual API está sendo usada

Abra o console do navegador (F12) e procure por:

```
✅ Usando Stormglass API
✅ Cache HIT: joao-pessoa-pb-7
```

ou

```
⚠️ Usando dados mockados
```

---

## 🆘 Problemas Comuns

### "API key não configurada"

**Solução:** Verifique se:
1. O arquivo `.env` existe na raiz do projeto
2. A variável `VITE_STORMGLASS_API_KEY` está preenchida
3. Você reiniciou o servidor (`npm run dev`)

### "429 Too Many Requests"

**Solução:**
- Você excedeu o limite de 50 requests/dia do Stormglass
- Aumente o `VITE_CACHE_DURATION` para 240 (4 horas)
- Ou espere até amanhã (quota reseta às 00:00 UTC)
- O sistema automaticamente usa dados mockados como fallback

### "Dados não aparecem"

**Solução:**
1. Verifique o console do navegador (F12)
2. Veja se há erros de CORS ou rede
3. Teste com `VITE_TIDE_PROVIDER=mock` primeiro
4. Verifique se a API key está correta

---

## 📈 Recomendações para Produção

### Configuração Ideal

```env
VITE_TIDE_PROVIDER=stormglass
VITE_STORMGLASS_API_KEY=sua-chave-aqui
VITE_CACHE_DURATION=180  # 3 horas
```

### Custos Estimados

**Com Stormglass (gratuito):**
- 22 cidades
- Cache de 3 horas
- ~10-15 requests/dia
- **Custo: $0/mês** ✅

**Com WorldTides ($0.01/req):**
- 22 cidades
- Cache de 3 horas
- ~12 requests/dia
- **Custo: ~$3.60/mês** 💰

### Monitoramento

Configure alertas para:
- Quota da API (90% do limite)
- Erros de API (> 5% de fallback)
- Performance do cache

---

## 🎯 Próximos Passos

Depois de configurar a API:

1. ✅ Testar todas as 22 cidades
2. ✅ Verificar precisão dos dados
3. ✅ Monitorar uso da quota
4. ✅ Fazer deploy em produção
5. ✅ Configurar Google Analytics
6. ✅ Adicionar Google AdSense

---

## 📞 Suporte

Problemas? Abra uma issue no GitHub ou consulte:

- **Stormglass Docs:** https://docs.stormglass.io/
- **WorldTides Docs:** https://www.worldtides.info/apidocs
- **Vite Env Vars:** https://vitejs.dev/guide/env-and-mode

---

**Boa sorte com seu projeto de Tábua de Marés! 🌊**
