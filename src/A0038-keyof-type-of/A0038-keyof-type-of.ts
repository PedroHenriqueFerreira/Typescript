type CoresObj = typeof coresObj;
type CoresChaves = keyof CoresObj;

const coresObj = {
  vemelho: 'red',
  verde: 'green',
  azul: 'blue',
};

function traduzCor(cor: CoresChaves, cores: CoresObj) {
  return cores[cor];
}

console.log(traduzCor('vemelho', coresObj));
