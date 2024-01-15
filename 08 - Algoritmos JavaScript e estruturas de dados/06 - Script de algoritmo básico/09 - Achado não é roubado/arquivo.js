function findElement(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        // Se o teste fornecido por func for verdadeiro, retorne o elemento
        if (func(arr[i])) {
            return arr[i];
        }
    }
    // Se nenhum elemento passar no teste, retorne undefined
    return undefined;
}

console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));
// Exemplo: imprime 2 (o primeiro número par no array)