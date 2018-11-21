const argv = require('./config/yargs').argv;
const toDo = require('./to-do/to-do');
console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = toDo.crear(argv.descripcion);
        console.log(tarea);
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