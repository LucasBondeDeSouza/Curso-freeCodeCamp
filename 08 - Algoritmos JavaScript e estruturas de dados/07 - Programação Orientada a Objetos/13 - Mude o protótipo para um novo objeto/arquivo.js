function Dog(name) {
    this.name = name;
}

Dog.prototype = {
    // Adiciona a propriedade numLegs
    numLegs: 4,

    // Adiciona o método eat
    eat: function () {
        console.log("Nom nom nom");
    },

    // Adiciona o método describe
    describe: function () {
        console.log("I am a dog named " + this.name);
    }
};

// Exemplo de uso
let myDog = new Dog("Buddy");
console.log(myDog.numLegs); // Exemplo: imprime 4
myDog.eat(); // Exemplo: imprime "Nom nom nom"
myDog.describe(); // Exemplo: imprime "I am a dog named Buddy"