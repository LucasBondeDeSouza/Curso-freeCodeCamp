function spinalCase(str) {
    // Adicionar espaços entre palavras com base nas mudanças de caso
    str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

    // Substituir espaços, underscores e letras maiúsculas por travessões e colocar tudo em minúsculas
    str = str.replace(/[\s_]/g, '-').toLowerCase();

    return str;
}

// Exemplo de uso
console.log(spinalCase('thisIsSpinalTap'));
// Deve retornar "this-is-spinal-tap"