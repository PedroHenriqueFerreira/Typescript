/* eslint-disable @typescript-eslint/no-namespace */
namespace MeuNamespace {
  export const nome = 'Pedro';

  export class Pessoa {
    constructor(public nome: string) {}
  }

  export namespace OutroNamespace {
    export const nome = 'Joao';
  }
}

const pessoaNamespace = new MeuNamespace.Pessoa('Carlos');
console.log(pessoaNamespace);
console.log(MeuNamespace.OutroNamespace.nome);
