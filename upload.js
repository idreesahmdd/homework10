const express = require("express")
const router = express.Router()
const multer = require("multer")
const path = require("path")
const pool = require("./config/db")

const diskStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "/upload"))
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "-" + Date.now() + path.extname(file.originalname))
    },
})

router.post("/upload", multer({storage: diskStorage}).single("photo"), (req, res) => {
    const file = req.file.path
    const {title, genres, year} = req.body

    if (!file) {
        res.status(400).json({
            message: "No file is selected",
        })
    } else {
        const createMovie = `
            INSERT INTO movies (title,genres,year,photo)
                VALUES
                    ($1,$2,$3,$4)
        `

        pool.query(createMovie, [title, genres, year, req.file.filename], (err, result) => {
            if (err) throw err
            else {
                res.status(200).json({
                    message: "Upload file success",
                })
            }
        })
    }
})

router.use("/upload", express.static(path.join(__dirname, "upload")))

module.exports = router
