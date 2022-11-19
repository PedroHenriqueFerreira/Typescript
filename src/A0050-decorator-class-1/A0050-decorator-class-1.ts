@decorator
export class Animal {
  constructor(public nome: string, public cor: string) {}
}

function decorator<T extends new (...args: any[]) => any>(target: T): T { // eslint-disable-line
  return class extends target {
    nome: string;
    cor: string;

    constructor(...args: any[]) { // eslint-disable-line
      super(...args);
      this.nome = this.inverte(args[0]);
      this.cor = this.inverte(args[1]);
    }

    inverte(valor: string): string {
      return valor.split('').reverse().join('');
    }
  };
}

const animal = new Animal('Urso polar', 'branco');
console.log(animal);
