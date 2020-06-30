'use strict'

const authRoutes = require('./auth/authRoutes');
const tareaRoutes = require('./tarea/tareaRoute');
const express = require('express');
const properties = require('./confing/properties');
const DB = require('./confing/db');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwtMiddleware = require('express-jwt-middleware');

//inicializar base de datos
DB();

const app = express();
const router = express.Router();

const bodyParserJSON = bodyParser.json();
const bodyParserURLEncode = bodyParser.urlencoded({ extended: true});

//middlewares
app.use(bodyParserJSON);
app.use(bodyParserURLEncode);
app.use(cors()); //TODO configurar cors dependiendo del entorno
//TODO cambiar en string por un objeto definido en properties
var jwtCheck = jwtMiddleware('esto_deberia_cambiar_periodicamente'); 



app.use('/api', router);
authRoutes(router);
tareaRoutes(router);
router.get('/', (req, res) =>{
    res.send('api de tareas');
});
app.use(router);



app.listen(properties.PORT, ()=> console.log(`Server runing on port ${properties.PORT}`));


