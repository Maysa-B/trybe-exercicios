// Exercício 1
export function calcAreaLosango(dMaior: number, dMenor: number): string {
  return `${(dMaior * dMenor) / 2}cm²`;
};

// Exercício 2
export function calcAreaTrapezio(B:number, b:number, h:number): string {
  return `${((b + B) * h) / 2}cm²`;
};

// Exercício 3
export function calcAreaCirculo(r:number): string {
  return `${3.24 * r * r}cm²`;
};