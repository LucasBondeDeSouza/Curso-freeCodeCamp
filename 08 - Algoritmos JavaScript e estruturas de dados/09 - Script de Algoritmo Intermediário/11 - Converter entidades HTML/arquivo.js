function convertHTML(str) {
    // Crie um objeto para mapear os caracteres especiais para suas entidades HTML
    const htmlEntities = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&apos;"
    };

    // Use uma expressão regular para substituir os caracteres especiais
    return str.replace(/[&<>"']/g, match => htmlEntities[match]);
}

// Exemplo de uso
console.log(convertHTML("Dolce & Gabbana"));
// Deve retornar "Dolce &amp; Gabbana"