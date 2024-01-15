function Animal() { }

Animal.prototype = {
    constructor: Animal,
    eat: function () {
        console.log("nom nom nom");
    }
};

function Cat(name) {
    this.name = name;
}

// Herda do protótipo de Animal
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;

function Bear(name) {
    this.name = name;
}

// Herda do protótipo de Animal
Bear.prototype = Object.create(Animal.prototype);
Bear.prototype.constructor = Bear;