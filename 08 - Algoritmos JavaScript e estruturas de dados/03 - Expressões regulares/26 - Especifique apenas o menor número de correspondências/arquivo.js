let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/ig; // Change this line
let result = haRegex.test(haStr);

console.log(result)