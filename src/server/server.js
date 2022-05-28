const questions = require("./questions.json")
const questions_detail = require("./questions-details.json")

const colleges = require("./colleges.json")
const colleges_detail = require("./colleges_details.json")

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

app.get("/colleges", (req, res) => {
    res.header(accessControl, "*")
    res.send(colleges)
})

app.get("/colleges/:id/", (req, res) => {
    res.header(accessControl, "*")
    res.send(colleges_detail[req.params.id])
})

app.listen(9000)