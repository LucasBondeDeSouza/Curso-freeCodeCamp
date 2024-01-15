function sumPrimes(num) {
    // Função para verificar se um número é primo
    function isPrime(n) {
        if (n <= 1) return false;
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) return false;
        }
        return true;
    }

    // Inicializar a variável para armazenar a soma dos números primos
    let sum = 0;

    // Iterar através dos números menores ou iguais a num
    for (let i = 2; i <= num; i++) {
        if (isPrime(i)) {
            sum += i;
        }
    }

    return sum;
}

// Exemplo de uso
console.log(sumPrimes(10)); // Deve retornar 17  