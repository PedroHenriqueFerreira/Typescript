// Tuple
const dadosCliente1: readonly [number, string] = [1, 'Luiz'];
const dadosCliente2: [number, string, string] = [1, 'Luiz', 'Miranda'];
const dadosCliente3: [number, string, string?] = [1, 'Luiz', 'Miranda'];
const dadosCliente4: [number, string, ...string[]] = [1, 'Luiz', 'Miranda'];

// dadosCliente1[0] = 100;
// dadosCliente1[1] = 'Joao';

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);

const array1: readonly string[] = ['Pedro', 'Ferreira'];
const array2: ReadonlyArray<string> = ['Pedro', 'Ferreira'];

console.log(array1);
console.log(array2);
