function diffArray(arr1, arr2) {
    const newArr = [];

    // Verificar elementos em arr1 que não estão em arr2
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.indexOf(arr1[i]) === -1) {
            newArr.push(arr1[i]);
        }
    }

    // Verificar elementos em arr2 que não estão em arr1
    for (let j = 0; j < arr2.length; j++) {
        if (arr1.indexOf(arr2[j]) === -1) {
            newArr.push(arr2[j]);
        }
    }

    return newArr;
}

// Exemplo de uso
console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])); // Deve retornar [4]