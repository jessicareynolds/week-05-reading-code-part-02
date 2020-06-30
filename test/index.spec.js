const assert = require('assert')

const nameThisFunction = require('../index.js')

// determine if we can send `nameThisFunction` an Array of Strings
describe('nameThisFunction', function  () {
    it('does something to be determined', function () {
        const testArray = ['A', 'B', 'C', 'D', 'E']

        const result = nameThisFunction(testArray)

        // we can only add an `assert` after we understand more
    })
})

// determine if we can send `nameThisFunction` an Array of Numbers
describe('nameThisFunction', function  () {
    it('does something to be determined', function () {
        const testArray = [0, 5, 10, 15, 20, 25, 30, 35]

        const result = nameThisFunction(testArray)

        // we can only add an `assert` after we understand more
    })
})
