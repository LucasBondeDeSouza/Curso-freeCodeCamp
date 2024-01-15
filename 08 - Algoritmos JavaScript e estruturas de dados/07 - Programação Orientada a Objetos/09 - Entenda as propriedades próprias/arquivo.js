function Bird(name) {
    this.name = name;
    this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];

// Adiciona as próprias propriedades ao array ownProps
for (let prop in canary) {
    if (canary.hasOwnProperty(prop)) {
        ownProps.push(prop);
    }
}

console.log(ownProps);
// Resultado esperado: ['name', 'numLegs']