// express app
const express = require('express') //使用express
const morgan = require('morgan')
const mongoose = require('mongoose');
const {
    result
} = require('lodash');

const Blog = require('./models/blog')

const app = express(); //调用构造函数 新建app
//connect dataBase
const dbURL = 'mongodb+srv://maple:1433223@cluster0.ja0km.mongodb.net/Cluster0?retryWrites=true&w=majority'
mongoose.connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then((result) => {
    console.log('db success connected...');
}).catch((err) => {
    console.log('db error' + err);
})

//express app
app.set('view engine', 'ejs');
app.use(morgan('dev'))

// listen for requests
app.listen(3001);
const blogs = [{
    title: 'coming home',
    content: 'You could have tried a little harder, You could have been a little stronger;'
}, {
    title: 'Wasted Summer',
    content: 'Like the sea,Like the sea'
}, {
    title: 'hello world',
    content: 'hello my node'
}];

// app.use((req,res,next)=>{
//     console.log('reqpath:',req.path);
//     console.log('reqmethod:',req.method);
//     console.log('requrl:',req.url);
//     next();
// })

app.use(morgan('tiny'))
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.redirect('blogs')
})

app.get('/all-blogs',(req,res)=>{
    Blog.find().then((result)=>{
        res.send(result)
    }).catch((err)=>{
        console.error(err);
    })
})

app.get('/blogs', (req, res) => {
    // res.sendFile('./views/index.html',{root:__dirname})
    Blog.find().sort({createdAt:-1}).then(result=>{
        res.render('index', {
            title: 'All Blogs',
            blogs: result
        });
    }).catch((err)=>{
        console.log(err);
    })

})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About'
    })
})

app.get('/blogs/create', (req, res) => {
    res.render('create', {
        title: 'Create'
    })
})

// redirects
app.get('/about-us', (req, res) => {
    res.redirect('/about', {
        title: 'About'
    })
})

app.get('/information/username', (req, res) => {
    res.json([{
            id: Math.random() * 100,
            userName: 'hhx'
        },
        {
            id: Math.random() * 100,
            userName: 'ymm'
        }
    ])
})

// 404
app.use((req, res) => {
    res.status(404).render('404_page', {
        title: '404-NotFound'
    })
})