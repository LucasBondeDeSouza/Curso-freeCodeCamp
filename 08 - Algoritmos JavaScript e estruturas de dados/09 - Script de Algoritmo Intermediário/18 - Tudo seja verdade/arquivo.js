function truthCheck(collection, pre) {
    // Verifica se a propriedade pre é truthy para todos os elementos na coleção
    return collection.every(obj => obj[pre]);
}

// Exemplo de uso
console.log(truthCheck([{ name: "Quincy", role: "Founder", isBot: false }, { name: "Naomi", role: "", isBot: false }, { name: "Camperbot", role: "Bot", isBot: true }], "isBot"));
// Deve retornar false