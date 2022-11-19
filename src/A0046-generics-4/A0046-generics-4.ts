type obterChaveFn = <O, K extends keyof O>(objeto: O, chave: K) => O[K];

const obterChave: obterChaveFn = (objeto, chave) => objeto[chave];

const animal = {
  idade: 3,
  especie: 'Elefante',
};

obterChave(animal, 'especie');
