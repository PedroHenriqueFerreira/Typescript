type Veiculo = {
  marca: string;
  ano: number;
};

type Car = {
  brand: Veiculo['marca'];
  year: Veiculo['ano'];
};

const carro: Car = {
  brand: 'Ford',
  year: 2022,
};

console.log(carro);
