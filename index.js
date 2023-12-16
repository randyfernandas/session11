const express = require('express')
require('dotenv').config()
const app = express()
const mysql = require('mysql2')

const PORT = process.env.APPLICATION_PORT
// const PORT = 8000

const connection = mysql.createConnection({
    host: process.env.DATABASE_IP,
    database: process.env.DATABASE_NAME,
    user: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD
})

connection.connect()

app.get("/task", (req,res,next) =>{
    connection.query("SELECT * FROM task", (err, rows, fields) =>{
        res.status(200).send(rows)
    })
})

app.post("/task", (req,res,next) => {

})

app.listen(PORT, () => {
    console.log("Server is running at " + PORT)
})