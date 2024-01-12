function filteredArray(arr, elem) {
    let newArr = [];

    // Itera sobre cada subarray em arr
    for (let i = 0; i < arr.length; i++) {
        // Verifica se o elemento elem não está presente no subarray
        if (arr[i].indexOf(elem) === -1) {
            // Adiciona o subarray ao newArr
            newArr.push(arr[i]);
        }
    }

    return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));