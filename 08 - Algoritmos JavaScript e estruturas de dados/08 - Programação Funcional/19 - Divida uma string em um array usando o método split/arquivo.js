function splitify(str) {
    // Only change code below this line
    return str.split(/\W/);
    // Only change code above this line
}

const result = splitify("Hello World,I-am code");
console.log(result); // ["Hello", "World", "I", "am", "code"]