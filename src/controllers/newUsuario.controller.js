const { connectDb } = require('../database');

async function newUsuario(req, res) {
    const client = await connectDb();
    const {nombre, apellido, dni} = req.body
    const respuesta = await client.query('INSERT INTO usuarios (nombre, apellido, dni) VALUES ($1, $2, $3);', [nombre, apellido, dni]);
    res.send({
        message: 'ok',
        data: 'El usuario fue creado satisfactoriamente'
    });
}

module.exports = newUsuario;