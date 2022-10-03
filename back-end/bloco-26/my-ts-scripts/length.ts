const convert = (valor: number, base: string, convertTo: string): string => {
  const values: any = {
    km: 1000,
    hm: 100,
    dam: 10,
    m: 1,
    dm: 0.1,
    cm: 0.01,
    mm: 0.001
  }

  const result: number = valor * values[base] * values[convertTo];

  return `${result}m`;
}

console.log(convert(2, 'm', 'mm'));
console.log(convert(45, 'dm', 'm'));
console.log(convert(87, 'm', 'dam'));

/* Resolução do gabarito
const units = ["km", "hm", "dam", "m", "dm", "cm", "mm"];

function convert(value: number, fromUnit: string, toUnit: string): number {
  const fromIndex = units.indexOf(fromUnit); // pegamos o index da unidade base no array
  const toIndex = units.indexOf(toUnit); // pegamos o index da unidade para a conversão
  const exponent = (toIndex - fromIndex); // calculamos o expoente a partir da diferença dos index

  return value * Math.pow(10, exponent);
}
*/