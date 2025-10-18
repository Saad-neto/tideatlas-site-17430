#!/usr/bin/env node
/**
 * Script de teste para validar APIs de marés
 *
 * Uso:
 *   node test-api.js stormglass YOUR_API_KEY
 *   node test-api.js worldtides YOUR_API_KEY
 */

const https = require('https');

const args = process.argv.slice(2);
const provider = args[0] || 'stormglass';
const apiKey = args[1];

if (!apiKey) {
  console.error('❌ Erro: API key não fornecida');
  console.log('\n📖 Uso:');
  console.log('  node test-api.js stormglass YOUR_API_KEY');
  console.log('  node test-api.js worldtides YOUR_API_KEY');
  process.exit(1);
}

// Coordenadas de João Pessoa/PB para teste
const lat = -7.1195;
const lon = -34.8450;

console.log(`\n🧪 Testando ${provider.toUpperCase()} API...\n`);

function testStormglass() {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const end = new Date(now);
  end.setDate(end.getDate() + 2);

  const start = Math.floor(now.getTime() / 1000);
  const endTimestamp = Math.floor(end.getTime() / 1000);

  const url = `https://api.stormglass.io/v2/tide/extremes/point?lat=${lat}&lng=${lon}&start=${start}&end=${endTimestamp}`;

  console.log('📍 Testando:', url.substring(0, 80) + '...');
  console.log('🔑 API Key:', apiKey.substring(0, 10) + '...\n');

  const options = {
    headers: {
      'Authorization': apiKey
    }
  };

  https.get(url, options, (res) => {
    let data = '';

    res.on('data', (chunk) => {
      data += chunk;
    });

    res.on('end', () => {
      if (res.statusCode !== 200) {
        console.error(`❌ Erro HTTP: ${res.statusCode}`);
        console.error(data);
        process.exit(1);
      }

      const json = JSON.parse(data);

      console.log('✅ Resposta recebida com sucesso!\n');
      console.log('📊 Dados de marés:');
      console.log(`   Total de eventos: ${json.data?.length || 0}`);

      if (json.data && json.data.length > 0) {
        console.log('\n📅 Primeiros 3 eventos:');
        json.data.slice(0, 3).forEach((event, i) => {
          const time = new Date(event.time);
          console.log(`   ${i + 1}. ${event.type === 'high' ? '🔵 Alta' : '🔴 Baixa'} - ${time.toLocaleString('pt-BR')} - ${event.height.toFixed(2)}m`);
        });
      }

      console.log('\n✨ Teste concluído com sucesso!');
      console.log('💡 Sua API key está funcionando corretamente.\n');
      console.log('🚀 Próximo passo: Configure o .env do projeto:');
      console.log('   VITE_TIDE_PROVIDER=stormglass');
      console.log(`   VITE_STORMGLASS_API_KEY=${apiKey}`);
      console.log('   VITE_CACHE_DURATION=120\n');
    });
  }).on('error', (err) => {
    console.error('❌ Erro de rede:', err.message);
    process.exit(1);
  });
}

function testWorldTides() {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const start = Math.floor(now.getTime() / 1000);
  const length = 2 * 86400; // 2 dias

  const url = `https://www.worldtides.info/api/v3?extremes&lat=${lat}&lon=${lon}&start=${start}&length=${length}&key=${apiKey}`;

  console.log('📍 Testando:', url.substring(0, 80) + '...');
  console.log('🔑 API Key:', apiKey.substring(0, 10) + '...\n');

  https.get(url, (res) => {
    let data = '';

    res.on('data', (chunk) => {
      data += chunk;
    });

    res.on('end', () => {
      if (res.statusCode !== 200) {
        console.error(`❌ Erro HTTP: ${res.statusCode}`);
        console.error(data);
        process.exit(1);
      }

      const json = JSON.parse(data);

      if (json.status !== 200) {
        console.error(`❌ Erro da API: ${json.error || 'Unknown error'}`);
        process.exit(1);
      }

      console.log('✅ Resposta recebida com sucesso!\n');
      console.log('📊 Dados de marés:');
      console.log(`   Total de eventos: ${json.extremes?.length || 0}`);

      if (json.extremes && json.extremes.length > 0) {
        console.log('\n📅 Primeiros 3 eventos:');
        json.extremes.slice(0, 3).forEach((event, i) => {
          const time = new Date(event.dt * 1000);
          console.log(`   ${i + 1}. ${event.type === 'High' ? '🔵 Alta' : '🔴 Baixa'} - ${time.toLocaleString('pt-BR')} - ${event.height.toFixed(2)}m`);
        });
      }

      console.log('\n✨ Teste concluído com sucesso!');
      console.log('💡 Sua API key está funcionando corretamente.\n');
      console.log('🚀 Próximo passo: Configure o .env do projeto:');
      console.log('   VITE_TIDE_PROVIDER=worldtides');
      console.log(`   VITE_WORLDTIDES_API_KEY=${apiKey}`);
      console.log('   VITE_CACHE_DURATION=120\n');
    });
  }).on('error', (err) => {
    console.error('❌ Erro de rede:', err.message);
    process.exit(1);
  });
}

// Executa o teste
if (provider === 'stormglass') {
  testStormglass();
} else if (provider === 'worldtides') {
  testWorldTides();
} else {
  console.error(`❌ Provedor desconhecido: ${provider}`);
  console.log('   Use: stormglass ou worldtides');
  process.exit(1);
}
