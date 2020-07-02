const tareaController = require('./tareaController');
const jwtMiddleware = require('express-jwt-middleware');

var jwtCheck = jwtMiddleware('esto_deberia_cambiar_periodicamente');

module.exports = function(router) {
    router.post('/nuevatarea', jwtCheck, tareaController.createTarea);
    router.get('/tareas', jwtCheck, tareaController.getTareas);
    router.get('/tarea/:id', jwtCheck, tareaController.getTarea);
    router.put('/actualizartarea/:id', jwtCheck, tareaController.updateTarea);
    router.delete('/eliminartarea/:id', jwtCheck, tareaController.removeTarea);
}