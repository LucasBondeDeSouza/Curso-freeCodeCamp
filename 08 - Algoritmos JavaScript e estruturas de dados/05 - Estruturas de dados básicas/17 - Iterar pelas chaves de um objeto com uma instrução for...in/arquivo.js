const users = {
    Alan: {
        online: false
    },
    Jeff: {
        online: true
    },
    Sarah: {
        online: false
    }
};

function countOnline(allUsers) {
    let count = 0;

    // Itera sobre as propriedades do objeto allUsers
    for (let user in allUsers) {
        // Verifica se a propriedade online está definida como true
        if (allUsers[user].online === true) {
            count++;
        }
    }

    return count;
}

console.log(countOnline(users));