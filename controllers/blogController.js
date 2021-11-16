const Blog = require('../models/blog')

const blog_details = (req, res)=>{ //使用:表示动态的参数
    const id = req.params.id
    Blog.findById(id).then(result => {
        res.render('details', {blog: result,title: 'Blog Details'
        })
    }).catch(err => {
        console.log(err);
        res.render('404',{title:'Blog not found'})
    })
}

const blog_create_get = (req, res) => { //重定向create界面
    res.render('create', {
        title: 'create'
    })
}

const blog_create_post = (req, res) => { //存储博客 并重定向到blogs
    const blog = new Blog(req.body);
    blog.save().then(() => {
        res.redirect('/blogs');
    }).catch((err) => {
        console.log(err);
    })
}

const blog_delete = (req,res)=>{
    const id = req.params.id;
    console.log(id);
    Blog.findByIdAndDelete(id).then(result=>{
        res.json({redirect:'/blogs'})
    }).catch(err=>{
        console.log(err);
    })
}

const blog_get_all = (req, res) => {
    // res.sendFile('./views/index.html',{root:__dirname})
    Blog.find().sort({
        createdAt: -1
    }).then(result => { //发现博客所有的内容并按照创建事件降序
        res.render('index', {
            title: 'All Blogs',
            blogs: result
        });
    }).catch((err) => {
        console.log(err);
    })
}

module.exports = {
    blog_details,
    blog_create_get,
    blog_create_post,
    blog_delete,
    blog_get_all,
}