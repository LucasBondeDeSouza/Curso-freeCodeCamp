// Setup
const recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
    if (value === "") {
        // Se value for uma string vazia, exclua a prop propriedade do álbum.
        delete records[id][prop];
    } else if (prop !== "tracks") {
        // Se prop não for tracks e value não for uma string vazia, atribua o value ao arquivo prop.
        records[id][prop] = value;
    } else {
        // Se prop for tracks e value não for uma string vazia, atualize o tracks array do álbum.
        if (!records[id].hasOwnProperty("tracks")) {
            records[id]["tracks"] = [];
        }
        records[id]["tracks"].push(value);
    }

    return records;
}

console.log(updateRecords(recordCollection, 5439, 'artist', 'ABBA'));