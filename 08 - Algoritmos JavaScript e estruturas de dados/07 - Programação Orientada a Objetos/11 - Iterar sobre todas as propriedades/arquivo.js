function Dog(name) {
    this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Adiciona propriedades próprias de beagle a ownProps e propriedades de protótipo de Dog a prototypeProps
for (let prop in beagle) {
    if (beagle.hasOwnProperty(prop)) {
        ownProps.push(prop);
    } else {
        prototypeProps.push(prop);
    }
}

console.log(ownProps); // Resultado esperado: ['name']
console.log(prototypeProps); // Resultado esperado: ['numLegs']