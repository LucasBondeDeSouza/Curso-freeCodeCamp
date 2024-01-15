function bouncer(arr) {
    // Usa o método filter para criar uma nova matriz com valores verdadeiros
    let newArray = arr.filter(Boolean);

    // Retorna a nova matriz
    return newArray;
}

console.log(bouncer([7, "ate", "", false, 9]));
// Exemplo: imprime [7, "ate", 9]