let x = 10; // eslint-disable-line
x = 0b1010; // eslint-disable-line
const y = 10; // eslint-disable-line
let a = 100; // eslint-disable-line

const pessoa = {
  nome: 'Pedro' as const,
  sobrenome: 'Ferreira',
};

function escolhaCor(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string {
  return cor;
}

console.log(escolhaCor('Vermelho'));

// Module mode
export default 1;
