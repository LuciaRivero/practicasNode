const fs = require('fs');

let listToDo = [];

const saveDB = () => {
    let data = JSON.stringify(listToDo);
    fs.writeFile('db/data.json', data, function(err) {
        if (err) {
            return console.log(err);
        }

        console.log("The file was saved!");
    });
}

const crear = (descripcion) => {
    let toDo = {
        descripcion,
        completado: false
    }

    listToDo.push(toDo);

    saveDB();


    return toDo;
}

module.exports = {
    crear
}