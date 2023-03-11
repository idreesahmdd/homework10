const express = require("express")
const router = express.Router()
const moviesRoute = require("./movies")
const usersRoute = require("./users")

//  ROUTES MOVIES
router.use("/movies", moviesRoute)

//  ROUTES USERS
router.use("/users/", usersRoute)

module.exports = router
