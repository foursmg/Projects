let bagItems;
onLoad();

function onLoad(){
    let bagItemStr = localStorage.getItem('bagItems');
    bagItems = bagItemStr ? JSON.parse(bagItemStr) : [];
    displayItemsOnHomePage();
    displayBagIcon();
}


function addToBag(itemId){
    bagItems.push(itemId);
    localStorage.setItem('bagItems',JSON.stringify(bagItems));
    displayBagIcon();
}

function displayBagIcon(){
    let bagItemCountElement = document.querySelector('.bagItemCount');
    if(bagItems.length > 0){
        bagItemCountElement.style.visibility = 'visible';
        bagItemCountElement.innerText = bagItems.length;
    }else{
        bagItemCountElement.style.visibility = 'hidden';
    }
}

function displayItemsOnHomePage(){

let itemsContainerElement = document.querySelector('.itemsContainer');

if(!itemsContainerElement){
    return;
}

let innerHtml = '';

items.forEach(item => {
    innerHtml += `<div class="itemContainer">
                <img class="itemImage" src="${item.itemImage}" alt="body Scrub Img">
                <div class="rating">
                    ${item.rating.stars} ⭐ | ${item.rating.noOfReviews}
                </div>
                <div class="companyName">${item.companyName}</div>
                <div class="itemName">${item.itemName}</div>
                <div class="price">
                    <span class="currentPrice">Rs. ${item.currentPrice}</span>
                    <span class="originalPrice">Rs. ${item.originalPrice}</span>
                    <span class="discount">(${item.discountPercentage}% OFF)</span>
                </div>
                <button class="addToBag" onclick="addToBag(${item.id})">Add to Bag</button>
            </div>`
})

itemsContainerElement.innerHTML = innerHtml;


}


