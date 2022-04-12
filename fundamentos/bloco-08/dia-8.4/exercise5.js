const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  return names.reduce((acc, current) => {
    const ocorrencias = (current.match(/a/g) || []).length;
    const ocorrencias2 = (current.match(/A/g) || []).length;

    return acc += ocorrencias2 + ocorrencias;
  }, 0)
}

console.log (containsA());