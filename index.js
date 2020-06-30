module.exports = function nameThisFunction(arr) {
    if (arr.length === 0) return 0

    const [first, ...rest] = arr

    // We have Recursion here. 
    // For more info see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#Recursion
    return first + nameThisFunction(rest)
}

