function dropElements(arr, func) {
    // Enquanto o array não estiver vazio e a função não retornar true para o primeiro elemento
    while (arr.length > 0 && !func(arr[0])) {
        // Remover o primeiro elemento do array
        arr.shift();
    }

    return arr;
}

// Exemplo de uso
console.log(dropElements([1, 2, 3], function (n) { return n < 3; }));
// Deve retornar [1, 2, 3]