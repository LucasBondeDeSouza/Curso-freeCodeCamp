// Use a palavra-chave 'class' para definir a classe Vegetable
class Vegetable {
    // O construtor recebe o nome do vegetal como parâmetro e atribui à propriedade 'name'
    constructor(name) {
        this.name = name;
    }
}

// Cria uma instância da classe Vegetable
const carrot = new Vegetable('carrot');

// Exibe o nome da instância criada
console.log(carrot.name); // Deve exibir 'carrot'