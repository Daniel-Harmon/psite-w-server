const express = require('express');
const mongoose = require('mongoose');
const Blog = require('./blogSchema.ts');
let app = express();

//VARS FOR ROUTING
let ip = "104.38.28.206";
let port = "8081";

mongoose.connect('mongodb://localhost:27017/blogs');

mongoose.connection.once('open', () => {
    console.log('Connected to database!')
}).on('error', (error) => {
    console.log('Error connecting to database: ' + error)
})

// ***THE IP ADDRESS HERE IS LIABLE TO CHANGE***
let server = app.listen(8081, ip, function(){
    console.log("Server is running!")
})

// http://104.38.28.206:8081

// GIVE THE MAIN SITE PERMISSIONS
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });


//ADD BLOG TO DB
app.post('/create', (req, res) => {

    console.log(req.query)

    let blog = new Blog({
        id: req.query.id,
        title: req.query.title,
        tag: req.query.tag,
        date: req.query.date,
        content: req.query.content
    })

    blog.save().then(() => {
        if(blog.isNew == false){
            console.log('Saved data!')
            res.send('Saved data!')
        } else{
            console.log('Error saving data.')
        }
    })
})

//DELETE BLOG FROM DB
app.delete('/delete/:id', (req, res) => {
    Blog.deleteOne({id: req.params.id}).then(() => {
        console.log('Deleted blog: ' + req.params.id)
    }).catch((err) => {
        console.log('Error deleting blog: ' + err)
    })
})

//UPDATE BLOG IN DB
// **More difficult to implement, will come back later**


//GET ALL BLOG TAGS IN DB

app.get("/blog", (req, res) => {
    Blog.find({}).then((items) => {
        console.log('Retreived all blog tags!')
        res.send(items)
    }).catch((err) => {
        console.log('Error retreiving Blog: ' + err)
    })
})


//GET BLOG IN DB

app.get("/blog/:id", (req, res) => {
    Blog.find({id: req.params.id}).then((item) => {
        console.log('Retreived blog: ' + req.params.id)
        res.send(item)
    }).catch((err) => {
        console.log('Error retreiving data: ' + err)
    })
})