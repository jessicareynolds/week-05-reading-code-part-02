// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
module.exports = function nameThisFunction(val1, val2) {
    let newList = [];

    while (val1.length && val2.length) {
        if (val1[0] <= val2[0]) {
            newList.push(val1.shift());
        } else {
            newList.push(val2.shift());
        }
    }

    return newList.concat(val1).concat(val2);
};
