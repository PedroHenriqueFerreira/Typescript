type FilterCallback<U> = (value: U, index?: number, array?: U[]) => boolean;

export function myFilter<T>(array: T[], callbackFun: FilterCallback<T>): T[] {
  const novoArray: T[] = [];

  for (let i = 0; i < array.length; i++) {
    if (callbackFun(array[i])) {
      novoArray.push(array[i]);
    }
  }

  return novoArray;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arrayFiltradoOriginal = array.filter((value) => value < 5);
console.log(arrayFiltradoOriginal);

const arrayFiltrado = myFilter(array, (value) => value < 5);
console.log(arrayFiltrado);
