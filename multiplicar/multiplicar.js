//requireds
const colors = require('colors')

const fs = require('fs')
    //const fs = require('express') PAQUETE NO NATIVO
    //const fs = require('./fs') ARCHIVOS

let listarTabla = (base, limite = 10) => {
    console.log('====================='.green);
    console.log(`   ==Tabla de ${base} ==`.red);
    console.log('====================='.green);
    for (let i = 1; i <= limite; i++) {
        console.log((`${base} * ${i} = ${base * i}\n`));
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor ingresado ${base} no es un numero`)
            return
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${base * i}\n`);
        }

        fs.writeFile(`tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`);
        });
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}