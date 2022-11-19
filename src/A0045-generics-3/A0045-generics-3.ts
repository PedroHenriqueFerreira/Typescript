interface PessoaProtocolo<T = string, U = number> {
  nome: T;
  sobrenome: T;
  idade: U;
}

type PessoaProtocolo2<T = string, U = number> = {
  nome: T;
  sobrenome: T;
  idade: U;
};

const aluno1: PessoaProtocolo = {
  nome: 'Pedro',
  sobrenome: 'Ferreira',
  idade: 15,
};

const aluno2: PessoaProtocolo2 = {
  nome: 'Pedro',
  sobrenome: 'Ferreira',
  idade: 15,
};

const aluno3: PessoaProtocolo<string, string> = {
  nome: 'Pedro',
  sobrenome: 'Ferreira',
  idade: '15 anos',
};

console.log(aluno1);
console.log(aluno2);
console.log(aluno3);
