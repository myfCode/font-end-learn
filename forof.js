var arr1 = [{ name: 'a' }, { name: 'b' }, { name: 'c' }]


for (let item of arr) {

    if (item.name == 'b') {
        item.age = 23
        item = 'ccc'
    }
}

var arr2 = [3, 5, 7]

for (let item of arr) {

    if (item == 5) {
        item = 10
    }
}

console.log(arr)


for (let i = 0; i < arr.length; i++) {
    item = arr[i]
    if (item.name == 'b') {
        item = 'ccc'
    }
}
console.log(arr)

