import express from "express"
const app = express()
app.set('view engine', 'ejs')
app.use(express.static('public'))

//config to access form information
app.use(express.urlencoded({extended:false}))

app.get('/', (req, res) => {
    let title = 'Index page'
    res.render('index', {title: title})
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

    console.log(note)

})




const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log(`app is live on PORT ${PORT}...`)
})