const faturamentoDiario = [100, 200, 300, 400, 0, 0, 500, 600, 700, 800, 900, 1000, 1100, 1200, 1300, 1400, 1500, 
  1600, 1700, 1800, 1900, 2000, 2100, 2200, 2300, 2400, 2500, 2600, 2700, 2800, 2900];

const menorFaturamento = Math.min(...faturamentoDiario);
console.log(`Menor valor de faturamento diário: ${menorFaturamento}`);

const maiorFaturamento = Math.max(...faturamentoDiario);
console.log(`Maior valor de faturamento diário: ${maiorFaturamento}`);

const faturamentoTotal = faturamentoDiario.reduce((acc, cur) => acc + cur, 0);
const diasComFaturamento = faturamentoDiario.filter((valor) => valor > 0).length;
const mediaMensal = faturamentoTotal / diasComFaturamento;
console.log(`Média mensal de faturamento diário: ${mediaMensal}`);

const diasAcimaDaMedia = faturamentoDiario.filter((valor) => valor > mediaMensal).length;
console.log(`Número de dias em que o faturamento diário foi superior à média mensal: ${diasAcimaDaMedia}`);

