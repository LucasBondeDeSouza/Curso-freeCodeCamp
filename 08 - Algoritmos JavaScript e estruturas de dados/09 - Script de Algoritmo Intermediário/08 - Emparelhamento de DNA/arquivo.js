function pairElement(str) {
    // Função auxiliar para encontrar o par de bases para um caractere
    function findPair(base) {
        switch (base) {
            case "A":
                return ["A", "T"];
            case "T":
                return ["T", "A"];
            case "C":
                return ["C", "G"];
            case "G":
                return ["G", "C"];
            default:
                return null;
        }
    }

    // Criar pares de bases para cada caractere na string
    const result = [];
    for (let char of str) {
        result.push(findPair(char));
    }

    return result;
}

// Exemplo de uso
console.log(pairElement("GCG"));
// Deve retornar [["G", "C"], ["C", "G"], ["G", "C"]]
