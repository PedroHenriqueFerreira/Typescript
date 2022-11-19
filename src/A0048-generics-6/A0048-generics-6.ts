export function unirObjetos<T, U>(obj1: T, obj2: U): T & U {
  return Object.assign({}, obj1, obj2);
}

const uniao = unirObjetos({ chave1: 'valor1' }, { chave2: 'valor2' });

console.log(uniao);
