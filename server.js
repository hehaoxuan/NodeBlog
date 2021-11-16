// express app
const express = require('express') //使用express
const morgan = require('morgan')
const mongoose = require('mongoose');
const blogRoute = require('./routes/blogRoute')
const app = express(); //调用构造函数 新建app

//express app
app.set('view engine', 'ejs');
app.use(morgan('dev'))
app.use(morgan('tiny'))
app.use(express.static('public'));
app.use(express.urlencoded({
    extended: true
})) //解析URL-encoded格式请求体数据

//connect dataBase
const dbURL = 'mongodb+srv://maple:1433223@cluster0.ja0km.mongodb.net/Cluster0?retryWrites=true&w=majority'
mongoose.connect(dbURL, { //支持新版配置 隐藏旧版信息
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then((result) => {
    console.log('db success connected...');
    app.listen(3001);
}).catch((err) => {
    console.log('db error' + err);
})

//blog routes
app.use('/blogs', blogRoute)

//根路径
app.get('/', (req, res) => {
    res.redirect('blogs')
})

//about路径
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About'
    })
})

// 404
app.use((req, res) => {
    res.status(404).render('404_page', {
        title: '404-NotFound'
    })
})