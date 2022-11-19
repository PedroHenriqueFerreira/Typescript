enum Cores {
  VERMELHO, // 0
  AZUL, // 1
  AMARELO, // 2
}

enum Cores {
  ROXO = 'ROXO', // 100
  VERDE = 201, // 200
  ROSA, // 150
}

export function escolhaACor(cor: Cores): void {
  console.log(Cores[cor]);
}

escolhaACor(1);
