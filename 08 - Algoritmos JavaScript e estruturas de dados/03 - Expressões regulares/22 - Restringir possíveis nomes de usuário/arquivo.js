let username = "JackOfAllTrades";
let userCheck = /^[a-zA-Z]{2,}\d*$/; // Altere esta linha
let result = userCheck.test(username);

console.log(result)