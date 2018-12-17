var arr = [4, 3, 6, 7, 1, 9, 0]

//冒泡排序
let sort1 = function (arr) {

    let temp
    let len = arr.length
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if (arr[i] > arr[j]) {
                temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
            }
        }
    }

    return arr
}


//快速排序
let sort2 = function _sort_(arr) {

    let len = arr.length
    if (len <= 1) return arr

    let middleIndex = Math.ceil(arr / 2)
    let baseArr = arr.splice(middleIndex, 1)
    let base = baseArr[0]

    let left = []
    let right = []

    let current
    for (let i = 0; i < len - 1; i++) {
        current = arr[i]
        if (arr[i] == base){
            baseArr.push(current)
        } 
        if (arr[i] > base) {
            right.push(current)
        }
        if (arr[i] < base) {
            left.push(current)
        }
    }

    return _sort_(left).concat(baseArr, _sort_(right))
}





//生成长度为len的随机数
let randomNum  = function(len){
    function _createNum(){
        return (Math.random() * 100 + '').split('.')[0]
    }
    let arr = []
    for(let i = 0; i < len; i++) arr.push(+_createNum())
    return arr
}
