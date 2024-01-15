function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

let duck = new Bird();
let beagle = new Dog();

console.log(duck.constructor); // Deve imprimir a função construtora Bird
console.log(beagle.constructor); // Deve imprimir a função construtora Dog