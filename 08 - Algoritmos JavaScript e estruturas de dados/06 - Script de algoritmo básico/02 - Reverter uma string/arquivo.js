function reverseString(str) {
    // Divide a string em um array de caracteres
    let arrayDeCaracteres = str.split('');

    // Inverte a ordem dos elementos no array
    let arrayInvertido = arrayDeCaracteres.reverse();

    // Une os caracteres novamente em uma string
    let stringInvertida = arrayInvertido.join('');

    // Retorna a string invertida
    return stringInvertida;
}

console.log(reverseString("hello")); // Exemplo: imprime "olleh"