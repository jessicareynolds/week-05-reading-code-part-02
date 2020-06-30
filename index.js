// We are using the `%` Remainder operator
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder
// and https://www.mathsisfun.com/definitions/modulo-operation.html
module.exports = function function nameThisFunction(x, y) {
    while (y) {
        const t = y
        y = x % y
        x = t
    }

    return x
}
