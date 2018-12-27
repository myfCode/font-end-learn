
'use strict';
let obj = {
    name: {
        age: {
            lover1: ()=>console.log(this),
            lover2: function(){
                console.log(this === obj.name.age)
            }
        }
    }
}

console.log(obj.name.age.lover1())
console.log(obj.name.age.lover2())