var arr = [{lover: 'nsh'}]
var arrCopy = []

for(let i = 0, len = arr.length; i < len; i++){
    arrCopy[i] = arr[i]
}
console.log(arrCopy)
arrCopy[0] = 'ass'
console.log(arr)



var obj = {
    lover: 'nsh',
    age: 23,
    mylove: 'nsh'
}

// var arr = new Array(10)

// arr.fill(obj)

var copy = {}

Object.keys(obj).reduce((copy, item)=> {
    copy[item] = obj[item]
    return copy
}, copy)





