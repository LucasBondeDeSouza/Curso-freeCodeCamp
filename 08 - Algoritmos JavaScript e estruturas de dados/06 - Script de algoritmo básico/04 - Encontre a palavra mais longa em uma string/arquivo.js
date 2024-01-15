function findLongestWordLength(str) {
    // Divide a frase em palavras
    let palavras = str.split(' ');

    // Inicializa o comprimento da palavra mais longa com 0
    let comprimentoMaisLongo = 0;

    // Itera sobre as palavras para encontrar o comprimento da palavra mais longa
    for (let i = 0; i < palavras.length; i++) {
        let comprimentoAtual = palavras[i].length;

        // Atualiza o comprimentoMaisLongo se o comprimento atual for maior
        if (comprimentoAtual > comprimentoMaisLongo) {
            comprimentoMaisLongo = comprimentoAtual;
        }
    }

    // Retorna o comprimento da palavra mais longa
    return comprimentoMaisLongo;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog")); // Exemplo: imprime 6