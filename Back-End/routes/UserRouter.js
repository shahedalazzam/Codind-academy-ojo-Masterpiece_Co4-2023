const UserController = require('../controller/UserController')
const express = require('express')
const router = express.Router()


router.route("/sign-up").post(UserController.CreatUser)
module.exports = router