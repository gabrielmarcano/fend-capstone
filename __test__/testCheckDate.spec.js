// Import the js file to test
import { thisWeek } from "../src/client/js/checkDate"

describe("Testing the date checker function", () => {
    test("The function returns true", () => {

        const input = new Date(2050, 5);

        expect(thisWeek(input)).toBeFalsy();
    })
});