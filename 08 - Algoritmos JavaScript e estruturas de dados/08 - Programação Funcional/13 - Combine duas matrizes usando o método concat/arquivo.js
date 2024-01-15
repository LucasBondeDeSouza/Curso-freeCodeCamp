function nonMutatingConcat(original, attach) {
    // Only change code below this line
    return original.concat(attach);
    // Only change code above this line
}

const first = [1, 2, 3];
const second = [4, 5];
const result = nonMutatingConcat(first, second);

console.log(result); // Deve imprimir [1, 2, 3, 4, 5]
console.log(first); // O array original não foi alterado