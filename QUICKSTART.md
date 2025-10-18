# ⚡ Quick Start - Testar API em 5 Minutos

## 🎯 Objetivo
Configurar e testar dados REAIS de marés do Stormglass em 5 minutos.

---

## 📝 Passo a Passo

### 1. Criar Conta Stormglass (2 min)

```
1. Acesse: https://stormglass.io/
2. Clique em "Sign Up" (cadastro grátis)
3. Preencha: email, senha, nome
4. Confirme seu email
5. Faça login
```

### 2. Copiar API Key (30 seg)

```
1. No dashboard, clique em "API" (menu lateral)
2. Copie sua API Key (ex: a1b2c3d4-...)
3. Guarde com segurança!
```

### 3. Testar API Key (1 min)

```bash
# Execute o script de teste
node test-api.js stormglass COLE_SUA_KEY_AQUI

# Deve mostrar:
# ✅ Resposta recebida com sucesso!
# 📊 Dados de marés: 8 eventos
# 📅 Primeiros 3 eventos...
```

### 4. Configurar Projeto (1 min)

```bash
# Copie o template
cp .env.example .env

# Edite o .env (use nano, vim ou VSCode)
nano .env
```

**Cole no .env:**
```env
VITE_TIDE_PROVIDER=stormglass
VITE_STORMGLASS_API_KEY=SUA_KEY_AQUI
VITE_CACHE_DURATION=120
```

### 5. Rodar e Testar (30 seg)

```bash
# Rode o projeto
npm run dev

# Abra no navegador
# http://localhost:5173

# Abra o Console (F12)
# Procure por: "✅ Usando Stormglass API"
```

---

## ✅ Pronto!

Agora você tem **dados REAIS de marés** no seu projeto! 🎉

**Próximos passos:**
- Compare com sites oficiais de marés
- Ajuste o cache se necessário
- Configure AdSense
- Faça deploy em produção

---

## 🆘 Problemas?

### API Key não funciona?
```bash
# Teste direto
node test-api.js stormglass SUA_KEY

# Deve retornar dados de marés
```

### Projeto não carrega dados?
```bash
# 1. Veja o console (F12)
# 2. Procure erros em vermelho
# 3. Confirme que .env existe
# 4. Reinicie: Ctrl+C e npm run dev
```

### Ainda com problema?
- Ver: [COMO_TESTAR_API.md](./COMO_TESTAR_API.md) (guia completo)
- Ver: [API_SETUP.md](./API_SETUP.md) (documentação técnica)

---

**Tempo total: ~5 minutos** ⏱️

**Custo: $0** 💰

**Dados: 100% reais** ✅
