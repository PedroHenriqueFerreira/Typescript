function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'Pedro',
  sobrenome: 'Ferreira',

  exibirNome(): void {
    console.log(this.nome);
  },
};

semRetorno('Pedro', 'Henrique', 'Ferreira');
pessoa.exibirNome();

export { pessoa };
