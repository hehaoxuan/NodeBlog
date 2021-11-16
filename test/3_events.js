const EventEmitter = require('events');
const myEvent = new EventEmitter();


class Person extends EventEmitter.EventEmitter{
    constructor(name){ //创建和初始化class创建的对象的特殊方法
        super(); //调用父类的构造方法
        this.name = name; //
    }
}

var jams = new Person('jams')
var mary = new Person('mary')
var windy = new Person('windy')

var people = [jams,mary,windy]

people.forEach((person)=>{
    person.on('speak',function(msg){
        console.log(person.name+' said: '+msg );
    })
})

jams.emit('speak','hey dudes')

// .on 绑定/监听事件
// myEvent.on('start',(number)=>{ 
//     console.log('start!'+number);
// })

// .emit 触发事件
// myEvent.emit('start',22);