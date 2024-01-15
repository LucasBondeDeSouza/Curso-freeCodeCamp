Array.prototype.myFilter = function (callback) {
    const newArray = [];

    for (let i = 0; i < this.length; i++) {
        // Aplica a função de retorno de chamada a cada elemento
        if (callback(this[i], i, this)) {
            newArray.push(this[i]);
        }
    }

    return newArray;
};

// Exemplo de uso:
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = numbers.myFilter(function (num) {
    return num % 2 === 0;
});

console.log(evenNumbers); // Deve imprimir [2, 4]