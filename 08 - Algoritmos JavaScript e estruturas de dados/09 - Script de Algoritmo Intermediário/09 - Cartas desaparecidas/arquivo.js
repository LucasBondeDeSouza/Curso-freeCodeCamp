function fearNotLetter(str) {
    for (let i = 0; i < str.length - 1; i++) {
        // Verificar a diferença entre os valores ASCII das letras consecutivas
        if (str.charCodeAt(i + 1) - str.charCodeAt(i) > 1) {
            // Se houver uma lacuna, retornar a letra que falta
            return String.fromCharCode(str.charCodeAt(i) + 1);
        }
    }

    // Se todas as letras estiverem presentes, retornar undefined
    return undefined;
}

// Exemplo de uso
console.log(fearNotLetter("abce"));
// Deve retornar "d"