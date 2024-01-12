function mixedNumbers(arr) {
    // Only change code below this line

    // Adiciona 'I', 2, 'three' ao início da matriz
    arr.unshift('I', 2, 'three');

    // Adiciona 7, 'VIII', 9 ao final da matriz
    arr.push(7, 'VIII', 9);

    // Only change code above this line
    return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));