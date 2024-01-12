let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Alteração feita nesta linha
let result = hello.replace(wsRegex, "");
console.log(result); // Isso deve imprimir "Hello, World!"