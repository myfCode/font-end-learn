let findMostTimesStr = function (str) {

    if (typeof str !== 'string') {
        throw new Error('params must be string')
    }

    let obj = {},
        mostTimesStr = [],
        times = 1;

    str = str.split('')
    let _str
    for (let i = 0, len = str.length; i < len; i++) {
        _str = str[i]

        if (obj[_str]) {
            obj[_str] = Number(obj[_str]) + 1

            // if (obj[_str] >= times) {
            //     times = obj[_str]
            //     mostTimesStr.push(_str) 
            // }

        } else {
            obj[_str] = 1
        }

    }

    times = Math.max.apply(null, Object.values(obj))
    mostTimesStr = Object.keys(obj).filter(item => obj[item] == times)

    return { mostTimesStr, times }

}






