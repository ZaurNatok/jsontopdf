const container = document.querySelector('.menu');


function createMenu(item) {
    
    const menuContent = document.querySelector('.menu');

    const newItem = document.createElement("div");
    newItem.classList.add('category');
    const categoryName = document.createElement("h2");
    categoryName.classList.add('categoryTitle');

    menuContent.appendChild(newItem);
    newItem.appendChild(categoryName);

    categoryName.textContent = item.name;


    for(let i = 0; i < item.items.length; i++) {
        const categoryContainer = document.createElement("div");
        categoryContainer.classList.add('category__container');
        
        const itemName = document.createElement("h3");
        itemName.classList.add('item__name');
        const itemDescription = document.createElement("p");
        itemDescription.classList.add('item__description');
        const itemPrice = document.createElement("p");
        itemPrice.classList.add('item__price');


        newItem.appendChild(categoryContainer);
        categoryContainer.appendChild(itemName);
        categoryContainer.appendChild(itemDescription);
        categoryContainer.appendChild(itemPrice);
        itemName.textContent = item.items[i].name;
        itemDescription.textContent = item.items[i].description;
        itemPrice.textContent = item.items[i].price;
    }

}

for(let i = 0; i < menu.length; i++) {
    createMenu(menu[i]);
}
