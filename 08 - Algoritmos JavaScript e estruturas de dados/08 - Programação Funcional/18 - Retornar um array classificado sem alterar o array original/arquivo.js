const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
    // Only change code below this line
    return [...arr].sort((a, b) => a - b);
    // Only change code above this line
}

const sortedArray = nonMutatingSort(globalArray);
console.log(sortedArray); // [2, 3, 5, 6, 9]