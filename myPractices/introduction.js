const introducer = (name, shirt) => {
    const person = {
        name: name,
        shirt: shirt
    }

    const intro  = `My name is ${person.name} and the color of my shirt is ${person.shirt}`

    return intro;
}

console.log(introducer("Joel", "White"));

const introducers = (name, shirt, assets, liabilities) => {
    const person = {
        name: name,
        shirt: shirt,
        assets: assets,
        liabilities: liabilities,
        networth: function () {
            return this.assets - this.liabilities
            // This works too: return person.assets - person.liabilities
        }
    }

    const intro  = `My name is ${person.name}, the color of my shirt is ${person.shirt} and my networth is $${person.networth()}`

    return intro;
}

console.log(introducers("Joel", "White", 100000, 50000));

module.exports = {introducer, introducers}