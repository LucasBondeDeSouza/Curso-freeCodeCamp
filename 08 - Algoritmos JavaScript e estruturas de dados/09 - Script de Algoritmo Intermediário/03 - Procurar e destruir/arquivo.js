function destroyer(arr, ...args) {
    // Usar filter para criar uma nova matriz com elementos que não estão nos argumentos
    const newArr = arr.filter(element => !args.includes(element));

    return newArr;
}

// Exemplo de uso
console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)); // Deve retornar [1, 1]