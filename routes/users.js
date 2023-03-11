const express = require("express")
const router = express.Router()
const pool = require("../config/db")

// GET ALL USERS
router.get("/", (req, res) => {
    res.json("INI MASUK KE USERS")
})

module.exports = router
