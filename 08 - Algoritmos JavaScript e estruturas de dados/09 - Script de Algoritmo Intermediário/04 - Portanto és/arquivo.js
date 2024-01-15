function whatIsInAName(collection, source) {
    // Filtrar a coleção usando a função de callback
    return collection.filter(obj => {
        // Verificar se todos os pares nome-valor em source estão presentes em obj
        for (let key in source) {
            if (source[key] !== obj[key]) {
                return false;
            }
        }
        return true;
    });
}

// Exemplo de uso
console.log(
    whatIsInAName(
        [
            { first: "Romeo", last: "Montague" },
            { first: "Mercutio", last: null },
            { first: "Tybalt", last: "Capulet" }
        ],
        { last: "Capulet" }
    )
);
// Deve retornar [{ first: "Tybalt", last: "Capulet" }]