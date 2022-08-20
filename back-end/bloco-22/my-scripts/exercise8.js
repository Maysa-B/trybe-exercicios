const calculate = async (n1, n2, n3) => {
  const promise = new Promise((resolve, reject) => {
    if (typeof n1 !== "number"
      || typeof n2 !== "number"
      || typeof n3 !== "number"
    ) reject('Informe apenas números');

    const result = (n1 + n2) * n3;

    if (result < 50) reject('Valor muito baixo');

    resolve(`The result is ${result}`);
  })

  console.log(await promise)

  return promise;
}

calculate(23, 43, 4);