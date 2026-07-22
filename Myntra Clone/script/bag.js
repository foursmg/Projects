const CONVENIENCE_FEES = 99;
let bagItemsObjects;
onLoad();



function onLoad(){
    loadBagItemsObjects();
    displayBagItems();
    displayBagSummary();
}

function displayBagSummary(){
    let bagSummaryElement = document.querySelector('.bagSummary');

    let totalItem = bagItemsObjects.length;
    let totalMRP = 0;
    let totalDiscount = 0;
   

    bagItemsObjects.forEach(bagItem => {
        totalMRP += bagItem.originalPrice;
        totalDiscount += bagItem.originalPrice - bagItem.currentPrice;
    })

     let finalPayment= totalMRP-totalDiscount+ CONVENIENCE_FEES;


    bagSummaryElement.innerHTML= `<div class="bagDetailsContainer">
                <div class="priceHeader">PRICE DETAILS (${totalItem} Items)</div>
            </div>
            <div class="priceItem">
                <span class="priceItemTag">Total MRP</span>
                <span class="priceItemValue">Rs. ${totalMRP}</span>
            </div>
            <div class="priceItem">
                <span class="priceItemTag">Discount on MRP</span>
                <span class="priceItemValue priceDetailBaseDiscount">-Rs. ${totalDiscount}</span>
            </div>
            <div class="priceItem">
                <span class="priceItemTag">Convenience Fee</span>
                <span class="priceItemValue">₹99</span>
            </div>
            <hr>
            <div class="priceFooter">
                <span class="priceItemTag">Total Amount</span>
                <span class="priceItemValue">Rs. ${finalPayment}</span>
            </div>
            
            <button class="placeOrder">
            <div class="cssXYZ">PLACE ORDER</div>
            </button>`
}

function loadBagItemsObjects(){
    console.log(bagItems);
    bagItemsObjects = bagItems.map(itemId=> {
        for(let i=0; i<items.length;i++){
            if(itemId == items[i].id){
                return items[i];
            }
        }
    });
    console.log(bagItemsObjects);
}

function displayBagItems(){
    
    let containerElement = document.querySelector('.bagItemsContainer');
    let innerHTML = '';
  bagItemsObjects.forEach(bagItem => {
    innerHTML += generateItemHTML(bagItem);
  });
  containerElement.innerHTML = innerHTML;
}

function removeFromBag(itemId){
    bagItems = bagItems.filter(bagItemId => bagItemId != itemId);
    localStorage.setItem('bagItems',JSON.stringify(bagItems));
    loadBagItemsObjects();
    displayBagItems();
    displayBagSummary();
    displayBagIcon();
}

function generateItemHTML(item){
    return `<div class="bagItemContainer">
                <div class="itemLeftPart">
                    <img class="bagItemImage" src="../${item.itemImage}">
                </div>
                
                <div class="itemRightPart">
                    <div class="company">${item.companyName}</div>
                    <div class="itemName">${item.itemName}</div>
                
                <div class="priceContainer">
                    <span class="currentPrice">Rs ${item.currentPrice}</span>
                    <span class="originalPrice">Rs ${item.originalPrice}</span>
                    <span class="discountPrice">(${item.discountPercentage}% OFF)</span>
                </div>
                <div class="returnPeriod">
                    <span class="returnPeriodDays">${item.returnPeriod}</span>
                    return available
                </div>
                <div class="deliveryDetails">
                    Delivery By
                    <span class="deliveryDetailsDays">${item.deliveryDate}</span>
                </div>
                <div class="removeFromCart" onclick="removeFromBag(${item.id})">X</div>
                </div>
            </div>`;

}