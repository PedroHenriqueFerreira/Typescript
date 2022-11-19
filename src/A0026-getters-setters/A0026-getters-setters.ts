export class Pessoa {
  constructor(
    private nome: string,
    private sobrenome: string,
    private idade: number,
    private _cpf: string,
  ) {}

  set cpf(cpf: string) {
    console.log('SETTER CHAMADO');
    this._cpf = cpf;
  }

  get cpf(): string {
    console.log('GETTER CHAMADO');
    return this._cpf.replace(/\D/g, '');
  }
}

const pessoa = new Pessoa('Pedro', 'Henrique', 17, '000.000.000-00');
pessoa.cpf = '000.000.000-00';
console.log(pessoa.cpf);
