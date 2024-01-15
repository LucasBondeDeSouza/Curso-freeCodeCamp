function myReplace(str, before, after) {
    // Verificar se o primeiro caractere de before está em maiúsculo
    if (before[0] === before[0].toUpperCase()) {
        // Se sim, converter o primeiro caractere de after para maiúsculo
        after = after[0].toUpperCase() + after.slice(1);
    } else {
        // Se não, manter o primeiro caractere de after em minúsculo
        after = after[0].toLowerCase() + after.slice(1);
    }

    // Substituir before por after na string
    return str.replace(before, after);
}

// Exemplo de uso
console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
// Deve retornar "A quick brown fox leaped over the lazy dog"
