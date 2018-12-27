/**
 * 函数柯理化
 * @param  {...any} nums 
 */
function add(...nums) {
    let total = nums.reduce((total, num) => total + num)

    add.valueOf = function () {
        return total
    }

    return add
}