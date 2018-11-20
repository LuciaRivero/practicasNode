const fs = require('fs');


//module.exports.crearArchivo {tambien podemos exportar}
let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        let data = '';

        if (!Number(base)) {
            reject(`el valor introducido '${base}' no es un numero`);
            return;
        }
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err); //muestra error
            else
                resolve(`tabla-${base}-al-${limite}.txt`);

        });
    });
}

let listarTabla = (base, limite = 10) => {
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}`)
    }
}

module.exports = {
    crearArchivo,
    listarTabla
}