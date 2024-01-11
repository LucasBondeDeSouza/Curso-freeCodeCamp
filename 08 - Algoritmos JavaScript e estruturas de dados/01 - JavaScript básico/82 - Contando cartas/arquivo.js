let count = 0;

function cc(card) {
    // Only change code below this line
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 7:
        case 8:
        case 9:
            // Não faz nada, não altera a contagem para 7, 8 ou 9
            break;
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            count--;
            break;
    }

    if (count > 0) {
        return count + " Bet";
    } else {
        return count + " Hold";
    }
    // Only change code above this line
}

console.log(cc(2));  // Resultado: "1 Bet"
console.log(cc(3));  // Resultado: "2 Bet"
console.log(cc(7));  // Resultado: "2 Bet" (não altera a contagem para 7)
console.log(cc('K'));  // Resultado: "1 Bet"
console.log(cc('A'));  // Resultado: "0 Hold"