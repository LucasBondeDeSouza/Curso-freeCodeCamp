function uniteUnique(...arrays) {
    // Combina todos os arrays em um único array
    const combinedArray = [].concat(...arrays);

    // Use um conjunto para garantir valores únicos e preservar a ordem
    const uniqueSet = new Set(combinedArray);

    // Converta o conjunto de volta para um array
    const uniqueArray = Array.from(uniqueSet);

    return uniqueArray;
}

// Exemplo de uso
console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
// Deve retornar [1, 3, 2, 5, 4]