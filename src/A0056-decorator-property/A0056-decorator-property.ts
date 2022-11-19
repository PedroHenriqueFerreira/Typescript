function decorador(classPrototype: any, nome: string | symbol): any { // eslint-disable-line
  let valorPropriedade: any; // eslint-disable-line

  return {
    get: () => valorPropriedade,
    set: (valor: any) => { // eslint-disable-line
      if (typeof valor === 'string') {
        valorPropriedade = valor.split('').reverse().join('');
        return;
      }

      valorPropriedade = valor;
    },
  };
}

export class UmaPessoa {
  @decorador
  nome: string;
  sobrenome: string;
  idade: number;

  constructor(nome: string, sobrenome: string, idade: number) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }

  metodo(msg: string): string {
    return `${this.nome} ${this.sobrenome}: ${msg}`;
  }

  get nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }

  set nomeCompleto(valor: string) {
    const palavras = valor.split(/\s+/g);
    const primeiroNome = palavras.shift();
    if (!primeiroNome) return;
    this.nome = primeiroNome;
    this.sobrenome = palavras.join(' ');
  }
}

const pessoa = new UmaPessoa('Luiz', 'Otávio', 30);
const metodo = pessoa.metodo('Olá mundo!');
console.log(metodo);
