function smallestCommons(arr) {
    // Função para encontrar o MDC de dois números
    function gcd(a, b) {
        return b === 0 ? a : gcd(b, a % b);
    }

    // Função para encontrar o MMC de dois números
    function lcm(a, b) {
        return (a * b) / gcd(a, b);
    }

    // Ordenar o array de entrada
    arr.sort((a, b) => a - b);

    // Inicializar o MMC com o primeiro número no intervalo
    let multiple = arr[0];

    // Calcular o MMC para cada número no intervalo
    for (let i = arr[0] + 1; i <= arr[1]; i++) {
        multiple = lcm(multiple, i);
    }

    return multiple;
}

// Exemplo de uso
console.log(smallestCommons([1, 5])); // Deve retornar 60