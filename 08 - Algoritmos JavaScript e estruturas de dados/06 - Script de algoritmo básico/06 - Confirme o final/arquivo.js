function confirmEnding(str, target) {
    // Obtém a parte final da string principal com base no comprimento da string de destino
    let finalDaString = str.substring(str.length - target.length);

    // Compara a parte final da string principal com a string de destino e retorna true ou false
    return finalDaString === target;
}

console.log(confirmEnding("Bastian", "n")); // Exemplo: imprime true