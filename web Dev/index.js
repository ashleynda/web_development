function createRowElements() {

    return {
        shoppingCart: document.getElementsByTagName("tbody")[0],
        newRow: document.createElement("tr"),
        newItem: document.createElement("td"),
        itemPrice: document.createElement("td"),
        removeButton: document.createElement("button"),
        removeIcon: document.createElement("i")
    }
}
function getUserInput() {
    item = document.getElementById("item");
    price = document.getElementById("price");

    return {
        item, price
    }
}
function addToCart() {
    let{item,price} = getUserInput();
    if (item.value !== "" && price.value !== "") {
        let{newRow, shoppingCart, newItem, itemPrice, removeButton} = createRowElements();
       
        newItem.innerText = item.value;
        itemPrice.innerText = price.value;
        removeIcon.className = "fa-solid fa-trash fa-sm";
        removeButton.style.background = "none";
        removeButton.style.border = "none";
        removeButton.appendChild(removeIcon);
        removeButton.onclick = removeFromCart(this.parent)
        
        newRow.appendChild(newItem);
        newRow.appendChild(itemPrice);
        newRow.appendChild(removeButton);
        shoppingCart.appendChild(newRow);
        
        item.value = "";
        price.value = "";
}
}

function removeFromCart() {
    let row = this.parentElement;
    let 
    console.log("element");

    
        
    }
    
}