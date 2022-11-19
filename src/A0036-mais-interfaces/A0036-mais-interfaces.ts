interface Pessoa {
  readonly sobrenome: string;
}

interface Pessoa {
  readonly endereco: string[];
}

interface Pessoa {
  idade?: number;
}

export const pessoa: Pessoa = {
  sobrenome: 'Ferreira',
  idade: 15,
  endereco: ['Av', 'Paulista'],
};

console.log(pessoa);
