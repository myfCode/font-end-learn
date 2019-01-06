function * gen(){
    yield 'a'
    yield timeout()
    yield 'e'
    return 'f'
}

let timeout = function *(){
    yield 'time out '
    setTimeout(function *(){
        yield 'time out inner'
    }, 3)
}

let run = function(gen){
    let fun = gen()

    function next(){
        let res = fun.next()
        if(res.done) {
            console.log('final', res)
            return res.value
        }

        console.log('value', res.value)

        next()
    }

    return next()
}

run(gen)



