let p1 = new Promise((resolve) =>{
    //console.log('p1')
    resolve(1)
})
let p2= new Promise((resolve, reject) =>{
    console.log('p2')
    // setTimeout(() => reject(2))
    reject(2)
    
}).catch(err => console.log('error', err)
).then(res => {
    //console.log('p2 1')
}).then(() => {
    //console.log('p2 2')
}).then(() => {
    //console.log('p2 3')
}).then(() => {
    //console.log('p2 4')
    // return 'p2 resolve'
}).then(res => {
    //console.log('p2 5')
}).then(() => {
    //console.log('p2 6')
}).then(() => {
    //console.log('p2 7')
}).then(() => {
    //console.log('p2 8')
    return 'p2 resolve'
})


async function fun (){
    console.log('fun')
   let res =  await p2
   return res
}



let p3= new Promise((resolve) =>{
    //console.log('p3')
    resolve(3)
})
let p4 = new Promise((resolve) =>{
    //console.log('p4')
    resolve(4)
})

let p5 = async function h(a){
    //console.log('p5 a', a)
    let res = await Promise.resolve(a + '===')
    return res
}

async function test1(){
    console.log('test1 inner')
    let $p1 = await fun()
    console.log('test1 $p1', $p1)
    let $p2 = await fun()
    console.log('test1 $p2', $p2)

    let $p = await 999
    console.log('test1 $p', $p)  

}

let p6 = new Promise((resolve)=>{
    console.log('p6')
    resolve('p6')
}).then(res => {
    // console.log('p6 1')
}).then(()=>{
    // console.log('p6 2')
}).then(()=>{
    // console.log('p6 3')
}).then(()=>{
    // console.log('p6 4')
}).then(res => {
    // console.log('p6 5')
}).then(() => {
    // console.log('p6 6')
}).then(() => {
    // console.log('p6 7')
}).then(() => {
    // console.log('p6 8')
})


async function test2 (){
    console.log('test2 inner')
    let $p3 = await p3
    console.log('test2 $p3', $p3)

    let $p4 = await p4
    console.log('test2 $p4', $p4)

    let $p5 = await p5($p4)

    console.log('test2 $p5', $p5)
}



console.log('start')
test1()
test2()
console.log('end')