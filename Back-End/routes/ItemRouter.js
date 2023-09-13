const ItemController = require('../controller/ItemController')
const express = require('express')
const router = express.Router()


router.route("/sign-up").post(ItemController.CreatUser)
router.route("/sign-in").post(ItemController.GetUser)

module.exports = router