function steamrollArray(arr) {
    let flattenedArray = [];

    function flatten(element) {
        if (Array.isArray(element)) {
            for (let subElement of element) {
                flatten(subElement);
            }
        } else {
            flattenedArray.push(element);
        }
    }

    for (let element of arr) {
        flatten(element);
    }

    return flattenedArray;
}

// Exemplo de uso
console.log(steamrollArray([1, [2], [3, [[4]]]]));
// Deve retornar [1, 2, 3, 4]