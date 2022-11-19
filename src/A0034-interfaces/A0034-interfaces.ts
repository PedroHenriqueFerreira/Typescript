interface TipoNome {
  nome: string;
}

interface TipoSobrenome {
  sobrenome: string;
}

interface TipoNomeCompleto {
  nomeCompleto: () => string;
}

type TipoPessoa = TipoNome & TipoSobrenome & TipoNomeCompleto;

interface TipoPessoa2 extends TipoNome, TipoSobrenome, TipoNomeCompleto {}

export class Pessoa implements TipoPessoa {
  constructor(public nome: string, public sobrenome: string) {}

  nomeCompleto(): string {
    return `${nome} ${this.sobrenome}`;
  }
}

const pessoa2: TipoPessoa2 = {
  nome: 'Pedro',
  sobrenome: 'Ferreira',
  nomeCompleto() {
    return this.nome + ' ' + this.sobrenome;
  },
};

const pessoa = new Pessoa('Luiz', 'Miranda');
console.log(pessoa.nomeCompleto());
console.log(pessoa2.nomeCompleto());
