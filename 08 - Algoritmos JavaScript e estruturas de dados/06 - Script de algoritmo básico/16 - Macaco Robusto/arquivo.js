function chunkArrayInGroups(arr, size) {
    // Inicializa um array para armazenar os grupos
    let result = [];

    // Itera sobre o array original com passos de tamanho 'size'
    for (let i = 0; i < arr.length; i += size) {
        // Cria um subarray de tamanho 'size' e o adiciona ao resultado
        result.push(arr.slice(i, i + size));
    }

    // Retorna o array bidimensional
    return result;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
// Exemplo: imprime [["a", "b"], ["c", "d"]]