const questions = require("./questions.json")
const questions_detail = require("./questions-details.json")

const express = require('express')
const app = express()

const accessControl = "Access-Control-Allow-Origin"

app.get("/questions/", (req, res) => {
    res.header(accessControl, "*")
    res.send(questions)
})

app.get("/questions/:id/", (req, res) => {
    res.header(accessControl, "*")
    res.send(questions_detail[req.params.id])
})

app.listen(9000)