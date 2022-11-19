export function funcao(
  this: Date,
  argumento1: string,
  argumento2: string,
): void {
  console.log(this);
  console.log(argumento1);
  console.log(argumento2);
}

funcao.call(new Date(), 'Pedro', 'Henrique');
funcao.apply(new Date(), ['Pedro', 'Henrique']);
