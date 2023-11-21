const { subset } = require("./subsequence");

test("That function returns true when a check is done", () =>{
    expect(subset("adona", "meanderona")).toBe(true);
});

// test("That function returns false when a check is done", () =>{
//     expect(subset("met", "stream")).toBe(false);
// });

test("That function returns true when a check is done", () =>{
    expect(subset("stem", "stream")).toBe(true);
});