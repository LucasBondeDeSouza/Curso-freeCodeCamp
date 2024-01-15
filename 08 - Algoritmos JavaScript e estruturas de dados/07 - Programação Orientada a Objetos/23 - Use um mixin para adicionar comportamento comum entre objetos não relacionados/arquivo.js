// Declare glideMixin como uma função
let glideMixin = function (obj) {
    obj.glide = function () {
        console.log("Gliding!");
    };
};

let bird = {
    name: "Donald",
    numLegs: 2
};

let boat = {
    name: "Warrior",
    type: "race-boat"
};

// Use o glideMixin para adicionar o método glide tanto para bird quanto para boat
glideMixin(bird);
glideMixin(boat);

// Teste o método glide para bird e boat
bird.glide(); // Exibirá "Gliding!"
boat.glide(); // Exibirá "Gliding!"