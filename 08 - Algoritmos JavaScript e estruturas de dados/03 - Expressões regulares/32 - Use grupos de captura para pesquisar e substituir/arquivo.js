let str = "one two three";
let fixRegex = /(\b\w+\b) (\b\w+\b) (\b\w+\b)/; // Alteração feita nesta linha
let replaceText = "$3 $2 $1"; // Alteração feita nesta linha
let result = str.replace(fixRegex, replaceText);
console.log(result); // Isso deve imprimir "three two one"