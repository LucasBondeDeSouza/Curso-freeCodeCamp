function addTogether() {
    // Função para verificar se um valor é um número válido
    function isNumber(value) {
        return typeof value === 'number';
    }

    // Verificar se há dois argumentos e se ambos são números
    if (arguments.length === 2 && isNumber(arguments[0]) && isNumber(arguments[1])) {
        return arguments[0] + arguments[1];
    }

    // Verificar se há apenas um argumento e se é um número
    if (arguments.length === 1 && isNumber(arguments[0])) {
        // Retornar uma função que espera um argumento e retorna a soma
        return function (secondArg) {
            if (isNumber(secondArg)) {
                return arguments[0] + secondArg;
            }
        };
    }

    // Retornar indefinido se os argumentos não atenderem às condições
    return undefined;
}

// Exemplo de uso
console.log(addTogether(5)(7)); // Deve retornar 12