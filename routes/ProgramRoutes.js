const {addprogram} = require('../controller/ProgramController')
const router = require('express').Router()

router.post('/addprogram', addprogram)

module.exports = router