const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar.js');


const argv = require('yargs')
    .command('listar', 'imprime en consola la tabla', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10

        }
    })
    .command('crear', 'crea en consola la tabla', {
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10

        }
    })
    .help()
    .argv;

let comando = argv._[0];
//let argv = process.argv;
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('comando no reconocido');
}