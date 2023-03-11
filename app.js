const express = require("express")
const app = express()
const port = 3000
const route = require("./routes/index")
const upload = require("./upload")

app.use(express.json())
app.use(express.urlencoded({extended: true}))

// UPLOAD FILE
app.use(upload)

// ROUTES
app.use(route)

app.listen(port, () => {
    console.log(`Server berjalan di Port ${port}`)
})
