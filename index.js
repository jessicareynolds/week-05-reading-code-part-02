module.exports = function nameThisFunction(arr) {
    if (arr.length === 0) return 0

    const [first, ...rest] = arr

    return first + nameThisFunction(rest)
}

