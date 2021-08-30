//Load express module with `require` directive
var express = require('express')
const fs = require('fs')
var app = express()

app.set('view engine', 'pug')


//Define request response in root URL (/)
app.get('/', function (req, res) {
    var envVar = process.env.ENVVAR
    var title = process.env.TITLE
    var happy = process.env.HAPPY


    res.render('index', { happy:"Happy "+happy, title: 'Hey' + title, message: 'Hello there!' + envVar });
    //res.sendfile('index.html')
})


//Define request response in root URL (/)
app.get('/index.html', function (req, res) {
    res.sendfile('index.html')
})

//Define request response in root URL (/)
app.get('/html/index.html', function (req, res) {
    res.sendfile('html/index.html')
})

//Define request response in root URL (/)
app.get('/views/index.html', function (req, res) {
    res.sendfile('views/app_index.html')
})

//Define request response in root URL (/)
app.get('/views/enemies', function (req, res) {
    fs.readFile('config/enemies', 'utf8' , (err, data) => {
        if (err) {
            console.error(err)
            return
        }

        fs.writeFile('views/app_index.html', data, err => {
            if (err) {
                console.error(err)
                return
            }
        });

    })
    res.sendfile('views/app_index.html')
})


//Launch listening server on port 8080
app.listen(9080, function () {
    console.log('app listening on port 9080!')
})