let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor)(\s\w\.?)?\sRoosevelt/i; // Alteração feita nesta linha
let result = myRegex.test(myString);
console.log(result); // Isso deve imprimir true para "Eleanor Roosevelt"