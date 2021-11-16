const fs = require('fs');
const http = require('http') //使用http模块
//使用创建服务 等待连接
const server = http.createServer((req,res)=>{
    console.log(req.url,req.method); //获取请求url及请求响应
    res.setHeader('Content-Type','text/html');
    let routerUrl = '/';
    switch(req.url){
        case '/':
            routerUrl = 'views/index.html';
            res.statusCode = 200;
            break;
        case '/about':
            routerUrl = 'views/about.html';
            res.statusCode = 200;
            break;
        case '/about-site':
            res.statusCode = 301; //资源重定向 表示资源被永久移动到一个地方
            res.setHeader('Location','/about');
            res.end();
            break;
            // 资源重定向
        default:
            routerUrl = 'views/404_page.html';
            res.statusCode = 404;
            break;
    }

    fs.readFile(routerUrl,(err,data)=>{
        if(err){
            console.error(err);
            res.end();
        }else{
            res.write(data);
            res.end();
        }
    })
});

//服务器监听(port端口号,host 用户名,回调函数)
server.listen(3000,'localhost',()=>{
    console.log('listen for requests on port 3000');
});
