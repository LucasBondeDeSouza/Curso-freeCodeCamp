// Use a palavra-chave 'class' para definir a classe Thermostat
class Thermostat {
    // O construtor recebe a temperatura em Fahrenheit como parâmetro
    constructor(fahrenheit) {
        this._temperature = fahrenheit;
    }

    // Getter para obter a temperatura em Celsius
    get temperature() {
        return (5 / 9) * (this._temperature - 32);
    }

    // Setter para aceitar a temperatura em Celsius
    set temperature(celsius) {
        this._temperature = (celsius * 9) / 5 + 32;
    }
}

// Cria uma instância da classe Thermostat
const thermos = new Thermostat(76); // Configurando na escala Fahrenheit
let temp = thermos.temperature; // Obtendo a temperatura em Celsius (24.44)
console.log(temp);

// Definindo a temperatura em Celsius usando o setter
thermos.temperature = 26;
temp = thermos.temperature; // Obtendo a nova temperatura em Celsius (26)
console.log(temp);