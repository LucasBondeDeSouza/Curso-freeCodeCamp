function rot13(str) {
    // Função auxiliar para decodificar um único caractere ROT13
    function decodeChar(char) {
        const charCode = char.charCodeAt(0);

        // Verificar se o caractere é uma letra maiúscula
        if (charCode >= 65 && charCode <= 90) {
            // Aplicar a lógica ROT13
            return String.fromCharCode(((charCode - 65 + 13) % 26) + 65);
        } else {
            // Se não for uma letra maiúscula, manter o caractere inalterado
            return char;
        }
    }

    // Aplicar a função de decodificação a cada caractere na string
    const decodedStr = str.split('').map(decodeChar).join('');

    return decodedStr;
}

// Exemplo de uso
console.log(rot13("SERR PBQR PNZC")); // Saída: "FREE CODE CAMP"