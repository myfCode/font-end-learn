class Demo{

    show(){
        console.log(this.name, super.loverName)
    }
}
Demo.loverName = 'nsh'

let demo = new Demo()
demo.show()




class Parent {
    constructor(interest){
        this.interest = interest || 'interest'
    }

    show(){
        console.log('show')
    }

    foo(){
        console.log('foo')
    }
}

class Children extends Parent {
    constructor(hobby){
        super('child interest')
        this.hobby = hobby || 'defaultHobby'
    }

    childFun(){
        console.log('child function')
    }
}


var child = new Children('nsh')

for(let key in child){console.log(key)}



function Parent (interest){
    this.interest = interest
}

Parent.prototype = {
    show() {
        console.log('show')
    },

    foo() {
        console.log('foo')
    }
}

function Children(hobby){
    this.hobby = hobby
}   

Children.prototype = new Parent('child interest')
Children.prototype.constructor = Children

Children.prototype.childFun = function () {
    console.log('child function')
}

var child = new Children('nsh')

for (let key in child) { console.log(key) }


