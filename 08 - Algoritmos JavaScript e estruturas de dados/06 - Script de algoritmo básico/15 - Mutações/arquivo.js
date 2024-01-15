function mutation(arr) {
    // Converte ambas as strings para minúsculas
    let str1 = arr[0].toLowerCase();
    let str2 = arr[1].toLowerCase();

    // Itera sobre as letras da segunda string
    for (let i = 0; i < str2.length; i++) {
        // Verifica se cada letra está presente na primeira string
        if (str1.indexOf(str2[i]) === -1) {
            // Se alguma letra não estiver presente, retorna false
            return false;
        }
    }

    // Se todas as letras estiverem presentes, retorna true
    return true;
}

console.log(mutation(["hello", "hey"])); // Exemplo: imprime false