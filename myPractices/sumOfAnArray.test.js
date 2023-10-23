const { sum} = require("./sumOfAnArray")

test("that sum of the array is returned", () => {
    expect(sum([1, 2, 3, 4, 5, 6, 7, 8])).toBe(36);
})