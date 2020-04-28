const db = require('../../config/serverdb');
module.exports = (app) => {
    app.post('/login', (req, res, next) => {
        let query = `SELECT id, nombre, email, password FROM USUARIO WHERE email LIKE '${req.body.user}' AND password ='${req.body.password}'`;
        db.query(query, (error, result) => {
            if (error) res.status(500).json({status: 0, message: "Error al conectarse al servidor"});
            else if (result.length > 0) res.json({status: 1, message: "Usuario valido"});
            else res.status(404).json({status:0, message: "No se encontro el usuario y password solicitados" });
        });
    });
    app.post('/register', (req, res, next) => {
        let query = `INSERT INTO USUARIO (nombre, email, password) VALUES ('${req.body.nombre}', '${req.body.email}', '${req.body.password}')`;
        db.query(query, (error, result) => {
            if (error) res.status(500).json({status: 0, message: "Error en el servidor"});
            else res.json({status: 1, message: "Usuario insertado satisfactoriamente"});
        });
    });

    app.get('/', (req, res, next) => {
        res.json({example: 1});
    })
}