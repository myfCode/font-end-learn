var num = 2
var obj = {
    num: 4,
    fn1: (function(){
        this.num *= 2
        num = num * 2
        var num = 3
        return function(){
            this.num = 2
            num *= 3
            console.log(num)
        }
    })(),

    obj2: function(){
        this.num *= 2
    }
}

var fn1 = obj.fn1

console.log(num) //4

fn1() //9

console.log(num) //2


let add = ()=>console.log(a)


