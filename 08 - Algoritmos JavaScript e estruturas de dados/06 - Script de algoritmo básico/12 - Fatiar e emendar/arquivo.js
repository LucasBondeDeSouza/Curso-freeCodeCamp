function frankenSplice(arr1, arr2, n) {
    // Cria uma cópia do segundo array para não modificar o array original
    let arr2Copy = arr2.slice();

    // Insere os elementos do primeiro array no segundo array a partir da posição n
    for (let i = 0; i < arr1.length; i++) {
        arr2Copy.splice(n + i, 0, arr1[i]);
    }

    // Retorna o segundo array modificado
    return arr2Copy;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
// Exemplo: imprime [4, 1, 2, 3, 5, 6]