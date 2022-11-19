function inverteNomeECor(param1: string, param2: string) {
  return function <T extends new (...args: any[]) => any>(target: T): T { // eslint-disable-line
    console.log('Sou decorator e recebi: ', target);

    return class extends target {
      nome: string;
      cor: string;

      constructor(...args: any[]) { // eslint-disable-line
        super(...args);
        this.nome = this.inverte(args[0]);
        this.cor = this.inverte(args[1]);
      }

      inverte(valor: string): string {
        return valor.split('').reverse().join('') + ` ${param1} ${param2}`;
      }
    };
  };
}

@inverteNomeECor('valor1', 'valor2')
export class Animal {
  constructor(public nome: string, public cor: string) {
    console.log('Sou a classe');
  }
}

const animal = new Animal('Urso polar', 'branco');
console.log(animal);
