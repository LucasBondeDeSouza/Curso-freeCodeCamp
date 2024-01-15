function largestOfFour(arr) {
    // Inicializa uma matriz para armazenar os maiores números de cada submatriz
    let maioresNumeros = [];

    // Itera sobre cada submatriz
    for (let i = 0; i < arr.length; i++) {
        // Inicializa o maior número com o primeiro elemento da submatriz
        let maiorNumero = arr[i][0];

        // Itera sobre os elementos da submatriz para encontrar o maior número
        for (let j = 1; j < arr[i].length; j++) {
            if (arr[i][j] > maiorNumero) {
                maiorNumero = arr[i][j];
            }
        }

        // Adiciona o maior número à matriz maioresNumeros
        maioresNumeros.push(maiorNumero);
    }

    // Retorna a matriz maioresNumeros
    return maioresNumeros;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
// Exemplo: imprime [5, 27, 39, 1001]