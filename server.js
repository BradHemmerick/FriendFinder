//consts to require npm packages
const express = require('express')
const bodyParser = require('body-parser')
const hbs = require('hbs')
const path = require('path');
var exphbs = require("express-handlebars");

//get express started
const app = express();
var PORT = process.env.PORT || 3000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: '*/*' }))

// hbs.registerPartials(__dirname + '/views/partials');

// app.set('view engine', 'hbs')

app.use(express.static('./app'));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// hbs.registerHelper('getCurrentYear', () => {
//     return new Date().getFullYear()
// });

require("./routing/apiRoutes")(app)


app.get('/', (req, res) => {
    res.render('index')
});

app.get('/survey', (req, res) => {
    res.render('survey')
});

//listen
app.listen(PORT, () => {
    console.log(`Server is up at port ${PORT}`)
})