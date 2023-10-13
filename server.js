const express = require('express');
const mongoose = require('mongoose');
const Blog = require('./blogSchema.ts');
const path = require('path');
let app = express();

//VARS FOR ROUTING
let ip = "localhost";
let port = "4200";

mongoose.connect('mongodb://localhost:27017/blogs');

mongoose.connection.once('open', () => {
    console.log('Connected to database!')
}).on('error', (error) => {
    console.log('Error connecting to database: ' + error)
})

let server = app.listen(port, ip, function(){
    console.log("Server is running!")
})

// http://104.38.28.206:8081

// GIVE THE MAIN SITE PERMISSIONS
app.use(express.static(path.join(__dirname, '/dist')));

// GET MATHJAX FILES
app.get('/tex-svg.js', (req, res) => {
    console.log("I AM WORKING!")
    res.sendFile(path.resolve('node_modules/mathjax/es5/tex-svg.js'));
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

app.get('*', (req,res) => {
    res.sendFile(path.resolve('dist/daniel-harmon.com/index.html'));
});