const bicycle = {
    gear: 2,
    // Utilizando a sintaxe de método abreviado para a função setGear
    setGear(newGear) {
        this.gear = newGear;
    }
};

bicycle.setGear(3);
console.log(bicycle.gear); // Saída: 3