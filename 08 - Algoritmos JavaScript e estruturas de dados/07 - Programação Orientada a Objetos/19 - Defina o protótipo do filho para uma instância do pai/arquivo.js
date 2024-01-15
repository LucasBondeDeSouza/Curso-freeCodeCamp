function Animal() { }

Animal.prototype = {
    constructor: Animal,
    eat: function () {
        console.log("nom nom nom");
    }
};

function Dog() { }

// Herda do protótipo de Animal
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

let beagle = new Dog();