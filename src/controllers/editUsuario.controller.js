const { connectDb } = require('../database');

async function editUsuario(req, res) {
    const client = await connectDb();
    const {id, nombre, apellido, dni} = req.body
    const respuesta = await client.query('update usuarios set nombre = $1, apellido = $2, dni = $3 where id = $4', [nombre, apellido, dni, id]);
    res.send({
        message: 'ok',
        data: 'El usuario fue editado satisfactoriamente'
    });
}

module.exports = editUsuario;