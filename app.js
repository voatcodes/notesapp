import express from "express"
import mysql from "mysql"



const app = express()
const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'notes_app'
})

app.set('view engine', 'ejs')
app.use(express.static('public'))



//config to access form information
app.use(express.urlencoded({extended:false}))

app.get('/', (req, res) => {
    let sql= 'SELECT * FROM note'
    connection.query(
        sql, (error, results) => {
            res.render('index', {notes: results})

        }
    )
    
})
app.get('/about', (req, res) => {
    let title = 'About page'
    res.render('about', {title: title})
})

/* create-note */

app.get('/create', (req, res) => {
    res.render('create')
})

//save a note

app.post('/create', (req, res) =>{
    const note = {
        title:req.body.title,
        body:req.body.body
    }

    let sql = 'INSERT INTO note(title, body) VALUES (?,?)'

    connection.query(
        sql, [note.title, note.body], (error, results) =>{
            res.redirect('/')

        }
    )

})




const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log(`app is live on PORT ${PORT}...`)
})