function sum(arr, n) {
    // Only change code below this line
    if (n <= 0) {
        return 0; // Condição de parada: quando n for menor ou igual a zero, retorna 0.
    } else {
        return sum(arr, n - 1) + arr[n - 1]; // Chamada recursiva para os primeiros n-1 elementos e soma com o n-ésimo elemento.
    }
    // Only change code above this line
}

// Exemplo de uso:
const arrayExemplo = [1, 2, 3, 4, 5];
const resultado = sum(arrayExemplo, 3); // Soma dos primeiros 3 elementos [1, 2, 3]
console.log(resultado); // Resultado esperado: 6