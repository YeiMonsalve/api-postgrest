const { Router } = require('express')
const getUsuarios = require('../controllers/getUsuarios.controller')
const getUsuarioById = require('../controllers/getUsuarioById.controller')
const newUsuario = require('../controllers/newUsuario.controller')
const editUsuario = require('../controllers/editUsuario.controller')
const deleteUsuario = require('../controllers/deleteUsuario.controller')

const router = Router()

router.get('/getUsuarios', getUsuarios)
router.get('/getUsuariosById', getUsuarioById)
router.post('/newUsuario', newUsuario)
router.put('/editUsuario', editUsuario)
router.delete('/deleteUsuario', deleteUsuario)

module.exports = router