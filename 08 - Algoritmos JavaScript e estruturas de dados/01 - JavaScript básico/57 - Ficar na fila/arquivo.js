function nextInLine(arr, item) {
    // Adiciona o número ao final do array
    arr.push(item);
    // Remove o primeiro elemento do array e armazena em uma variável
    const removedElement = arr.shift();
    // Retorna o elemento removido
    return removedElement;
}

// Exemplos de uso
console.log(nextInLine([], 5));             // Deve retornar um número
console.log(nextInLine([], 1));             // Deve retornar 1
console.log(nextInLine([2], 1));            // Deve retornar 2
console.log(nextInLine([5, 6, 7, 8, 9], 1)); // Deve retornar 5

// Teste adicional para verificar se o elemento no índice 4 foi alterado
let testArr = [1, 2, 3, 4, 5];
nextInLine(testArr, 10);
console.log(testArr[4]); // Deve retornar 10