
/**
 * 属性为enumerable: false的key，是拷贝不过去的
 */
let obj = {
    lover: 'nsh',
    age: 23
}


Object.defineProperty(obj, 'hobby', {
    enumerable: false,
    configurable: true,
    writable: true,
    value: 'learn'
})


for(let [key, value] in obj){
    console.log(key, value)
}



class Parent {
    constructor(){
        this.position = 'Parent'
    }
    age(){
        this.age = 23
    }
}


class Child extends Parent {
    constructor(){
        super()
    }
    child(){
        console.log('child')
    }
}

let child = new Child()



