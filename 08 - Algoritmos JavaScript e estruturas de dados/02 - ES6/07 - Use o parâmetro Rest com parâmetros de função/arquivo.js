const sum = (...args) => {
    let total = 0;
    for (let i = 0; i < args.length; i++) {
        total += args[i];
    }
    return total;
};

// Exemplo de uso:
const result = sum(1, 2, 3, 4, 5);
console.log(result); // Saída: 15