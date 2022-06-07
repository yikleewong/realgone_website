
const express = require('express')
const bodyParser = require( 'body-parser')
const cors = require( 'cors')
const mysql = require( 'mysql')


const app =express()
const PORT = 3001


const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'RealGoneDataBase',
})

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true}))


//get qna from mysql
app.get('/qna/get', (req, res) => {
    const sqlSelect = "SELECT * from question_and_answer"
    db.query(sqlSelect, (err, result) => {
        if(err){
            console.log(err)
        } else {
            console.log("success get qna")
            // console.table(result)
            res.send(result)
        }
    })
})

//put contact to mysql
app.post('/enquiry/post', (req, res)=>{

    const contact_method = req.body.conMethod
    const content = req.body.content

    const sqlInsert = "INSERT INTO contact (contact_method, content) VALUES (?,?)"
    db.query(sqlInsert, [contact_method, content], (err, result) => {
        if(err){
            console.log(err)
        } else {
            console.log("success post enquiry")
            res.send(result)
        }
    })
})

app.listen(PORT, () => {
    console.log(`running on ${PORT}`)
})