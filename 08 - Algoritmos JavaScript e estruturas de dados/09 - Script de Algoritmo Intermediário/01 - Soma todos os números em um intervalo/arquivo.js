function sumAll(arr) {
    // Encontrar o menor e o maior número na matriz
    var min = Math.min(arr[0], arr[1]);
    var max = Math.max(arr[0], arr[1]);

    // Inicializar a variável para armazenar a soma
    var sum = 0;

    // Calcular a soma de todos os números no intervalo
    for (var i = min; i <= max; i++) {
        sum += i;
    }

    // Retornar a soma
    return sum;
}

// Exemplo de uso
console.log(sumAll([1, 4])); // Deve retornar 10