const Tarea = require('./tareaDao');

exports.createTarea = function (req, res, next) {
    var tarea = {
        titulo: req.body.titulo,
        prioridad: req.body.prioridad,
        vencimiento: req.body.vencimiento,
        finalizado: false,
        usuario: req.tokenData.id
    };

    Tarea.create(tarea, function(err, tarea) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            tarea: tarea
        })
    })
}

//trae solo las del usuario
exports.getTareas = function(req, res, next) {

    Tarea.get({usuario: req.tokenData.id}, function(err, tareas) {
        if(err) {
            res.json({
                error: err
            })
        }
        res.json({
            tareas: tareas
        })
    })
}

exports.getTarea = function(req, res, next) {

    Tarea.get({_id: req.params.id}, function(err, tareas) {
        if(err) {
            res.json({
                error: err
            })
        }
        res.json({
            tarea: tareas
        })
    })
}

exports.updateTarea = function(req, res, next) {
    var tarea = {
        titulo: req.body.titulo,
        detalle: req.body.detalle,
        vencimiento: req.body.vencimiento,
        finalizado: false,
        usuario: req.tokenData.id
    };
    Tarea.update({_id: req.params.id}, tarea, function(err, tarea) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            tarea
        })
    })
}

exports.removeTarea = function(req, res, next) {
    Tarea.delete({_id: req.params.id}, function(err, tarea) {
        if(err) {
            res.json({
                error : err
            })
        }
        res.json({
            message : "Tarea eliminada satisfactoriamente"
        })
    })
}