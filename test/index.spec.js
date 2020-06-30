const assert = require('assert')

const nameThisFunction = require('../index.js')

// determine if we can send `nameThisFunction` a String parameter
describe('nameThisFunction', function  () {
    it('does something to be determined', function () {
        // https://www.youtube.com/watch?v=Fig956-MuVA
        const testString = "Cotton-Headed Ninny Muggins"

        const result = nameThisFunction(testString)

        // we can only add an `assert` after we understand more
    })
})

// determine if we can send `nameThisFunction` an Array parameter
describe('nameThisFunction', function  () {
    it('does something to be determined', function () {
        const testArray = ['A', 'B', 'C', 'D', 'E']

        const result = nameThisFunction(testArray)

        // we can only add an `assert` after we understand more
    })
})
