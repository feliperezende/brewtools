// Import necessary libraries for testing (if applicable)
const assert = require('assert');
import { calculateABV } from "../../utils/abv"

// Describe the test
describe('Calculate ABV', () => {
  // Test case #1
  it('should return the correct ABV', () => {
    // Define input values
    const OG = '1065';
    const FG = '1012';

    // Define expected output
    const expected = '6.96';

    // Calculate actual output
    let _abv = calculateABV(OG, FG);    

    // Test if actual output matches expected output
    assert.strictEqual(_abv, +expected);
  });
});