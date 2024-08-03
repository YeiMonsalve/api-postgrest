const express = require('express')
const morgan = require('morgan')

const app = express()
app.set('port', 3000)
app.listen(app.get('port'))
console.log('Servidor corriendo en el puerto: ', app.get('port'))

app.use(express.json())
app.use(morgan('dev'))

app.use(require('./routes/index.routes'))