// Setup
function phoneticLookup(val) {
    let result = "";

    // Only change code below this line
    const lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
    };

    result = lookup[val] || undefined;
    // Only change code above this line

    return result;
}

console.log(phoneticLookup("charlie")); // Resultado: "Chicago"
console.log(phoneticLookup("")); // Resultado: undefined