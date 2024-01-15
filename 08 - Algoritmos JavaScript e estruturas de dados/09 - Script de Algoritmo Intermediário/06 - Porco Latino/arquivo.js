function translatePigLatin(str) {
    // Verificar se a palavra começa com vogal
    if (/^[aeiou]/i.test(str)) {
        return str + "way";
    } else {
        // Verificar se a palavra não contém vogais
        if (!/[aeiou]/i.test(str)) {
            return str + "ay";
        }
        // Encontrar a posição da primeira vogal na palavra
        let vowelIndex = str.indexOf(str.match(/[aeiou]/i)[0]);

        // Mover a parte consonantal para o final e adicionar "ay"
        return str.slice(vowelIndex) + str.slice(0, vowelIndex) + "ay";
    }
}

// Exemplo de uso
console.log(translatePigLatin("rhythm"));
// Deve retornar "rhythmay"