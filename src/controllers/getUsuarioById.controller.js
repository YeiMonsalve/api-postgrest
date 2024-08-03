const { connectDb } = require('../database');

async function getUsuarioById(req, res) {
    const client = await connectDb();
    const {id} = req.body
    const respuesta = await client.query('SELECT * FROM usuarios WHERE id = $1', [id]);
    res.send({
        message: 'ok',
        data: respuesta.rows
    });
}

module.exports = getUsuarioById;