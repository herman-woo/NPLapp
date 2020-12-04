// Import the js file to test
import { testingJestFunction } from "../src/client/js/formHandler"

describe ("Testing Submission functionality", () => {
    test("Testing testJestFunction() function", () => {
        const testInput = 10
        const expectedOutput = 15
        expect(testingJestFunction(testInput)).toEqual(15);
    })
})