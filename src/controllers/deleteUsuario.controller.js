const { connectDb } = require('../database');

async function deleteUsuario(req, res) {
    const client = await connectDb();
    const {id} = req.body
    const respuesta = await client.query('delete from usuarios where id = $1', [id]);
    res.send({
        message: 'ok',
        data: 'El usuario fue eliminado satisfactoriamente'
    });
}

module.exports = deleteUsuario;