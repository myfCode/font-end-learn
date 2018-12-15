
let add = function (a, b) {
    let sum = 0,
        overflow = 0;

    sum = Number(a) + Number(b)

    if (sum > 10) {
        overflow = String(sum).slice(0, 1)
    }

    return { sum: String(sum), overflow: String(overflow) }
}


let infinityAdd = function (a, b) {
    a = String(a)
    b = String(b)

    let aArr = a.split('')
    let bArr = b.split('')

    aArr.unshift('')
    bArr.unshift('')
    let len = Math.max(aArr.length, bArr.length)

    let temp, sumArr = [];
    for (let i = len - 1; i >  0; i--) {
        temp = add(aArr[i], bArr[i])
        sumArr.unshift(temp.sum)

        let overflow = Number(temp.overflow)
        if (overflow > 0){
            aArr[i - 1] = Number(aArr[i - 1]) + overflow
        }

    }

    return sumArr.join('')
}

console.log(infinityAdd('11111111111111111111', '22222222222222222222'))


