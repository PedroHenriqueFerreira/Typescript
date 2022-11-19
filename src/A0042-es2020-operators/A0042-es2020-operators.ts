// Encadeamento opcional e operador de coalescência nula
type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
};

const documento: Documento = {
  titulo: 'O titulo',
  texto: 'O texto',
  // data: new Date(),
};

console.log(documento.data?.toDateString());
console.log(undefined ?? 'undefined - Não existe nada');
console.log(null ?? 'null - Não existe nada');
console.log(false ?? 'false - Não existe nada');
console.log(0 ?? '0 - Não existe nada');
console.log('' ?? '"" - Não existe nada');
