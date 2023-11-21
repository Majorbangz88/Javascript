function createRowElement() {
    return {
    shoppingCart: document.getElementsByTagName("tbody"),
    newRow: document.createElement("tr"),
    newItem: document.createElement("td"),
    itemPrice: document.createElement("td")
    }
}

function getUserInput() {
    let item = document.getElementById("item");
    let price = document.getElementById("price")
    return item, price;
}

function addToShoppingCart() {
    let {item, price} = getUserInput();

    if (item.value !== "" && price.value !== "") {
        let {newRow, newItem, shoppingCart, itemPrice} = createRowElement();
        newItem.innerText = item.value;
        itemPrice.innerText = price.value;
    }

    shoppingCart.appendChild(newRow);
    newRow.appendChild(newItem);
    newRow.appendChild(itemPrice);

    item.value = "";
    price.value = "";
}

function removeFromShoppingCart() {
    let {item, price} = getUserInput();

    for (element of shoppingCart) {
        if (item.value === item && price.value === price) {
            let {newRow, newItem, shoppingCart, itemPrice} = "";
        } 
    } 
}