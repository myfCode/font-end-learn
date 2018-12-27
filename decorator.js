// @annotation
// class MyClass { }

// function annotation(target) {
//     target.annotated = true;
// }

// var class1 = new MyClass()

// console.log(class1)
// console.log('annotated', class1.annotated)
// console.log('MyClass annotated', MyClass.annotated)

// class Person{
//     get sexx(){
//         console.log('get sex, so beautiful')
//     }
//     set sexx(value){
//         console.log('set sex', value)
//     }
// }



// function testable(isTestable) {
//     return function (target) {
//         target.isTestable = isTestable;
//     }
// }

// @testable(false)
// class MyTestableClass { }

// console.log(MyTestableClass.isTestable)


// function mixins(...list) {
//     console.log('list', list)
//     return function (target) {
//         Object.assign(target.prototype, ...list)
//     }
// }


// const Foo = {
//     foo() { console.log('foo') }
// };

// @mixins(Foo)
// class MyClass { }


// console.log(MyClass.toString())

// var test = new MyClass()
// console.log(test)
// console.log(test.foo())


function readonly(target, name, descriptor) {
    // descriptor对象原来的值如下
    // {
    //   value: specifiedFunction,
    //   enumerable: false,
    //   configurable: true,
    //   writable: true
    // };
    descriptor.writable = false;
    return descriptor;
}

class Person {
    @readonly
    name() { return `${this.first} ${this.last}` }
}

Person.prototype.name = 'nsh'

console.log(Person.prototype.name)



