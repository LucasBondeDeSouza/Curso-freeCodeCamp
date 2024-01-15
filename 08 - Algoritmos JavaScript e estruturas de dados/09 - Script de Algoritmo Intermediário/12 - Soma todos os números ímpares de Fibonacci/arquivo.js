function sumFibs(num) {
    // Inicializar os primeiros dois números da sequência de Fibonacci
    let prev = 0;
    let current = 1;

    // Inicializar a variável para armazenar a soma dos números ímpares
    let sum = 0;

    // Gerar a sequência de Fibonacci até atingir ou ultrapassar num
    while (current <= num) {
        // Se o número atual é ímpar, adicioná-lo à soma
        if (current % 2 !== 0) {
            sum += current;
        }

        // Atualizar os valores para o próximo número da sequência
        let next = prev + current;
        prev = current;
        current = next;
    }

    return sum;
}

// Exemplo de uso
console.log(sumFibs(10)); // Deve retornar 10