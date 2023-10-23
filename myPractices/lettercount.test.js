const { numberOfLetters } = require("./lettercount");

test("That number of letters is correct", () => {
    expect(numberOfLetters("you are the treasure that i seek")).toEqual({y: 1,o: 1,u: 2,' ': 6,a: 3,r: 3,e: 6,t: 4,h: 2,s: 2,i: 1,k: 1})
});
