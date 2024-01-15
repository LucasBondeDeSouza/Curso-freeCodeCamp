function getIndexToIns(arr, num) {
    // Ordena a matriz em ordem crescente
    arr.sort((a, b) => a - b);

    // Itera pelos elementos da matriz para encontrar o índice adequado
    let index = 0;
    while (index < arr.length && arr[index] < num) {
        index++;
    }

    // Retorna o índice encontrado
    return index;
}

console.log(getIndexToIns([40, 60], 50));
// Exemplo: imprime 1 (50 seria inserido no índice 1 para manter a ordem crescente)