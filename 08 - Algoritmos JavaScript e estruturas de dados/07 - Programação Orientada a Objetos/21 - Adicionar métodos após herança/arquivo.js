function Animal() { }
Animal.prototype.eat = function () { console.log("nom nom nom"); };

function Dog() { }

// Herda o protótipo de Animal
Dog.prototype = Object.create(Animal.prototype);

// Define o construtor do protótipo como Dog
Dog.prototype.constructor = Dog;

// Adiciona o método bark() ao objeto Dog
Dog.prototype.bark = function () {
    console.log("Woof!");
};

// Instância um objeto beagle da classe Dog
let beagle = new Dog();

// Testa os métodos eat() e bark()
beagle.eat(); // exibirá "nom nom nom"
beagle.bark(); // exibirá "Woof!"