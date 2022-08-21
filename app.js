import express from "express"
const app = express()
app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
    let title = 'Index page'
    res.render('index', {title: title})
})
app.get('/about', (req, res) => {
    let title = 'About page'
    res.render('about', {title: title})
})




const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
    console.log(`app is live on PORT ${PORT}...`)
})