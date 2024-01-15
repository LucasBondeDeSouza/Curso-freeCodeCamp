function repeatStringNumTimes(str, num) {
    // Retorna uma string vazia se num não for um número positivo
    if (num <= 0) {
        return "";
    }

    let resultado = "";

    // Usa um loop for para concatenar a string original num vezes
    for (let i = 0; i < num; i++) {
        resultado += str;
    }

    return resultado;
}

console.log(repeatStringNumTimes("abc", 3)); // Exemplo: imprime "abcabcabc"