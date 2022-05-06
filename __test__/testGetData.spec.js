import { enableFetchMocks } from 'jest-fetch-mock'
enableFetchMocks()

// Import the js file to test
import { getData } from "../src/client/js/getData"

describe("Testing the getData functionality", () => {  
    test("The data from the server is defined", () => {

        expect(getData('http://localhost:8081/data')).toBeDefined();
    })
});