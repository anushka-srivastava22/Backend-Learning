const express = require('express');
const Blog = require('./modules/blogs'); //Create new instance of blog here
const app3 = express();
const mongoose = require('mongoose');
//connect to mongodb
const dbURI = 'mongodb+srv://ajay234:anushka1@backend.qb7qk.mongodb.net/nodep?retryWrites=true&w=majority';
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true });
 .then((result) => {app3.listen(3000)});
 .catch((err) => {console.log(err)});

app3.get('/add-blog' , (req , res) => {
    const blogs = new blogs({
        title: 'new blog',
        body: 'more about new blog';
    });
    blogs.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
             console.log(err);
        });
})

app3.get('/blogs' , (req , res) => {
    const blogs = new blogs(req.body);

    blogs.save()
        .then((result) => {
            res.redirect(result)
        })
        .catch((err) => {
             console.log(err);
        });
});



app3.set('view engine' , 'ejs')

app3.get('/',(req , res) => {
    res.render('index');
});

app3.get('/about',(req , res) => {
    res.render('about');
});

//redirect

app3.get('/about-us',(req , res) => {
    res.redirect('/about');
});

//404 page
app3.use((req,res) => {
    res.send('./views/404.html' , {root: __dirname});
});