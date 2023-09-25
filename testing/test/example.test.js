const addition = require("../index");
describe("Addition", () => {
    test("returns true if it performs additions", () => {
      expect(addition(2,3)).toBe(5);
    });
  
    test("throws an error if number is negative", () => {
      expect(() => addition(-1)).toThrow();
    });
  
    test("throws an error if number is not a number", () => {
      expect(() => addition("1")).toThrow();
    });
  });