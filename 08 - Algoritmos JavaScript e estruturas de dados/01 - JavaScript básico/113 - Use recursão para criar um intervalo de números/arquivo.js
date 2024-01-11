function rangeOfNumbers(startNum, endNum) {
    if (startNum > endNum) {
        return [];
    } else {
        const arr = rangeOfNumbers(startNum, endNum - 1);
        arr.push(endNum);
        return arr;
    }
}

console.log(rangeOfNumbers(3, 7)); // Retorna [3, 4, 5, 6, 7]