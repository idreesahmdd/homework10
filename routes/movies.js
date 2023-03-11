const express = require("express")
const router = express.Router()
const MovieController = require("../controllers/movieController")

router.get("/", MovieController.findMovie)
router.get("/:id", MovieController.findMovieById)
router.post("/", MovieController.createMovie)
router.put("/:id", MovieController.updateMovie)
router.delete("/:id", MovieController.deleteMovie)

module.exports = router
