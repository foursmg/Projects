let itemsContainerElement = document.querySelector('.itemsContainer');

let item = {
    item_image: 'media/products img/bodyScrub.webp',
    rating: {
        stars: 4.5,
        noOfReviews: 1400,
    },
    companyName: `MCaffeine`,
    itemName: `Blueberry Breeze Body Scrub small round box`,
    currentPrice: 369,
    originalPrice: 449,
    discountPercentage: 20,
}


itemsContainerElement.innerHTML = `<div class="itemContainer">
                <img class="itemImage" src="${item.item_image}" alt="body Scrub Img">
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
                <button class="addToBag">Add to Bag</button>
            </div>`;

