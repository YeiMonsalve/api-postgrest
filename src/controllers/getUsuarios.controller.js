const { connectDb } = require('../database');

async function getUsuarios(req, res) {
    const client = await connectDb();
    const respuesta = await client.query('SELECT * FROM usuarios');
    res.send({
        message: 'ok',
        data: respuesta.rows
    });
}

module.exports = getUsuarios;