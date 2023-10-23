const math = require("./sum")

test("that we can add two numbers", () => {
    expect(math.sum(2, 3)).toBe(5);
})

test("that we can multiply two numbers", () => {
    expect(math.multiply(2, 3)).toBe(6);
})