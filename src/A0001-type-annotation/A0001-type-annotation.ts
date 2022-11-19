/* eslint-disable */
//Tipos basicos (ocorre inferêcia de tipos)
let nome: string = 'Luiz';
let idade: number = 0b1010;
let adulto: boolean = true;
let simbolo: symbol = Symbol('Um-simbolo');
// let big: bigint = 10n;

// Arrays
let arrayNumeros: Array<number> = [1, 2, 3];
let arrayNumeros2: number[] = [1, 2, 3];

let arrayLetras: Array<string> = ['1', '2', '3'];
let arrayLetras2: string[] = ['1', '2', '3'];

// Objetos

let pessoa: {nome: string, idade: number, adulto?: boolean} = {
  idade: 13,
  nome: 'Pedro',
};

// Funções
function soma(x: number, y: number) {
  return x + y;
}

const soma2: (x: number, y: number) => number = (x, y) => x + y;
