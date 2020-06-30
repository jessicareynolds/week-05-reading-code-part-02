module.exports = function nameThisFunction(x, y) {
    if (y === 0) return 0
    if (y === 1) return x

    return x * nameThisFunction(x, y - 1)
}


