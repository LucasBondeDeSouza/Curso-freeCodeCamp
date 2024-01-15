function Bird() { }

Bird.prototype.fly = function () {
    return "I am flying!";
};

function Penguin() { }

Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Substitua o método fly para a classe Penguin
Penguin.prototype.fly = function () {
    return "Alas, this is a flightless bird.";
};

// Teste o método fly para a instância de Penguin
let penguin = new Penguin();
console.log(penguin.fly()); // Exibirá "Alas, this is a flightless bird."
