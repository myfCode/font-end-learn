'use strict';

var _getOwnPropertyDescriptor = require('babel-runtime/core-js/object/get-own-property-descriptor');

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _desc, _value, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

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

var Person = (_class = function () {
    function Person() {
        (0, _classCallCheck3.default)(this, Person);
    }

    (0, _createClass3.default)(Person, [{
        key: 'name',
        value: function name() {
            return this.first + ' ' + this.last;
        }
    }]);
    return Person;
}(), (_applyDecoratedDescriptor(_class.prototype, 'name', [readonly], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'name'), _class.prototype)), _class);


Person.prototype.name = 'nsh';

console.log(Person.prototype.name);
