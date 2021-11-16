console.log(__dirname);


var time = 0
var timer = setInterval(()=>{
    time+=2
    console.log(time+'s have passed');
    if(time>5){
        clearInterval(timer)
    }
},1000)

