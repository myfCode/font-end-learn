var arr = [{ lover: 'nsh' }]
var arrCopy = []

for (let i = 0, len = arr.length; i < len; i++) {
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

Object.keys(obj).reduce((copy, item) => {
    copy[item] = obj[item]
    return copy
}, copy)


this.gaps = [5, 3, 1]
function shellsort() {
    for (var g = 0; g < this.gaps.length; ++g) {
        for (var i = this.gaps[g]; i < this.dataStore.length; ++i) {
            var temp = this.dataStore[i];
            for (var j = i; j >= this.gaps[g] && this.dataStore[j - this.gaps[g]] > temp; j -= this.gaps[g]) {
                this.dataStore[j] = this.dataStore[j - this.gaps[g]];
            }
            this.dataStore[j] = temp;
        }
    }
}

function insertSort(){
    for(let i = 0; i < arr.length; i++){
        
    }
}



var proto = {
    lover: 'nsh'
}

var obj = Object.create(proto)


