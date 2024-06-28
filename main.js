//TEMPLATE ENGINES

//ejs stands for embedded javascript
//https://github.com/mde/ejs/wiki/Using-EJS-with-Express
const express = require('express')
const app = express()
const port = 3000


app.set('view engine', 'ejs');//TEMPLATE ENGINES


app.get('/', (req, res) => {
    let sitename = "adidas";
    let searchText = "Search Now"
    //res.sendFile('./templates/index.html',{root:__dirname})
    let arr = [1,2,3,4,5,6,7,8,9]
    res.render('index', {siteName:sitename, searchText:searchText, arr});
})

app.get('/blog/:slug', (req, res) => {
    let title = "Adidas";
    let content = "Wassup bro"
    //res.sendFile('./templates/blogpost.html',{root:__dirname})
    res.render('./templates/blogpost.html',{blogTitle:title,blogContent:content})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
