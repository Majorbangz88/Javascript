const anyName = require("./introduction")

test("That it introduces the person", () => {
    expect(anyName.introducer("Joel", "White")).toBe("My name is Joel and the color of my shirt is White");
}) 

test("That it introduces me", () => {
    expect(anyName.introducers("Joel", "White", 100000, 50000)).toBe("My name is Joel, the color of my shirt is White and my networth is $50000")
})