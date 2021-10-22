const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/nodekb');
let db = mongoose.connection;
const bodyParser= require('body-parser') 


//Check connection.
db.once('open',()=>{
   console.log('Connected to MongoDB') 
})

//Check DB for errors. 
db.on('error',(err)=>{
 console.log(err);
})
//Init App
const app = express();

//Bring in models
let Article = require('./models/article');

//Load View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//Body Parser Middleware
//parse application/x-www-form urlencoded
app.use(bodyParser.urlencoded({extended: true}))

//parse application/json
app.use(bodyParser.json())

//Home Route
app.get('/', (req, res) => {

    Article.find({},(err,articles)=>{
        if(err){
           console.log(err); 
        }else{
            res.render('index', {
                title: 'Home Page',
                articles:articles
            });
        }
        
    });
    
    
});
// Add Route
app.get('/articles/add', (req, res) => {
    res.render('add_articles', {
        title: 'Add Article'
    });

});

//Add submit POST Route
app.post('/articles/add',(req,res)=>{
  let article = new Article();
  article.title = req.body.title;
  console.log(req.body.title);
 return
})

//Start Server 
app.listen(5000, () => {
    console.log('server running on port 5000...')
})