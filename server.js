//consts to require npm packages
const express = require('express')
const parser = require('body-parser')
const hbs = require('hbs')
const path = require('path');

//get express started
const app = express();
var PORT = 3000;

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs')

app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear()
});

app.get('/', (req, res) => {
    res.render('home.hbs')
});

app.get('/survey', (req, res) => {
    res.render('survey.hbs')
});

//listen
app.listen(PORT, () => {
    console.log(`Server is up at port ${PORT}`)
})