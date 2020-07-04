const User = require('./authDao');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const SECRET_KEY = 'esto_deberia_cambiar_periodicamente';

exports.createUser = (req, res, next) => {
    console.log("que llega ", req.body)
    const newUser = {
        name: req.body.name,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password)
    }

    User.create(newUser, (err, user) => {
        if (err && err.code === 11000) return res.status(409).send('Email ya ha sido registrado');

        if(err) return res.status(500).send('Error creando Usuario'+err);

        const expiresIn = 24*60*60; //TODO esto debería ser una constante definida con el cliente
        const accessToken = jwt.sign({id: user.id},
            SECRET_KEY, 
            {expiresIn: expiresIn});
        
        const responseBody = {
            userId: user.id,
            name: user.name,
            email: user.email,
            accessToken: accessToken,
            expiresIn: expiresIn
        }
        
        //responder usuario
        res.send({responseBody});
    });

}

exports.loginUser = (req, res, next) => {
    const userData = {
        email: req.body.email,
        password: req.body.password
    }
    console.log('----->pego login', req.body);

    User.findOne({ email: userData.email }, (err, user) => {
        if(err) res.status(500).send('Error en al tratar de loguear') 
        //TODO crear un archivo de constantes y no quemar strings

        if(!user){
            //email no existe
            res.status(409).send({message: 'Error al tratar de loguear'}); //TODO no quemar esto
        }else{
            const resultPassword = bcrypt.compareSync(userData.password, user.password);
            if(resultPassword){
                const expiresIn = 24*60*60; //TODO no quemar esto
                const accessToken = jwt.sign({id: user.id}, 
                    SECRET_KEY,
                    {expiresIn: expiresIn});
                
                
                const responseBody = {
                    userId: user.id,
                    name: user.name,
                    email: user.email,
                    accessToken: accessToken,
                    expiresIn: expiresIn
                }
                res.send({ responseBody });
            } else{
                //contraseña incorrecta
                res.status(409).send({message: 'Error al tratar de loguear'});//TODO no quemar esto
            }
        }
    })
}