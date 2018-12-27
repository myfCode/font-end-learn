function Parent (){
    this.money = 'parent money'
}

Parent.prototype.show = function(){
    console.log('parent show', this.money)
}

Parent.prototype.show1 = function () {
    console.log('parent show1', this.money)
}



function Child(){
    this.wealth = 'child money'
}

Child.prototype = new Parent()
Child.prototype.constructor = Child

Child.prototype.hey = function(){
    console.log('child hey')
}




var child = new Child()

console.log(Object.keys(child))

