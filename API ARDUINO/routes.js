const express = require('express')
const FluxoDAgua = require('./controller/FluxoDagua')
const routes = express.Router()

routes.get('/data/',FluxoDAgua.fluxo)

module.exports = routes