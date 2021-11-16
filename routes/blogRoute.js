const {
    blog_details,
    blog_create_post,
    blog_delete,
    blog_get_all,
    blog_create_get,
} = require('../controllers/blogController')

const express = require('express') //调用构造函数 新建app
const router = express.Router(); //使用express的router

//获取所有博客
router.get('/', blog_get_all)

//存取blog 重定位到/blog
router.post('/', blog_create_post)

//create路径
router.get('/create', blog_create_get)

router.get('/:id', blog_details)

router.delete('/:id', blog_delete)


module.exports = router