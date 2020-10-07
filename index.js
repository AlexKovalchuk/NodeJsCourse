const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path');

const app = express()

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Main Page',
        isHome: true,
    })
})

app.get('/add', (req, res) => {
    res.render('add', {
        title: 'Add Course',
        isAdd: true,
    })
})
app.get('/courses', (req, res) => {
    res.render('courses', {
        title: 'Courses',
        isCourses: true
    })
})


const PORT = process.env.PORT || 3000;

app.listen(3000, () => {
    console.log('Server was started on port ${PORT}.');
})


