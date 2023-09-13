const UserController = require('../controller/UserController')
const express = require('express')
const router = express.Router()


router.route("/sign-up").post(UserController.CreatUser)
router.route("/sign-in").post(UserController.GetUser)

module.exports = router