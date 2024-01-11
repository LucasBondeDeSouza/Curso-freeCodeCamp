const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};

// Utilizando desestruturação para atribuir os valores diretamente
const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;

// Agora as variáveis highToday e highTomorrow têm os valores correspondentes