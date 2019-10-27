const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Lista la tabla de la base ingresada', opts)
    .command('crear', 'Genera una tabla con la base ingresada', opts)
    .help()
    .argv

module.exports = {
    argv
}