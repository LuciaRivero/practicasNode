const argv = require('yargs')
    .command('crear', 'crea el contenido', {
        description: {
            demand: true,
            alias: 'd',
            desc: 'descripcion de tarea por hacer'
        }
    })
    .command('actualizar', 'actualiza el contenido', {
        description: {
            demand: true,
            alias: 'd',
            desc: 'descripcion de tarea por hacer'
        },
        completado: {
            default: true,
            alias: 'c',
            desc: 'marca el estado de la tarea'
        }
    })
    .help()
    .argv;


module.exports = {
    argv
}