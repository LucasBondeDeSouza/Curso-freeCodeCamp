function factorialize(num) {
    // Se o número for 0, o fatorial é 1
    if (num === 0) {
        return 1;
    } else {
        // Inicializa o fatorial com 1
        let fatorial = 1;

        // Multiplica todos os números de 1 até o número fornecido
        for (let i = 1; i <= num; i++) {
            fatorial *= i;
        }

        // Retorna o resultado
        return fatorial;
    }
}

console.log(factorialize(5)); // Exemplo: imprime 120