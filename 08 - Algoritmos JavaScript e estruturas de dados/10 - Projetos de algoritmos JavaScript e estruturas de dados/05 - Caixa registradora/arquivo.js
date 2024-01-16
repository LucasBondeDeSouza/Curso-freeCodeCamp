function checkCashRegister(price, cash, cid) {
    const currencyUnit = {
        "PENNY": 0.01,
        "NICKEL": 0.05,
        "DIME": 0.1,
        "QUARTER": 0.25,
        "ONE": 1,
        "FIVE": 5,
        "TEN": 10,
        "TWENTY": 20,
        "ONE HUNDRED": 100
    };

    let change = cash - price;
    let changeArray = [];

    // Calcular o total de dinheiro na gaveta
    let totalInDrawer = cid.reduce((acc, item) => acc + item[1], 0);

    // Arredondar para evitar problemas de precisão
    totalInDrawer = Math.round(totalInDrawer * 100) / 100;

    // Caso 2: Dinheiro insuficiente
    if (totalInDrawer < change) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    }

    // Caso 3: Dinheiro exato na gaveta
    if (totalInDrawer === change) {
        return { status: "CLOSED", change: cid };
    }

    // Caso 4: Calcular e fornecer troco
    for (let i = cid.length - 1; i >= 0; i--) {
        const unitName = cid[i][0];
        const unitValue = currencyUnit[unitName];
        const unitAvailable = cid[i][1];

        // Quantidade de unidades que podem ser usadas para dar troco
        const unitsToUse = Math.min(Math.floor(change / unitValue), unitAvailable / unitValue);

        // Valor a ser retirado do troco
        const valueToUse = unitsToUse * unitValue;

        // Adicionar à lista de troco se houver unidades para usar
        if (unitsToUse > 0) {
            changeArray.push([unitName, valueToUse]);
            // Atualizar o valor do troco restante
            change = Math.round((change - valueToUse) * 100) / 100;
        }
    }

    // Caso 1: Troco não exato ou não suficiente
    if (change > 0) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    }

    return { status: "OPEN", change: changeArray };
}

// Exemplo de uso
console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));