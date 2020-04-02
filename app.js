const argv = require('./config/yargs').argv;
const colors = require('colors');
const porHacer = require('./por-hacer/por-hacer');

let comando = argv._[0];




switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();
        for (let tarea of listado) {
            console.log('============Por Hacer ============'.green);
            console.log(tarea.descripcion);
            console.log('Estado :', tarea.completado);
            console.log('=================================='.green)
        }
        break;
    case 'actualizar':
        let tareaactualizada = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(tareaactualizada);
        break;
    case 'borrar':
        let borrartarea = porHacer.borrar(argv.descripcion);
        console.log(borrartarea);
        break;
    default:
        console.log('El comando no existe');
        break;
}