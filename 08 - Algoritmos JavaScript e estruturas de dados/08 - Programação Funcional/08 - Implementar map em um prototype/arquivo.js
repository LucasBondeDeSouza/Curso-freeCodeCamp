Array.prototype.myMap = function (callback) {
    const newArray = [];

    for (let i = 0; i < this.length; i++) {
        // Aplica a função de retorno de chamada a cada elemento
        newArray.push(callback(this[i], i, this));
    }

    return newArray;
};

// Exemplo de uso:
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.myMap(function (num) {
    return num * num;
});

console.log(squaredNumbers); // Deve imprimir [1, 4, 9, 16, 25]