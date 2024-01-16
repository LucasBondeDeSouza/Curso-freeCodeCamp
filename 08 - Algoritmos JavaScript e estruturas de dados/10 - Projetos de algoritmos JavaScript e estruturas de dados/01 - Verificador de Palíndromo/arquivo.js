function palindrome(str) {
    // Passo 1: Remover caracteres não alfanuméricos e espaços
    let alphanumericStr = str.replace(/[^a-zA-Z0-9]/g, '');

    // Passo 2: Colocar todos os caracteres em minúsculas
    alphanumericStr = alphanumericStr.toLowerCase();

    // Passo 3: Verificar se é um palíndromo
    let reversedStr = alphanumericStr.split('').reverse().join('');
    return alphanumericStr === reversedStr;
}

// Exemplo de uso
console.log(palindrome("eye")); // Saída: true