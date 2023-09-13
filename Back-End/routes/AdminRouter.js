const AdminController = require('../controller/AdminController')
const express = require('express')
const router = express.Router()


router.route("/add").post(AdminController.CreatUser)
router.route("/delete/:id").delete(AdminController.DelUser)
router.route("/update/:id").patch(AdminController.UpdateUsers)
router.route("/").get(AdminController.GetAllUsers)


module.exports = router