const argv = require('yargs').argv;

console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'crear':
        console.log('crear to-do');
        break;
    case 'listar':
        console.log('listar tareas por hacer');
        break;
    case 'actualizar':
        console.log('actualizar tareas');
        break;
    default:
        console.log('comando no es reconocido');

}