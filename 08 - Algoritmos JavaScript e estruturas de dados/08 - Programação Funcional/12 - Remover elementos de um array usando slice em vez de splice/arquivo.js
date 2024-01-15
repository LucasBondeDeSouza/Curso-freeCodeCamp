function nonMutatingSplice(cities) {
    // Utiliza o método slice para criar uma cópia do array contendo apenas os três primeiros itens
    return cities.slice(0, 3);
}

// Exemplo de uso:
const originalCities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix"];
const result = nonMutatingSplice(originalCities);

console.log(result); // Deve imprimir ["New York", "Los Angeles", "Chicago"]
console.log(originalCities); // O array original não foi alterado