type Constructor = {
  new (...args: any[]): any;
};

function inverteNomeECor(param1: string, param2: string) {
  return function (target: Constructor) { // eslint-disable-line
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

function outroDecorator(param: string) {
  return function (target: Constructor) {
    console.log(`Sou outro decorador e recebi: ${param}`);
    return target;
  };
}

@outroDecorator('parametro')
@inverteNomeECor('valor1', 'valor2')
export class Animal {
  constructor(public nome: string, public cor: string) {
    console.log('Sou a classe');
  }
}

const animal = new Animal('Urso polar', 'branco');
console.log(animal);
