// Função que retorna uma string representando uma xícara de chá verde
const prepareGreenTea = () => 'greenTea';

// Função que retorna uma string representando uma xícara de chá preto
const prepareBlackTea = () => 'blackTea';

/*
Dada uma função (representando o tipo de chá) e o número de xícaras necessárias, o
A função a seguir retorna uma matriz de strings (cada uma representando uma xícara de
um tipo específico de chá).
*/
const getTea = (prepareTea, numOfCups) => {
    const teaCups = [];

    for (let cups = 1; cups <= numOfCups; cups += 1) {
        const teaCup = prepareTea();
        teaCups.push(teaCup);
    }
    return teaCups;
};

// Only change code below this line
const tea4GreenTeamFCC = getTea(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea(prepareBlackTea, 13);
// Only change code above this line