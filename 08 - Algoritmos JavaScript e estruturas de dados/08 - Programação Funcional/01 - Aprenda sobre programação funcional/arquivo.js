// Função que retorna uma string representando uma xícara de chá verde
const prepareTea = () => 'greenTea';

/*
Dada uma função (representando o tipo de chá) e o número de xícaras necessárias, o
A função a seguir retorna uma matriz de strings (cada uma representando uma xícara de
um tipo específico de chá).
*/
const getTea = (numOfCups) => {
    const teaCups = [];

    for (let cups = 1; cups <= numOfCups; cups += 1) {
        const teaCup = prepareTea();
        teaCups.push(teaCup);
    }
    return teaCups;
};

// Only change code below this line
const tea4TeamFCC = getTea(40);
// Only change code above this line