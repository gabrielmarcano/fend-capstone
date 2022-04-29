// Import the js file to test
import { checkUrlInput } from "../src/client/js/urlChecker"

// The describe() function takes two arguments - a string description, and a test suite as a callback function.  
// A test suite may contain one or more related tests    
describe("Testing the text format", () => {
    // The test() function has two arguments - a string description, and an actual test as a callback function.  
    test("Testing the formatText() function", () => {
           // Define the input for the function, if any, in the form of variables/array
           const input = 'www.theverge.com/2022/4/28/23043011/snapchat-pixy-drone-hands-on'
           // Define the expected output, if any, in the form of variables/array
           const output = true
           // The expect() function, in combination with a Jest matcher, is used to check if the function produces the expected output
           // The general syntax is `expect(myFunction(arg1, arg2, ...)).toEqual(expectedValue);`, where `toEqual()` is a matcher
           expect(checkUrlInput(input)).toEqual(output);
})});