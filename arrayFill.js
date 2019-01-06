Array.prototype.fill = function (fn, start, end) {
    let len = this.length

    start = start || 0
    end = end || len - 1

    for (let i = start; i <= end; i++) {
        this[i] = typeof fn === 'function' ? fn(i) : fn
    }

    return this

}

var arr = new Array(10)

arr.fill(function (index) {
    console.log('index', index)
    return index + 'fill'
}, 3, 7)



Array.prototype.matrix = function (numrows, numcols, initial) {
    var arr = [];
    for (var i = 0; i < numrows; ++i) {
        var columns = [];
        for (var j = 0; j < numcols; ++j) {
            columns[j] = initial;
        }
        arr[i] = columns;
    }
    return arr;
}







