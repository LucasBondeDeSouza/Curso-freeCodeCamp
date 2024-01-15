function titleCase(str) {
    // Divide a string em palavras
    let palavras = str.toLowerCase().split(' ');

    // Capitaliza a primeira letra de cada palavra
    for (let i = 0; i < palavras.length; i++) {
        palavras[i] = palavras[i].charAt(0).toUpperCase() + palavras[i].substring(1);
    }

    // Junta as palavras de volta em uma string
    return palavras.join(' ');
}

console.log(titleCase("I'm a little tea pot"));
// Exemplo: imprime "I'm A Little Tea Pot"
