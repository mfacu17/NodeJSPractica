const moduloMultiplicar = require('./multiplicar/multiplicar')
const argv = require('./config/yargs').argv
const colors = require('colors')

let comando = argv._[0]

switch (comando) {
    case 'listar':
        moduloMultiplicar.listarTabla(argv.base, argv.limite)
        break;
    case 'crear':
        moduloMultiplicar.crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:`.red, `${archivo}`.trap))
            .catch(e => console.log(e))
        break;
    default:
        console.log('Comando desconocido');
}

// let parametro = argv[2]
// let base = parametro.split('=')[1]