// Import the js file to test
import { TestScheduler } from "jest"
import { checkForURL } from "../src/client/js/urlChecker"

describe ("Testing urlChecker functionality", () => {
    test("Testing checkForUrl() function", () => {
        expect(checkForURL("OK")).toBeTruthy();
    })
})