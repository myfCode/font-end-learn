//方法一
let maxLenStr1 = function (str) {
    let _str = String(str)

    let _strList = _str.split('')
    _strList = [...new Set(_strList)]

    let maxStr = ''
    let arr = []
    for (let i = 0, len = str.length; i < len; i++) {
        for (let j = len - 1; j > i; j--) {
            maxStr = str.slice(i, j + 1)

            if (_strList.every(item => maxStr.indexOf(item) === maxStr.lastIndexOf(item))) {
                // console.log(maxStr)
                arr.push(maxStr)
                break;
            }

        }
    }
    if(!arr.length) return {}

    arr.sort((a, b) => a.length - b.length)
    // console.log('arr', arr)
    let maxLen = arr[arr.length - 1].length
    let maxLongStrs = arr.filter(item => item.length == maxLen)
    return {maxLongStrs, maxLen}
}

//方法二 有bug
let maxLenStr2 = function (str) {
    let _str = String(str)

    let maxLenStr = '',
        arr = [],
        maxLen = 0;
    for (let i = 0, len = _str.length; i < len; i++) {
        maxLenStr = _str.slice(i)

        let element = maxLenStr[0]
        let maxLenStrArr = maxLenStr.split(element)
        maxLenStr = element + '' + maxLenStrArr[1]
        _len = maxLenStr.length
        for (let j = 1; j < _len; j++) {
            element = maxLenStr[j]
            if (element == undefined) continue

            let index = maxLenStr.indexOf(element)
            let lastIndex = maxLenStr.lastIndexOf(element)
            if (index === lastIndex) {
                maxLen = index + 1 > maxLen ? index + 1 : maxLen
                arr.push(maxLenStr.slice(0, index + 1))
                continue
            }

            maxLenStr = maxLenStr.slice(0, maxLenStr.slice(index).indexOf(element) + index + 1)
            j--

        }
    }

    // console.log(arr)

    let maxLenStrs = arr.filter(item => item.length == maxLen)

    return { maxLen, maxLenStrs }

}