const assert = require('assert')

const nameThisFunction = require('../index.js')

// determine if we can send `nameThisFunction` an Array of Numbers
describe('nameThisFunction', function  () {
    it('does something to be determined', function () {
        // set up some test data based on what we see
        const data = ['A', 'A', 'C', 'E']
        const newData = ['B', 'D', 'Y', 'Z']

        // call the function under test and figure things out
        const result = nameThisFunction(data, newData)
        console.log(result)

        // we can only add an `assert` after we understand more
    })
})
