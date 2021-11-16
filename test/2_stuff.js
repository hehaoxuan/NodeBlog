// #1. 使用module.exports.方法名/属性名 = 方法名/属性名的方式进行导出
var counter = function(str){
    return 'the length of this is '+str.length;
};

var adder = function(a,b){
    return `answear is ${a+b}`;
};

const pi = 3.1415929;

module.exports.counter = counter;
module.exports.adder = adder;
module.exports.pi = pi;

// #2. 使用module.exports = 方法名/属性名 的方式进行整体的导出
var chu = function(x,y){
    return x/y;
};
module.exports = chu;

// #2.1 使用 module.exports.方法名/属性名 = function(){}的方式进行导出

module.exports.plus = function(x,y){
    return x*y;
};

// #3 使用解构赋值进行
var saysomething = function(){
    console.log('hello,how are you?');
};

var roundArea = function(r){
    return pi*r*r;
};

module.exports = {
    saysomething:saysomething,
    roundArea:roundArea
}