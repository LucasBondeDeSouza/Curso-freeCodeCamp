function truncateString(str, num) {
    // Retorna a string original se o comprimento for maior ou igual ao comprimento máximo
    if (str.length <= num) {
        return str;
    } else {
        // Trunca a string e adiciona "..." ao final
        return str.slice(0, num) + "...";
    }
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
// Exemplo: imprime "A-tisket..."