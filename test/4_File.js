const fs = require('fs');
const path = require('path');
const stuff = './2_stuff.js';

// # 文件属性
fs.stat('docs/redme.txt',(err,stats)=>{
    if(err){
        console.log(err);
        return;
    };
    console.log(stats.isFile());
     //判断是否为文件
    console.log(stats.isDirectory());//是否为路径
    console.log(stats.isSymbolicLink());//是否符号连接
    console.log(stats.size); //文件大小
});

// # 文件路径
console.log(path.dirname(stuff)); //获取文件夫文件夹
console.log(path.basename(stuff)); //获取文件名部分
console.log(path.extname(stuff)); //获取文件拓展名

// path.join() 用于连接路径的多个片段
// path.resolve() 获得相对路径的绝对路径计算 (若参数以斜杠开头 则为相对路径)
// path.normalize() 用于计算实际的路径

// # 写入文件
fs.writeFile('docs/redme.txt','这是一段提示文本',err=>{
    if(err){
        console.log(err);
        return;
    }
    console.log('文件写入成功');
});

// #读取文件-同步
try {
    const data = fs.readFileSync('docs/redme.txt','utf-8')
    console.log(data);
}catch(err){
    console.error(err);
};

// # 追加文件
let content = '114514'
fs.appendFile('docs/redme.txt',content,err=>{
    if(err){
        console.error(err);
        return
    }
    console.log("追加成功");
})

// # 读取文件
fs.readFile('docs/redme.txt','utf-8',(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log(data);
});

// #读取文件-同步
try{
    const data =fs.readFileSync('docs/redme.txt','utf-8')
    console.log(data);
}catch(err){
    console.error(err);
}

// #创建目录 + #删除目录
if(!fs.existsSync('test')){
    fs.mkdir('test',(err)=>{
        if(err){
            console.log(err);
        }
        console.log('folder created');
    })
    console.log('删除成功');
}else{
    fs.rmdir('test',(err)=>{
        if(err){
            console.log(err);
        }
        console.log('folder deleted');
    })
}

// # 删除文件-同步
if(fs.existsSync('docs/trash.txt')){
    fs.unlink('docs/trash.txt',(err)=>{
        if(err){
            console.log(err);
        }
    })
    console.log('删除成功');
}