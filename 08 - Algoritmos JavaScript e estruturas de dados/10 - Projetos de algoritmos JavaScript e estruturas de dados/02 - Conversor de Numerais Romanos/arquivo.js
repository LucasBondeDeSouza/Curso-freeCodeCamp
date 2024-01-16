function convertToRoman(num) {
    // Definir os símbolos romanos para unidades, dezenas, centenas e milhares
    const romanNumerals = [
        ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"], // Unidades
        ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"], // Dezenas
        ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"], // Centenas
        ["", "M", "MM", "MMM"] // Milhares
    ];

    // Converter o número em algarismos romanos
    const thousands = romanNumerals[3][Math.floor(num / 1000)];
    const hundreds = romanNumerals[2][Math.floor((num % 1000) / 100)];
    const tens = romanNumerals[1][Math.floor((num % 100) / 10)];
    const ones = romanNumerals[0][num % 10];

    // Juntar os algarismos romanos e retornar o resultado
    return thousands + hundreds + tens + ones;
}

// Exemplo de uso
console.log(convertToRoman(36)); // Saída: XXXVI