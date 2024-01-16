function telephoneCheck(str) {
    // Expressão regular para validar o formato do número de telefone nos EUA
    const phoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;

    // Testar a string com a expressão regular
    return phoneRegex.test(str);
}

// Exemplo de uso
console.log(telephoneCheck("555-555-5555")); // Saída: true