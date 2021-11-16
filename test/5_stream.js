const fs =require('fs')


const readStream = fs.createReadStream('docs/txtt1.txt',{encoding:'utf-8'})
const writeStream = fs.createWriteStream('docs/txt2.txt');

readStream.on('data',(chunk)=>{
    console.log('--------new chunk---------');
    console.log(chunk);
    writeStream.write('\n NEW Chunk \n')
    writeStream.write(chunk)
})

readStream.pipe(writeStream) //使用读取Stream到writeStream