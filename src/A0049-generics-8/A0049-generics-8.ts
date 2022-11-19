// Record
const obj: Record<string, string | number> = {
  nome: 'Pedro',
  idade: 15,
};

console.log(obj);

type PessoaProtocol = {
  nome?: string;
  sobrenome?: string;
  idade?: number;
};

// Required
type PessoaRequired = Required<PessoaProtocol>;

// Partial
type PessoaPartial = Partial<PessoaRequired>; // eslint-disable-line

// Readonly
type PessoaReadOnly = Readonly<PessoaRequired>; // eslint-disable-line

// Pick
type PessoaPick = Pick<PessoaRequired, 'nome' | 'sobrenome'>; // eslint-disable-line

// Extract e Exclude
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';

type TipoExtract = Extract<ABC, CDE>; // eslint-disable-line
type TipoExclude = Exclude<ABC, CDE>; // eslint-disable-line

// Exemplos
type Account = {
  _id: string;
  nome: string;
  sobrenome: string;
};

type AccountAPI = Pick<Account, Exclude<keyof Account, '_id'>> & { id: string }; // eslint-disable-line
