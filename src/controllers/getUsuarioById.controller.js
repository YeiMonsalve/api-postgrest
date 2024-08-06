const { connectDb } = require('../database');

async function getUsuarioById(req, res) {
    const client = await connectDb();
    const { id } = req.body
    const respuesta = await client.query('SELECT * FROM usuarios WHERE id = $1', [id]);
    if (respuesta.rows.length > 0) {
        res.send({
            'message': 'ok',
            'data': respuesta.rows
        })
    } else {
        res.send({
            'message': 'ok',
            'data': `no se encontro datos para el id ${id}`
        })
    }
}

module.exports = getUsuarioById;