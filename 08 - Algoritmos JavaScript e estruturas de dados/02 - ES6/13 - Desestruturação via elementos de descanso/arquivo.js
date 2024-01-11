function removeFirstTwo(list) {
    // Utilizando desestruturação com a sintaxe restante para obter a submatriz sem os dois primeiros elementos
    const [, , ...rest] = list;
    return rest;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);

console.log(sourceWithoutFirstTwo); // Saída: [3, 4, 5, 6, 7, 8, 9, 10]