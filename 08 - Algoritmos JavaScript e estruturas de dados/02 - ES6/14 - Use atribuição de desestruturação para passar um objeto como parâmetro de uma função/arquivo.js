const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};

// Utilizando desestruturação dentro do argumento para obter apenas max e min
const half = ({ max, min }) => (max + min) / 2.0;

// Chamando a função apenas com as propriedades desejadas
const result = half(stats);

console.log(result); // Saída: 28.515