function checkObj(obj, checkProp) {
    // Only change code below this line
    if (obj.hasOwnProperty(checkProp)) {
        return obj[checkProp];
    } else {
        return "Not Found";
    }
    // Only change code above this line
}

// Exemplo de uso:
const myObject = {
    name: "John",
    age: 30,
    city: "New York"
};

console.log(checkObj(myObject, "age")); // Resultado: 30
console.log(checkObj(myObject, "gender")); // Resultado: "Not Found"