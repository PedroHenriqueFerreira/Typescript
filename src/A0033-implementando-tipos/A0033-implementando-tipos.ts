type TipoNome = {
  nome: string;
};

type TipoPessoa = {
  sobrenome: string;
  nomeCompleto: () => string;
};

export class Pessoa implements TipoNome, TipoPessoa {
  constructor(public nome: string, public sobrenome: string) {}

  nomeCompleto(): string {
    return `${nome} ${this.sobrenome}`;
  }
}

const pessoa = new Pessoa('Luiz', 'Miranda');
console.log(pessoa.nomeCompleto());
