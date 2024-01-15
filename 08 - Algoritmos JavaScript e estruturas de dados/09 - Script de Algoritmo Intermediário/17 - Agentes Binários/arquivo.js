function binaryAgent(str) {
    // Dividir a string binária em uma matriz de binários
    const binaryArray = str.split(' ');

    // Converter cada binário para seu equivalente decimal e obter o caractere correspondente
    const translatedString = binaryArray.map(binary => String.fromCharCode(parseInt(binary, 2)));

    // Juntar os caracteres para formar a frase traduzida
    return translatedString.join('');
}

// Exemplo de uso
console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));
// Deve retornar "Aren't bonfires fun!?"