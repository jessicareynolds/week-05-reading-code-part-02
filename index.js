module.exports = function nameThisFunction(list) {
    var newList = []

	for(var i = 0; i < list.length; i++) {
        if (!newList.includes(list[i])) {
            newList.push(list[i])
        }
    }

    return newList
}
