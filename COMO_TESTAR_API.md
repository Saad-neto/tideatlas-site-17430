# 🧪 Como Testar a API de Marés - Guia Prático

## 📋 Passo a Passo Completo

### 1️⃣ Criar Conta no Stormglass (GRÁTIS)

1. **Acesse:** https://stormglass.io/
2. **Clique em:** "Get Started" ou "Sign Up"
3. **Preencha:**
   - Email
   - Senha
   - Nome
4. **Confirme seu email** (verifique a caixa de entrada)
5. **Faça login** no dashboard

### 2️⃣ Obter sua API Key

1. **No dashboard**, clique em **"API"** no menu lateral
2. **Copie sua API Key** (começa com algo como `a1b2c3d4-...`)
3. **⚠️ IMPORTANTE:** Nunca compartilhe sua API key!

### 3️⃣ Testar a API Key (antes de usar no projeto)

Execute o script de teste:

```bash
# Testa Stormglass
node test-api.js stormglass SUA_API_KEY_AQUI

# Testa WorldTides (se tiver)
node test-api.js worldtides SUA_API_KEY_AQUI
```

**Saída esperada:**
```
🧪 Testando STORMGLASS API...

📍 Testando: https://api.stormglass.io/v2/tide/extremes/point?lat=-7.1195&lng=-34...
🔑 API Key: a1b2c3d4e5...

✅ Resposta recebida com sucesso!

📊 Dados de marés:
   Total de eventos: 8

📅 Primeiros 3 eventos:
   1. 🔵 Alta - 17/10/2025, 04:30:00 - 2.45m
   2. 🔴 Baixa - 17/10/2025, 10:52:00 - 0.38m
   3. 🔵 Alta - 17/10/2025, 17:14:00 - 2.31m

✨ Teste concluído com sucesso!
💡 Sua API key está funcionando corretamente.

🚀 Próximo passo: Configure o .env do projeto:
   VITE_TIDE_PROVIDER=stormglass
   VITE_STORMGLASS_API_KEY=a1b2c3d4...
   VITE_CACHE_DURATION=120
```

### 4️⃣ Configurar o Projeto

Crie o arquivo `.env` na raiz do projeto:

```bash
cp .env.example .env
```

Edite o `.env` com sua API key:

```env
# Stormglass API (grátis - 50 requests/dia)
VITE_TIDE_PROVIDER=stormglass
VITE_STORMGLASS_API_KEY=SUA_API_KEY_AQUI
VITE_CACHE_DURATION=120
```

### 5️⃣ Rodar o Projeto

```bash
# Instalar dependências (se ainda não fez)
npm install

# Rodar em desenvolvimento
npm run dev
```

### 6️⃣ Verificar se Está Funcionando

1. **Abra o navegador:** http://localhost:5173
2. **Abra o DevTools:** F12 (ou Cmd+Option+I no Mac)
3. **Vá na aba Console**
4. **Procure por:**
   ```
   ✅ Usando Stormglass API
   ✅ Dados de marés recebidos
   ```

### 7️⃣ Ver os Dados Reais

1. **Navegue para qualquer cidade**, ex: `/tabuada-mares/joao-pessoa-pb`
2. **Veja os horários de marés** - agora são **DADOS REAIS**!
3. **Compare com:** https://tabuademares.com/ ou outro site de marés

---

## ⚠️ Problemas Comuns

### "429 Too Many Requests"

**Causa:** Você excedeu 50 requests/dia

**Soluções:**
1. Aumente o cache: `VITE_CACHE_DURATION=240` (4 horas)
2. Teste com menos cidades
3. Aguarde até amanhã (quota reseta 00:00 UTC)
4. O sistema vai automaticamente para dados mockados

### "401 Unauthorized"

**Causa:** API key inválida

**Soluções:**
1. Verifique se copiou a key correta
2. Confirme que a key está no `.env`
3. Reinicie o servidor (`npm run dev`)
4. Verifique se não há espaços extras na key

### "API key não configurada"

**Causa:** Variáveis de ambiente não carregadas

**Soluções:**
1. Verifique se o arquivo `.env` existe
2. Confirme que está na raiz do projeto
3. Verifique o nome: `VITE_STORMGLASS_API_KEY` (com VITE_)
4. Reinicie o servidor

### Dados não aparecem

**Soluções:**
1. Abra o Console (F12)
2. Veja se há erros
3. Verifique a aba Network → veja as requisições
4. Teste com `VITE_TIDE_PROVIDER=mock` primeiro

---

## 📊 Monitorar Uso da API

### Ver quantos requests você fez hoje

1. **Dashboard Stormglass:** https://stormglass.io/dashboard
2. **Seção "Usage"**
3. **Veja:** Requests hoje / Limite

### Dicas para economizar requests:

1. **Aumente o cache:**
   ```env
   VITE_CACHE_DURATION=180  # 3 horas
   ```

2. **Teste com dados mockados durante desenvolvimento:**
   ```env
   VITE_TIDE_PROVIDER=mock  # Só muda para stormglass em produção
   ```

3. **Use cache do navegador:**
   - O sistema já tem cache de 60min
   - Evite dar refresh constante

---

## 🚀 Deploy em Produção

### Vercel

1. **Vá em:** Settings → Environment Variables
2. **Adicione:**
   - `VITE_TIDE_PROVIDER` = `stormglass`
   - `VITE_STORMGLASS_API_KEY` = `sua-key`
   - `VITE_CACHE_DURATION` = `180`
3. **Redeploy**

### Netlify

1. **Vá em:** Site settings → Build & deploy → Environment
2. **Adicione as mesmas variáveis**
3. **Trigger deploy**

---

## 💰 Custos e Limites

### Stormglass (Plano Grátis)

- **Requests/dia:** 50
- **Custo:** $0
- **Com 22 cidades + cache 3h:** ~12 requests/dia ✅
- **Sobra:** 38 requests/dia

### Fazer upgrade?

Se precisar de mais requests:

| Plano | Requests/dia | Custo/mês |
|-------|--------------|-----------|
| Free | 50 | $0 |
| Starter | 1.000 | $9 |
| Pro | 10.000 | $49 |

**Para este projeto:** Free é suficiente! 🎉

---

## ✅ Checklist Final

- [ ] Conta Stormglass criada
- [ ] Email confirmado
- [ ] API key copiada
- [ ] Script `test-api.js` executado com sucesso
- [ ] Arquivo `.env` criado
- [ ] Servidor rodando (`npm run dev`)
- [ ] Console mostra "Usando Stormglass API"
- [ ] Dados reais aparecem no site
- [ ] Comparado com outros sites de marés (conferência)

---

## 🆘 Precisa de Ajuda?

1. **Veja os logs:**
   ```bash
   # Console do navegador (F12)
   # Veja erros em vermelho
   ```

2. **Teste a API diretamente:**
   ```bash
   node test-api.js stormglass SUA_KEY
   ```

3. **Documentação oficial:**
   - Stormglass: https://docs.stormglass.io/
   - Vite Env Vars: https://vitejs.dev/guide/env-and-mode

4. **Abra uma issue no GitHub**

---

**Boa sorte! 🌊 Agora você tem dados REAIS de marés!** 🎉
