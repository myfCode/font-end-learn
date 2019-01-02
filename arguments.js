function test(a, b){
    var b = 3
    console.log(arguments)
    var a = 1;
    console.log(arguments)
    arguments[0] = 'hhh'
    console.log(arguments, a)
    arguments[1] = 'xxx'
    console.log(arguments, b)

}


function foo(num){
    if(num <= 1){
        return num
    }else{
        console.log(foo.valueOf())
        // debugger
        return num * arguments.callee.call(null, num-1)
    }
}

let bar = foo
foo = function(num){
    return 0
}

bar(10)