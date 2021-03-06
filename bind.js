//第二版
Function.prototype.bind2 = function (context) {
    const self = this
    let args1 = Array.prototype.slice.call(arguments, 1)

    let fBound = function(){
        let args2 = Array.prototype.slice.call(arguments)
        return self.apply(context, args1.concat(args2))
    }

    fBound.prototype = this.prototype

    return fBound
}

/***
 * 第三版
 */
Function.prototype.bind3 = function (context) {
    const self = this
    let args1 = Array.prototype.slice.call(arguments, 1)

    let fBound = function () {
        let args2 = Array.prototype.slice.call(arguments)
        return self.apply(this instanceof fBound ? this : context, args1.concat(args2))
    }

    fBound.prototype = this.prototype

    return fBound
}

/**
 * 第四版
 */
Function.prototype.bind4 = function(){
    const self = this
    let args1 = Array.prototype.slice.call(arguments, 1)

    let fn = function(){}
    let fBound = function () {
        let args2 = Array.prototype.slice.call(arguments)
        return self.apply(this instanceof fn ? this : context, args1.concat(args2))
    }
    fn.prototype = this.prototype

    fBound.prototype = new fn()

    return fBound
}


var value = 2
var foo = {
    value: 'foo'
}

function test(name, age){
    console.log(this.value)
    console.log(name)
    console.log(age)
}

var fun = test.bind2(foo, 'nsh')

var fun1 = new fun(23)






function demo(){
    this.name = 'nsh'
    console.log(this instanceof demo)
    console.log(this.__proto__ === demo.prototype)
    console.log(this.show())
    this.age = 23
    console.log(this.show())

}

demo.prototype.show = function(){console.log('show', this.name, this.age)}

var  d1 = new demo()









var obj = {
    show: (function(){
        console.log('this', this)
        console.log('obj', obj)
        return 
    })()
}


if (!Function.prototype.softBind) {
    Function.prototype.softBind = function (obj) {
        var fn = this;
        // 捕获所有 curried 参数
        var curried = [].slice.call(arguments, 1); var bound = function () {
            return fn.apply(
                (!this || this === (window || global)) ?
                    obj : this,
                    curried.concat.apply(curried, arguments)
            );
        };
        bound.prototype = Object.create(fn.prototype);
        return bound;
    };
}

function foo() {
    console.log("name: " + this.name);
}
var obj = { name: "obj" }, 
    obj2 = { name: "obj2" }, 
    obj3 = { name: "obj3" };

var fooOBJ = foo.softBind(obj);

var myf = {
    lover: 'nsh',
    test1: ()=>console.log(this.lover),
    test2: function(){
        console.log(this.lover)
    }
}
