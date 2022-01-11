const express = require("express")
const cors = require("cors")

const {getAllHouses, deleteHouse, createHouse, updateHouse} = require("./controller.js")

const app = express()

//Middleware
app.use(express.json())
app.use(cors())

//endpoints
app.get("/api/houses",getAllHouses)

app.delete("/api/houses/:id", deleteHouse)

app.post("/api/houses", createHouse)

app.put("/api/houses/:id", updateHouse)


app.listen(5500, ()=>{
    console.log("port is running on 5500")
})