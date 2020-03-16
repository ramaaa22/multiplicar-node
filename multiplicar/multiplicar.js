const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite) => {
    for (let i = 1; i <= limite; i++) {
        console.log(`${base}*${i}=${base*i}`.green);
    }

}


let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base}*${i}=${base*i}\n`;
        }
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`archivo creado: tabla-${base}.txt`.green)
        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}