function Dog(name) {
    this.name = name;
}

// Função para verificar se o candidato é uma instância de Dog
function joinDogFraternity(candidate) {
    return candidate.constructor === Dog;
}

// Exemplo de uso
let candidate1 = new Dog("Buddy");
let candidate2 = { name: "Max" };

console.log(joinDogFraternity(candidate1)); // Exemplo: imprime true
console.log(joinDogFraternity(candidate2)); // Exemplo: imprime false