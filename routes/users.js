const express = require("express")
const router = express.Router()
const UserController = require("../controllers/userController")

// GET ALL USERS
router.get("/", UserController.findUser)
router.get("/:id", UserController.findUserById)
router.post("/", UserController.createUser)
router.put("/:id", UserController.updateUser)
router.delete("/:id", UserController.deleteUser)

module.exports = router
