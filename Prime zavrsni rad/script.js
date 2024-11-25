
function addClass(elem, classArr) {
    for (let i = 0; i < classArr.length; i++) {
        elem.classList.add(`${classArr[i]}`);
    }
}


function removeClass(elem, classArr) {
    for (let i = 0; i < classArr.length; i++) {
        elem.classList.remove(`${classArr[i]}`);
    }
}


function getClassName(elem, classPos) {
    let classString = elem.getAttribute('class');
    let className = classString.split(' ')[classPos];

    return className;
}








let header = document.querySelector('header');
let sectionContent = document.querySelector('.section-content');


window.onscroll = () => {
    let scrollTop = document.documentElement.scrollTop;

    if (scrollTop > header.offsetHeight) {
        header.classList.add('active');
        sectionContent.style.marginTop = header.offsetHeight + 'px';
    } else {
        header.classList.remove('active');
        sectionContent.style.marginTop = 0 + 'px';
    }
}


let navItems = document.querySelectorAll('.menu-items li');


let toggleBar = document.querySelector('#toggle-bar');
let navigationArea = document.querySelector('.menu-items');


let searchBtn = document.querySelector('#search-btn');
let searchBox = document.querySelector('.search-box');


let iconPhone = document.querySelector('#customer-center');
let supportCenter = document.querySelector('.support-center');


toggleBar.addEventListener('click', function () {
    toggleBar.classList.toggle('active-toggler');
    navigationArea.classList.toggle('active-navbar');
    searchBox.classList.remove('active-search-box');
    supportCenter.classList.remove('active-support-center');

    for (let i = 0; i < navItems.length; i++) {
        navItems[i].addEventListener('click', function () {
            toggleBar.classList.remove('active-toggler');
            navigationArea.classList.remove('active-navbar');
        });
    }
});


searchBtn.addEventListener('click', function () {
    searchBox.classList.toggle('active-search-box');
    toggleBar.classList.remove('active-toggler');
    navigationArea.classList.remove('active-navbar');
    supportCenter.classList.remove('active-support-center');
});


iconPhone.onclick = () => {
    searchBox.classList.remove('active-search-box');
    toggleBar.classList.remove('active-toggler');
    navigationArea.classList.remove('active-navbar');

    let isSupportCenterCardActive = getClassName(supportCenter, 1) === 'active-support-center';

    if (!isSupportCenterCardActive) {
        addClass(supportCenter, ['animate__animated', 'animate__bounceInRight', 'active-support-center']);

        setTimeout(() => {
            removeClass(supportCenter, ['animate__animated', 'animate__bounceInRight']);
        }, 1000);
    } else {
        supportCenter.classList.remove('active-support-center');
    }

}


let supportCenterCardCloseBtn = document.querySelector('.close-support-center-card');


supportCenterCardCloseBtn.onclick = () => {
    supportCenter.classList.remove('active-support-center');
}







let heroImg = document.querySelector('.hero-image');
let heroDescription = document.querySelector('.hero-description');


function updateHeroImage(imgIndex) {
    let imgSrc = ['01.png', '02.png', '03.png', '04.png', '05.png', '06.png'];
    let oldImg = document.querySelector('.hero-image img');
    heroImg.removeChild(oldImg);

    let newImg = document.createElement('img');
    newImg.setAttribute('class', 'animate__animated animate__bounceInDown');
    newImg.src = `img/hero/${imgSrc[imgIndex]}`;

    heroImg.appendChild(newImg);
}


function updateHeroTitle(titleIndex) {
    let txt1 = `Najbolje sušeno voće u Srbiji`;
    let txt2 = `Zadovoljite svoje dnevne potrebe lako i brzo`;
    let txt3 = `Probajte sveže voće za bolji način života`;
    let txt4 = `Ostvarite do 50% popusta na svaki proizvod`;
    let txt5 = `Vruće ponude su dostupne sa jedinstvenim proizvodima`;
    let txt6 = `Sveže povrće sa velikim popustom`;

    let textAra = [txt1, txt2, txt3, txt4, txt5, txt6];

    let oldText = document.querySelector('.hero-title');
    heroDescription.removeChild(oldText);

    let newTitle = document.createElement('h1');
    newTitle.setAttribute('class', 'animate__animated animate__bounceInRight hero-title');
    newTitle.textContent = `${textAra[titleIndex]}`;

    heroDescription.appendChild(newTitle);
}


function updateHeroButton() {
    let oldButton = document.querySelector('.hero-button');
    heroDescription.removeChild(oldButton);

    let newButton = document.createElement('button');
    newButton.textContent = `Explore`;
    newButton.setAttribute('class', 'animate__animated animate__bounceInUp hero-button');

    heroDescription.appendChild(newButton);
}


let heroIndex = 0;


function heroSlideRight() {
    heroIndex++;

    if (heroIndex === 6) {
        heroIndex = heroIndex % 6;
    }

    updateHeroImage(heroIndex);
    updateHeroTitle(heroIndex);
    updateHeroButton();
}


function heroSlideLeft() {
    heroIndex--;

    if (heroIndex < 0) {
        heroIndex = 5;
    }

    updateHeroImage(heroIndex);
    updateHeroTitle(heroIndex);
    updateHeroButton();
}


let heroSlide = setInterval(() => {

    heroSlideRight();

}, 10000);


let heroSlideLeftBtn = document.querySelector('.hero-slide-left');
let heroSlideRightBtn = document.querySelector('.hero-slide-right');


heroSlideLeftBtn.onclick = () => {
    heroSlideLeft();
}


heroSlideRightBtn.onclick = () => {
    heroSlideRight();
}







let arrivalCard = document.querySelectorAll('.new-arrival-card');


let move = (arrivalCard[0].offsetWidth + 20) * 3;


let newArrival = setInterval(() => {
    if (move >= ((arrivalCard[0].offsetWidth + 20) * (arrivalCard.length / 2))) {
        move = 0;
    }

    for (let i = 0; i < arrivalCard.length; i++) {
        arrivalCard[i].style.transform = `translateX(-${move}px)`;
    }

    move += (arrivalCard[0].offsetWidth + 20) * 3;

}, 3000);







let shoppingCartBtn = document.querySelector('#icon-shopping-cart');
let cartIconProductCounter = document.querySelector('#item-counter');
let productCartArea = document.querySelector('#product-cart-area');

let favoriteIcon = document.querySelectorAll('.add-to-favorite > span');
let cartWishlistArea = document.querySelector('.cart-wishlist-area');

let itemDeleteConfirmationBox = document.querySelector('.remove-confirmation-message');
let itemDeleteConfirmationBoxTitle = document.querySelector('.remove-message-title h2');
let popupShadow = document.querySelector('.popup-shadow');
let removeCancelBtn = document.querySelector('#remove-cancel-btn');
let removeConfirmBtn = document.querySelector('#remove-confirm-btn');

let shoppingCart = document.querySelector('.shopping-cart-area');
let cartContentMenu = document.querySelectorAll('.cart-menu-items h2');
let cartCloseButton = document.querySelector('.cart-close-btn button');
let shoppingCartContentsArea = document.querySelectorAll('.shopping-cart-contents-area');

let featuredProducts = document.querySelectorAll('.product-wrap');
let productImage = document.querySelectorAll('.product-img img');
let productPrice = document.querySelectorAll('.f-product-price');
let productDiscount = document.querySelectorAll('.discount');
let productName = document.querySelectorAll('.product-name');
let currentPrice = document.querySelectorAll('.f-cur-price');
let productUnit = document.querySelectorAll('.f-product-unit');
let addToCartBtn = document.querySelectorAll('.add-to-cart-btn p');
let cartContentArea = document.querySelector('.cart-contents-area');
let shoppingCartArea = document.querySelector('.shopping-cart-wrap');
let buyingProductContent = document.querySelector('.buying-product-title');
let buyingDetailsFooter = document.querySelector('.buying-details-footer');
let totalBuyingItems = document.querySelector('.calculate-total-items p span');
let shoppingDetailsContent = document.querySelector('.shopping-details-content');
let totalBuyingItemsQuantity = document.querySelector('.calculate-total-quantity p');
let totalBuyingItemsAmount = document.querySelector('.calculate-total-amount p span');

let totalSelectedProduct = document.querySelector('#total-selected');
let totalFavoriteProduct = document.querySelector('#total-favorite');
let totalSelectedCounter = document.querySelector('#total-selected span');
let totalFavoriteCounter = document.querySelector('#total-favorite span');
let totalAddToBuyCounter = document.querySelector('#total-buying-item-counter');

let controllScrolling = document.querySelector('html');


let countSelectedItem = 0;
let countFavoriteItem = 0;
let countAddToBuyItem = 0;
let countBuyProductSl = 0;
let countTotalWeight = 0;
let countTotalPieces = 0;
let countTotalAmount = 0;
let countTotalDozen = 0;


let addedToCart = [];
let addedForBuy = [];
let newCartContent = [];
let addedToFavorite = [];
let newfavoriteItem = [];
let shoppingCartItem = [];
let storeShopItemsIndex = [];

let isSelectedItemActive = true;


(function () {
    for (let i = 0; i < featuredProducts.length; i++) {
        let oldPrice = productPrice[i].textContent;
        let discount = productDiscount[i].textContent;

        let newPrice = oldPrice - Math.round((oldPrice * (discount / 100)));

        currentPrice[i].textContent = newPrice;
    }
})();


shoppingCartBtn.onclick = () => {
    toggleBar.classList.remove('active-toggler');
    navigationArea.classList.remove('active-navbar');
    searchBox.classList.remove('active-search-box');
    supportCenter.classList.remove('active-support-center');
    productCartArea.classList.add('active-cart');
    controllScrolling.style.overflowY = 'hidden';
}


cartCloseButton.onclick = () => {
    productCartArea.classList.remove('active-cart');
    controllScrolling.style.overflowY = 'auto';
}


function displayBuyingHeader(countValue) {
    let totalShopItems = shoppingDetailsContent.children.length;
    if (countValue > 0 && isSelectedItemActive === true) {
        buyingProductContent.classList.add('acvie-buying-title');
    } else if (totalShopItems > 0 && isSelectedItemActive === true) {
        buyingProductContent.classList.add('acvie-buying-title');
    } else {
        buyingProductContent.classList.remove('acvie-buying-title');
    }
}


(function () {
    for (let i = 0; i < cartContentMenu.length; i++) {
        cartContentMenu[i].addEventListener('click', function () {
            for (let j = 0; j < cartContentMenu.length; j++) {
                cartContentMenu[j].classList.remove('active-cart-menu');
                shoppingCartContentsArea[j].classList.remove('active-cart-content');
                totalSelectedProduct.classList.remove('active-product-counter');
                totalFavoriteProduct.classList.remove('active-product-counter');
            }
            cartContentMenu[i].classList.add('active-cart-menu');
            shoppingCartContentsArea[i].classList.add('active-cart-content');
            if (cartContentMenu[i].getAttribute('id') === 'selected-products') {
                totalSelectedProduct.classList.add('active-product-counter');
                if (countSelectedItem > 0) {
                    buyingProductContent.classList.add('acvie-buying-title');
                    totalSelectedCounter.innerHTML = countSelectedItem;
                } else {
                    totalSelectedCounter.innerHTML = 'Nije pronađena nijedna stavka';
                }
                isSelectedItemActive = true;
            } else {
                totalFavoriteProduct.classList.add('active-product-counter');
                buyingProductContent.classList.remove('acvie-buying-title');
                if (countFavoriteItem > 0) {
                    totalFavoriteCounter.innerHTML = countFavoriteItem;
                } else {
                    totalFavoriteCounter.innerHTML = 'Nije pronađena nijedna stavka';
                }

                isSelectedItemActive = false;
            }

            displayBuyingHeader(countSelectedItem);

        });
    }
})();


(function () {
    for (let i = 0; i < addToCartBtn.length; i++) {
        addedToCart[i] = false;
        addedForBuy[i] = false;
        addedToFavorite[i] = false;
    }
})();


function createSelectedProductsContent(image, name, price, unit, discount, preservative, time) {
    let newCartContent = document.createElement('div');
    newCartContent.setAttribute('class', 'cart-content');

    let newCartImageArea = document.createElement('div');
    newCartImageArea.setAttribute('class', 'cart-image-area');

    let newCartDetails = document.createElement('div');
    newCartDetails.setAttribute('class', 'cart-details');

    
    let newImage = document.createElement('img');
    newImage.src = image;

    newCartImageArea.appendChild(newImage);

    
    let newHeading2 = document.createElement('h2');
    newHeading2.textContent = 'Detalji o proizvodu';

    let newPara = [];
    let newStrong = [];
    for (let i = 0; i < 6; i++) {
        newPara[i] = document.createElement('p');
        newStrong[i] = document.createElement('strong');
    }

    newStrong[0].textContent = 'Ime proizvoda: ';
    newStrong[1].textContent = 'Cena: ';
    newStrong[2].textContent = 'Popust: ';
    newStrong[3].textContent = 'Količina: ';
    newStrong[4].textContent = 'Konzervansi: ';
    newStrong[5].textContent = 'Vreme dodavanja: ';

    for (let i = 0; i < 6; i++) {
        newPara[i].appendChild(newStrong[i]);
    }

    let newInput = document.createElement('input');
    newInput.setAttribute('type', 'number');
    newPara[3].appendChild(newInput);

    let newQuantitySpan = document.createElement('span');
    newQuantitySpan.innerHTML = `${unit}`;
    newQuantitySpan.style.paddingLeft = '0.4rem';
    newPara[3].appendChild(newQuantitySpan);

    let newSpan = [];
    for (let i = 0; i < 3; i++) {
        newSpan[i] = document.createElement('span');
    }

    newSpan[0].textContent = name;
    newSpan[1].textContent = price + `din/${unit}`;
    newSpan[2].textContent = discount + '%';

    for (let i = 0; i < 3; i++) {
        newPara[i].appendChild(newSpan[i]);
    }

    let preservativeSpan = document.createElement('span');
    preservativeSpan.textContent = preservative;

    let timeSpan = document.createElement('span');
    timeSpan.textContent = time;

    newPara[4].appendChild(preservativeSpan);
    newPara[5].appendChild(timeSpan);

    let newShoppingButton = [];

    for (let i = 0; i < 2; i++) {
        newShoppingButton[i] = document.createElement('button');
    }

    newShoppingButton[0].textContent = 'Dodaj za kupovinu';
    newShoppingButton[1].textContent = 'Ukloni proizvod';

    newShoppingButton[0].setAttribute('class', 'add-to-buy-btn');
    newShoppingButton[1].setAttribute('class', 'remove-item-btn');

    
    newCartDetails.appendChild(newHeading2);

    for (let i = 0; i < 6; i++) {
        newCartDetails.appendChild(newPara[i]);
    }

    for (let i = 0; i < 2; i++) {
        newCartDetails.appendChild(newShoppingButton[i]);
    }

    newCartContent.appendChild(newCartImageArea);
    newCartContent.appendChild(newCartDetails);

    return newCartContent;
}


function getAddedTime() {
    let dt = new Date();

    let dd = dt.getDate();
    let mm = dt.getMonth() + 1;
    let yyyy = dt.getFullYear();

    let HH = dt.getHours();
    let MM = dt.getMinutes();
    let XM = null;

    (HH >= 12) ? XM = 'Popodne': XM = 'Veče';

    if (HH > 12) {
        HH -= 12;
    }

    if (HH == 0) {
        HH = 12;
    }

    if (dd < 10) {
        dd = '0' + dd;
    }

    if (mm < 10) {
        mm = '0' + mm;
    }

    if (HH < 10) {
        HH = '0' + HH;
    }

    if (MM < 10) {
        MM = '0' + MM;
    }

    let format = `${dd}/${mm}/${yyyy}  ${HH}:${MM} ${XM}`;

    return format;
}


function addItemsToSelectedProducts(productIndex) {
    addToCartBtn[productIndex].style.background = 'orangered';
    addToCartBtn[productIndex].innerHTML = '<span class="icon-cart-arrow-down"></span> Dodato';
    let productCartImage = productImage[productIndex].src;
    let productCartName = productName[productIndex].textContent;
    let productCartPrice = productPrice[productIndex].textContent;
    let productCartUnit = productUnit[productIndex].textContent;
    let productCartDiscount = productDiscount[productIndex].textContent;
    let preservativeName = 'Ne';
    let addedTime = getAddedTime();
    newCartContent[productIndex] = createSelectedProductsContent(productCartImage, productCartName, productCartPrice, productCartUnit, productCartDiscount, preservativeName, addedTime);
    cartContentArea.insertBefore(newCartContent[productIndex], cartContentArea.firstChild);
}


function removeItemsToSelectedProducts(productIndex) {
    addToCartBtn[productIndex].style.background = '#459122';
    addToCartBtn[productIndex].innerHTML = '<span class="icon-cart-plus"></span> Dodaj u korpu';
    cartContentArea.removeChild(newCartContent[productIndex]);
}


function activeFavoriteItemAddToCartBtn(productIndex) {
    let favoriteItemAddToCartBtn = newfavoriteItem[productIndex].children[2].children[2].children[0];
    favoriteItemAddToCartBtn.style.background = 'orangered';
    favoriteItemAddToCartBtn.innerHTML = '<span class="icon-cart-arrow-down"></span> Dodato';
}


function deactiveFavoriteItemAddToCartBtn(productIndex) {
    let favoriteItemAddToCartBtn = newfavoriteItem[productIndex].children[2].children[2].children[0];
    favoriteItemAddToCartBtn.style.background = '#459122';
    favoriteItemAddToCartBtn.innerHTML = '<span class="icon-cart-plus"></span> Dodaj u korpu';
}


function favoriteContentWrapper() {
    let newProductWrapper = document.createElement('div');
    newProductWrapper.setAttribute('class', 'product-wrap');

    return newProductWrapper;
}


function addItemsToFavoriteProducts(productIndex) {
    favoriteIcon[productIndex].style.background = 'orangered';
    let clone = featuredProducts[productIndex].cloneNode(true);
    let favoriteContentWrap = favoriteContentWrapper();
    newfavoriteItem[productIndex] = favoriteContentWrap.appendChild(clone);
    cartWishlistArea.appendChild(newfavoriteItem[productIndex]);
}


function removeItemsToFavoriteProducts(productIndex) {
    favoriteIcon[productIndex].style.background = '#61790a';
    cartWishlistArea.removeChild(newfavoriteItem[productIndex]);
}


function activeConfirmationBox(confirmMessage) {
    itemDeleteConfirmationBox.classList.add('active-confirmation-box');
    itemDeleteConfirmationBoxTitle.innerHTML = confirmMessage;
    popupShadow.classList.add('active-popup-shadow');
    shoppingCart.style.overflow = 'hidden';
}


function removeConfirmationBox() {
    itemDeleteConfirmationBox.classList.remove('active-confirmation-box');
    popupShadow.classList.remove('active-popup-shadow');
    shoppingCart.style.overflow = 'auto';
}


function displayCartCounter(countValue) {
    if (countValue > 0) {
        cartIconProductCounter.classList.add('active-item-counter');
    } else {
        cartIconProductCounter.classList.remove('active-item-counter');
    }
}


function createShoppingCartItem(itemName, itemPrice, itemUnit, itemDiscount, presentPrice, itemQuantity) {
    let newParentDiv = document.createElement('div');
    newParentDiv.setAttribute('class', 'shopping-details');

    let newChildDiv = [];

    for (let i = 0; i < 8; i++) {
        newChildDiv[i] = document.createElement('div');
    }

    newChildDiv[0].setAttribute('class', 'product-sl');
    newChildDiv[1].setAttribute('class', 'product-name');
    newChildDiv[2].setAttribute('class', 'regular-price');
    newChildDiv[3].setAttribute('class', 'discount');
    newChildDiv[4].setAttribute('class', 'present-price');
    newChildDiv[5].setAttribute('class', 'product-quantity');
    newChildDiv[6].setAttribute('class', 'total-amount');
    newChildDiv[7].setAttribute('class', 'remove-item-btn');

    let newChildPara = [];

    for (let i = 0; i < 7; i++) {
        newChildPara[i] = document.createElement('p');
    }

    let removeBtn = document.createElement('button');
    removeBtn.innerHTML = 'Obriši';
    removeBtn.setAttribute('class', 'remove-shop-item');

    let totalPrice = itemQuantity * presentPrice;
    totalPrice = totalPrice.toFixed(2);

    newChildPara[1].innerHTML = itemName;
    newChildPara[2].innerHTML = itemPrice + `din/${itemUnit}`;
    newChildPara[3].innerHTML = itemDiscount + `%`;
    newChildPara[4].innerHTML = presentPrice + `din/${itemUnit}`;
    newChildPara[5].innerHTML = itemQuantity + ` ${itemUnit}`;
    newChildPara[6].innerHTML = totalPrice + ` din`;

    for (let i = 0; i < 7; i++) {
        newChildDiv[i].appendChild(newChildPara[i]);
    }

    newChildDiv[7].appendChild(removeBtn);

    for (let i = 0; i < 8; i++) {
        newParentDiv.appendChild(newChildDiv[i]);
    }

    return newParentDiv;
}


function addItemsToShoppingCartArea(itemIndex, buyBtn, itemQuantity) {
    totalAddToBuyCounter.innerHTML = ++countAddToBuyItem;
    buyBtn.style.background = 'crimson';
    buyBtn.innerHTML = 'Dodato';

    let getQuantity = Number(itemQuantity.value);
    let getItemName = productName[itemIndex].textContent;
    let getItemPrice = productPrice[itemIndex].textContent;
    let getItemUnit = productUnit[itemIndex].textContent;
    let getItemDiscount = productDiscount[itemIndex].textContent;
    let getPresentPrice = getItemPrice - ((getItemDiscount / 100) * getItemPrice);

    getPresentPrice = getPresentPrice.toFixed(2);
    shoppingCartItem[itemIndex] = createShoppingCartItem(getItemName, getItemPrice, getItemUnit, getItemDiscount, getPresentPrice, getQuantity);
    shoppingDetailsContent.appendChild(shoppingCartItem[itemIndex]);

    if (getItemUnit === 'kg') {
        countTotalWeight += getQuantity;
    } else if (getItemUnit === 'kom') {
        countTotalDozen += getQuantity;
    } else if (getItemUnit === 'gr') {
        countTotalPieces += getQuantity;
    }

    countTotalAmount += getPresentPrice * getQuantity;
}


function removeItemsToShoppingCartArea(itemIndex, buyBtn, itemQuantity) {
    totalAddToBuyCounter.innerHTML = --countAddToBuyItem;
    buyBtn.style.background = '#267247';
    buyBtn.innerHTML = 'Dodaj za kupovinu';

    let getQuantity = Number(itemQuantity.value);
    let getItemPrice = productPrice[itemIndex].textContent;
    let getItemUnit = productUnit[itemIndex].textContent;
    let getItemDiscount = productDiscount[itemIndex].textContent;
    let getPresentPrice = getItemPrice - ((getItemDiscount / 100) * getItemPrice);

    shoppingDetailsContent.removeChild(shoppingCartItem[itemIndex]);

    if (getItemUnit === 'kg') {
        countTotalWeight -= getQuantity;
    } else if (getItemUnit === 'kom') {
        countTotalDozen -= getQuantity;
    } else if (getItemUnit === 'gr') {
        countTotalPieces -= getQuantity;
    }

    countTotalAmount -= getPresentPrice * getQuantity;
    itemQuantity.value = '';
}


function displayBuyingDetailsFooter(countValue) {

    if (countValue > 0) {
        buyingDetailsFooter.classList.add('active-buying-details-footer');
    } else {
        buyingDetailsFooter.classList.remove('active-buying-details-footer');
    }

    totalBuyingItems.innerHTML = shoppingDetailsContent.children.length;

    let quantityResult = ``;

    let quantityList = [countTotalWeight, countTotalDozen, countTotalPieces];

    for (let i = 0; i < quantityList.length; i++) {
        if (quantityList[i] !== 0) {
            if (quantityResult !== ``) {
                quantityResult += ` + `;
            }

            if (i === 0) {
                if (countTotalWeight % 1 === 0) {
                    quantityResult += `${countTotalWeight} kg`;
                } else {
                    quantityResult += `${countTotalWeight.toFixed(2)} kg`;
                }
            } else if (i === 1) {
                if (countTotalDozen % 1 === 0) {
                    quantityResult += `${countTotalDozen} kom`;
                } else {
                    quantityResult += `${countTotalDozen.toFixed(2)} kom`;
                }
            } else {
                if (countTotalPieces % 1 === 0) {
                    quantityResult += `${countTotalPieces} gr`;
                } else {
                    quantityResult += `${countTotalPieces.toFixed(2)} gr`;
                }
            }
        }
    }

    totalBuyingItemsQuantity.innerHTML = quantityResult;
    totalBuyingItemsAmount.innerHTML = countTotalAmount.toFixed(1);
}


function setProductSl() {
    let sl = 0;
    let shopItems = shoppingDetailsContent.children;
    for (let i = 0; i < shopItems.length; i++) {
        shopItems[i].children[0].children[0].innerHTML = ++sl;
    }
}


function removeShopItemsIndex(index) {
    for (let i = 0; i < storeShopItemsIndex.length; i++) {
        if (storeShopItemsIndex[i] === index) {
            for (let j = i; j < storeShopItemsIndex.length; j++) {
                storeShopItemsIndex[j] = storeShopItemsIndex[j + 1];
            }
        }
    }
    storeShopItemsIndex.length--;
}


function removeSelectedProduct(productIndex) {
    removeItemsToSelectedProducts(productIndex);
    if (newfavoriteItem[productIndex] !== undefined) {
        deactiveFavoriteItemAddToCartBtn(productIndex);
    }
    --countSelectedItem;
    totalSelectedCounter.innerHTML = countSelectedItem;
    cartIconProductCounter.innerHTML = countSelectedItem;
    displayBuyingHeader(countSelectedItem);
    displayCartCounter(countSelectedItem);
    addedToCart[productIndex] = false;
}


function removeShoppingCartProduct(productIndex) {
    let addToBuyBtn = newCartContent[productIndex].children[1].children[7];
    let itemQuantity = newCartContent[productIndex].children[1].children[4].children[1];
    removeItemsToShoppingCartArea(productIndex, addToBuyBtn, itemQuantity);
    displayBuyingDetailsFooter(countAddToBuyItem);
    displayBuyingHeader(countSelectedItem);
    itemQuantity.removeAttribute('disabled');
    removeShopItemsIndex(productIndex);
    setProductSl();
    addedForBuy[productIndex] = false;
}


function addProductToShoppingCart(productIndex) {
    let addToBuyBtn = newCartContent[productIndex].children[1].children[7];
    let itemQuantity = newCartContent[productIndex].children[1].children[4].children[1];
    addItemsToShoppingCartArea(productIndex, addToBuyBtn, itemQuantity);
    displayBuyingDetailsFooter(countAddToBuyItem);
    itemQuantity.setAttribute('disabled', 'true');
    storeShopItemsIndex.push(productIndex);
    setProductSl();
}


function controlShoppingProductItems(itemIndex) {
    let itemQuantity = newCartContent[itemIndex].children[1].children[4].children[1];
    if (addedForBuy[itemIndex] === false && itemQuantity.value !== '' && itemQuantity.value > 0) {
        addProductToShoppingCart(itemIndex);
        let shopItemRemoveBtn = shoppingCartItem[itemIndex].children[7].children[0];
        shopItemRemoveBtn.addEventListener('click', function () {
            removeShoppingCartProduct(itemIndex);
        });
        addedForBuy[itemIndex] = true;
    } else if (addedForBuy[itemIndex] === true && itemQuantity.value !== '' && itemQuantity.value > 0) {
        removeShoppingCartProduct(itemIndex);
    } else {
        if (itemQuantity.value === '') {
            alert('Molimo vas da unesete količinu vašeg artikla');
        } else {
            alert('Unesite ispravnu količinu svog artikla');
        }
    }
}


function controlSelectedProductItems(itemIndex) {
    if (addedToCart[itemIndex] === false) {
        addItemsToSelectedProducts(itemIndex);
        if (newfavoriteItem[itemIndex] !== undefined) {
            activeFavoriteItemAddToCartBtn(itemIndex);
        }

        let selectedProductRemoveBtn = newCartContent[itemIndex].children[1].children[8];

        selectedProductRemoveBtn.onclick = () => {
                removeSelectedProduct(itemIndex);

               
                if (addedForBuy[itemIndex] === true) {
                    removeShoppingCartProduct(itemIndex);
                }

            }
            ++countSelectedItem;
        totalSelectedCounter.innerHTML = countSelectedItem;
        cartIconProductCounter.innerHTML = countSelectedItem;
        addedToCart[itemIndex] = true;
    } else {
        removeSelectedProduct(itemIndex);

       
        if (addedForBuy[itemIndex] === true) {
            removeShoppingCartProduct(itemIndex);
        }
    }

    let addToBuyBtn = newCartContent[itemIndex].children[1].children[7];

    addToBuyBtn.onclick = () => {
        controlShoppingProductItems(itemIndex);
    }

    displayBuyingHeader(countSelectedItem);
    displayCartCounter(countSelectedItem);
}


function controlFavoriteProductItems(itemIndex) {
    if (addedToFavorite[itemIndex] === false) {
        addItemsToFavoriteProducts(itemIndex);
        totalFavoriteCounter.innerHTML = ++countFavoriteItem;
        addedToFavorite[itemIndex] = true;
    } else {
        removeItemsToFavoriteProducts(itemIndex);
        totalFavoriteCounter.innerHTML = --countFavoriteItem;
        addedToFavorite[itemIndex] = false;
    }

    let favoriteContent = newfavoriteItem[itemIndex].children[1].children[0];

    favoriteContent.addEventListener('click', function () {
        activeConfirmationBox('Uklonite proizvode sa liste želja?');
        removeConfirmBtn.onclick = () => {
            removeItemsToFavoriteProducts(itemIndex);
            totalFavoriteCounter.innerHTML = --countFavoriteItem;
            addedToFavorite[itemIndex] = false;
            removeConfirmationBox();
        }

        removeCancelBtn.onclick = () => {
            removeConfirmationBox();
        }

    });

    
    let favoriteItemAddToCartBtn = newfavoriteItem[itemIndex].children[2].children[2].children[0];

    
    favoriteItemAddToCartBtn.addEventListener('click', function () {
        controlSelectedProductItems(itemIndex);
    });
}


(function () {
    for (let i = 0; i < addToCartBtn.length; i++) {

       
        addToCartBtn[i].addEventListener('click', function () {
            controlSelectedProductItems(i);
        });

        
        favoriteIcon[i].addEventListener('click', function () {
            controlFavoriteProductItems(i);
        });
    }
})();


let buyNowBtn = document.querySelector('#buy-items');
let buyingDetailsArea = document.querySelector('.buying-details-area');
let closeBuyingDetailsArea = document.querySelector('.close-buy-area');


buyNowBtn.onclick = () => {
    buyingDetailsArea.classList.add('active-buying-details');
}


closeBuyingDetailsArea.onclick = () => {
    buyingDetailsArea.classList.remove('active-buying-details');
}


let removeAllShopItems = document.querySelector('#remove-all-items');


removeAllShopItems.onclick = () => {
    if (countAddToBuyItem > 0) {
        activeConfirmationBox('Uklonite sve artikle iz korpe?');
        removeConfirmBtn.onclick = () => {
            for (let i = 0; i < storeShopItemsIndex.length; i++) {
                let itemIndex = storeShopItemsIndex[i];
                let buyBtn = newCartContent[itemIndex].children[1].children[7];
                let itemQuantity = newCartContent[itemIndex].children[1].children[4].children[1];
                removeItemsToShoppingCartArea(itemIndex, buyBtn, itemQuantity);
                itemQuantity.removeAttribute('disabled');
                addedForBuy[itemIndex] = false;
            }
            storeShopItemsIndex = [];
            displayBuyingDetailsFooter(countAddToBuyItem);
            displayBuyingHeader(countSelectedItem);
            removeConfirmationBox();
        }
        removeCancelBtn.onclick = () => {
            removeConfirmationBox();
        }
    } else {
        alert('Nije pronađen nijedan predmet u korpi');
    }
}







const bigDealsDay = document.getElementById('day');
const bigDealsHour = document.getElementById('hour');
const bigDealsMinute = document.getElementById('minute');
const bigDealsSecond = document.getElementById('second');


let date = new Date();
let monthIndex = date.getMonth();
let year = date.getFullYear();

let dayConst = 86400;
let hourConst = 3600;
let minuteConst = 60;

let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


function updateCountDownTimer(time, dest) {
    dest[0].textContent = time[0];
    dest[1].textContent = time[1];
    dest[2].textContent = time[2];
    dest[3].textContent = time[3];
}


let timeCount = setInterval((date, time) => {
    let timerValues, updateDest;

    let curntTime = Date.now();
    let eventTime = new Date(`${month[monthIndex]} ${date}, ${year} ${time}`).getTime();

    let totalSeconds = (eventTime - curntTime) / 1000;

    if (totalSeconds < 0) {
        monthIndex = (monthIndex + 1) % 12;

        console.log(`Hello`);

        if (monthIndex === 0) {
            year = year + 1;
        }

        let eventTime = new Date(`${month[monthIndex]} ${date}, ${year} ${time}`).getTime();
        totalSeconds = (eventTime - curntTime) / 1000;
    }

    let days = Math.floor(totalSeconds / dayConst);
    totalSeconds = totalSeconds % dayConst;

    let hours = Math.floor(totalSeconds / hourConst);
    totalSeconds = totalSeconds % hourConst;

    let minutes = Math.floor(totalSeconds / minuteConst);
    totalSeconds = totalSeconds % minuteConst;

    let seconds = Math.floor(totalSeconds);

    if (days < 10) {
        days = '0' + days;
    }

    if (hours < 10) {
        hours = '0' + hours;
    }

    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    
    updateDest = [bigDealsDay, bigDealsHour, bigDealsMinute, bigDealsSecond];
    timerValues = [days, hours, minutes, seconds];

    updateCountDownTimer(timerValues, updateDest);

}, 1000, '26', '20:00:00');






let greatDealsProducts = document.querySelectorAll('.great-deals-product-wrap');
let greatDealsProductImage = document.querySelectorAll('.great-deals-image img');
let greatDealsProductName = document.querySelectorAll('.gd-product-name');
let greatDealsProductDiscount = document.querySelectorAll('.gd-discount');
let greatDealsProductPrice = document.querySelectorAll('.gd-price');
let greatDealsProductUnit = document.querySelectorAll('.gd-unit');
let greatDealsProductPrevPrice = document.querySelectorAll('.gd-price-del');
let greatDealsProductPrevUnit = document.querySelectorAll('.gd-unit-del');
let greatDealsProductRating = document.querySelectorAll('.gd-rating-avg strong');
let greatDealsProductReviewCount = document.querySelectorAll('.gd-review-count');
let greatDealsProductOfferEndsDate = document.querySelectorAll('.offer-ends-date');


const greatDealsDay = document.querySelectorAll('.gd-timer-days');
const greatDealsHour = document.querySelectorAll('.gd-timer-hours');
const greatDealsMinute = document.querySelectorAll('.gd-timer-minutes');
const greatDealsSecond = document.querySelectorAll('.gd-timer-seconds');


let monthIndex1 = date.getMonth();
let year1 = date.getFullYear();

let monthIndex2 = date.getMonth();
let year2 = date.getFullYear();

let monthIndex3 = date.getMonth();
let year3 = date.getFullYear();


let date1 = `18`,
    time1 = `22:20:05`;
let date2 = `20`,
    time2 = `18:40:15`;
let date3 = `22`,
    time3 = `16:20:30`;


let timeCount1 = setInterval((date, time) => {
    let timerValues, updateDest;

    let curntTime = Date.now();
    let eventTime = new Date(`${month[monthIndex1]} ${date}, ${year1} ${time}`).getTime();

    let totalSeconds = (eventTime - curntTime) / 1000;

    if (totalSeconds < 0) {
        monthIndex1 = (monthIndex1 + 1) % 12;

        if (monthIndex1 === 0) {
            year1 = year1 + 1;
        }

        let eventTime = new Date(`${month[monthIndex1]} ${date}, ${year1} ${time}`).getTime();
        totalSeconds = (eventTime - curntTime) / 1000;
    }

    greatDealsProductOfferEndsDate[0].textContent = `${date}/${monthIndex1+1}/${year1}`;

    let days = Math.floor(totalSeconds / dayConst);
    totalSeconds = totalSeconds % dayConst;

    let hours = Math.floor(totalSeconds / hourConst);
    totalSeconds = totalSeconds % hourConst;

    let minutes = Math.floor(totalSeconds / minuteConst);
    totalSeconds = totalSeconds % minuteConst;

    let seconds = Math.floor(totalSeconds);

    if (days < 10) {
        days = '0' + days;
    }

    if (hours < 10) {
        hours = '0' + hours;
    }

    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    updateDest = [greatDealsDay[0], greatDealsHour[0], greatDealsMinute[0], greatDealsSecond[0]];
    timerValues = [days, hours, minutes, seconds];

    updateCountDownTimer(timerValues, updateDest);

}, 1000, date1, time1);


let timeCount2 = setInterval((date, time) => {
    let timerValues, updateDest;

    let curntTime = Date.now();
    let eventTime = new Date(`${month[monthIndex2]} ${date}, ${year2} ${time}`).getTime();

    let totalSeconds = (eventTime - curntTime) / 1000;

    if (totalSeconds < 0) {
        monthIndex2 = (monthIndex2 + 1) % 12;

        if (monthIndex2 === 0) {
            year2 = year2 + 1;
        }

        let eventTime = new Date(`${month[monthIndex2]} ${date}, ${year2} ${time}`).getTime();
        totalSeconds = (eventTime - curntTime) / 1000;
    }

    greatDealsProductOfferEndsDate[1].textContent = `${date}/${monthIndex2+1}/${year2}`;

    let days = Math.floor(totalSeconds / dayConst);
    totalSeconds = totalSeconds % dayConst;

    let hours = Math.floor(totalSeconds / hourConst);
    totalSeconds = totalSeconds % hourConst;

    let minutes = Math.floor(totalSeconds / minuteConst);
    totalSeconds = totalSeconds % minuteConst;

    let seconds = Math.floor(totalSeconds);

    if (days < 10) {
        days = '0' + days;
    }

    if (hours < 10) {
        hours = '0' + hours;
    }

    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    updateDest = [greatDealsDay[1], greatDealsHour[1], greatDealsMinute[1], greatDealsSecond[1]];
    timerValues = [days, hours, minutes, seconds];

    updateCountDownTimer(timerValues, updateDest);

}, 1000, date2, time2);


let timeCount3 = setInterval((date, time) => {
    let timerValues, updateDest;

    let curntTime = Date.now();
    let eventTime = new Date(`${month[monthIndex3]} ${date}, ${year3} ${time}`).getTime();

    let totalSeconds = (eventTime - curntTime) / 1000;

    if (totalSeconds < 0) {
        monthIndex3 = (monthIndex3 + 1) % 12;

        if (monthIndex3 === 0) {
            year3 = year3 + 1;
        }

        let eventTime = new Date(`${month[monthIndex3]} ${date}, ${year3} ${time}`).getTime();
        totalSeconds = (eventTime - curntTime) / 1000;
    }

    greatDealsProductOfferEndsDate[2].textContent = `${date}/${monthIndex3+1}/${year3}`;

    let days = Math.floor(totalSeconds / dayConst);
    totalSeconds = totalSeconds % dayConst;

    let hours = Math.floor(totalSeconds / hourConst);
    totalSeconds = totalSeconds % hourConst;

    let minutes = Math.floor(totalSeconds / minuteConst);
    totalSeconds = totalSeconds % minuteConst;

    let seconds = Math.floor(totalSeconds);

    if (days < 10) {
        days = '0' + days;
    }

    if (hours < 10) {
        hours = '0' + hours;
    }

    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    updateDest = [greatDealsDay[2], greatDealsHour[2], greatDealsMinute[2], greatDealsSecond[2]];
    timerValues = [days, hours, minutes, seconds];

    updateCountDownTimer(timerValues, updateDest);

}, 1000, date3, time3);








let notificationBox = document.querySelector('.notification-box');
let notificationMessage = document.querySelector('.notification-message');
let notificationBoxConfirmBtn = document.querySelector('#not-confirm-btn');
let notificationBoxRemoveBtn = document.querySelector('#not-calcel-btn');


function addOuterProductToShoppingCartArea(productClass) {

    for (let i = 0; i < featuredProducts.length; i++) {
        let freaturedProductClass = getClassName(featuredProducts[i], 1);

        if (productClass === freaturedProductClass) {
            if (addedToCart[i] === false) {
                notificationMessage.textContent = `Da li ste sigurni da dodate ovaj proizvod u korpu za kupovinu?`;
                notificationBoxConfirmBtn.textContent = `Prihvati`;

                addClass(notificationBox, ['animate__animated', 'animate__bounceInRight', 'active-notification-box']);

                setTimeout(() => {
                    removeClass(notificationBox, ['animate__animated', 'animate__bounceInRight']);
                }, 1200);

                notificationBoxConfirmBtn.onclick = () => {
                    controlSelectedProductItems(i);
                    notificationBox.classList.remove('active-notification-box');
                }

                notificationBoxRemoveBtn.onclick = () => {
                    notificationBox.classList.remove('active-notification-box');
                }

            } else {
                notificationMessage.textContent = `Ovaj artikal već postoji u korpi! Želite da uklonite?`;
                notificationBoxConfirmBtn.textContent = `Ukloni`;

                addClass(notificationBox, ['animate__animated', 'animate__bounceInRight', 'active-notification-box']);

                setTimeout(() => {
                    removeClass(notificationBox, ['animate__animated', 'animate__bounceInRight']);
                }, 1200);

                notificationBoxConfirmBtn.onclick = () => {

                    removeSelectedProduct(i);

                   
                    if (addedForBuy[i] === true) {
                        removeShoppingCartProduct(i);
                    }

                    notificationBox.classList.remove('active-notification-box');
                }

                notificationBoxRemoveBtn.onclick = () => {
                    notificationBox.classList.remove('active-notification-box');
                }
            }

            break;
        }
    }
}


function addOuterProductToFavoriteProductArea(productClass) {

    for (let i = 0; i < featuredProducts.length; i++) {
        let freaturedProductClass = getClassName(featuredProducts[i], 1);

        if (productClass === freaturedProductClass) {
            if (addedToFavorite[i] === false) {
                notificationMessage.textContent = `Da li ste sigurni da dodate ovaj proizvod u omiljeno?`;
                notificationBoxConfirmBtn.textContent = `Prihvati`;

                addClass(notificationBox, ['animate__animated', 'animate__bounceInRight', 'active-notification-box']);

                setTimeout(() => {
                    removeClass(notificationBox, ['animate__animated', 'animate__bounceInRight']);
                }, 1200);

                notificationBoxConfirmBtn.onclick = () => {
                    controlFavoriteProductItems(i);
                    notificationBox.classList.remove('active-notification-box');
                }

                notificationBoxRemoveBtn.onclick = () => {
                    notificationBox.classList.remove('active-notification-box');
                }

            } else {
                notificationMessage.textContent = `Ova stavka već postoji u omiljenom! Želite da uklonite?`;
                notificationBoxConfirmBtn.textContent = `Ukloni`;

                addClass(notificationBox, ['animate__animated', 'animate__bounceInRight', 'active-notification-box']);

                setTimeout(() => {
                    removeClass(notificationBox, ['animate__animated', 'animate__bounceInRight']);
                }, 1200);

                notificationBoxConfirmBtn.onclick = () => {
                    controlFavoriteProductItems(i);
                    notificationBox.classList.remove('active-notification-box');
                }

                notificationBoxRemoveBtn.onclick = () => {
                    notificationBox.classList.remove('active-notification-box');
                }
            }

            break;
        }
    }
}







let overviewProducts = document.querySelectorAll('.overview-product');
let overviewProductName = document.querySelectorAll('.op-name');
let overviewProductPrice = document.querySelectorAll('.op-price');
let overviewProductToggleBtn = document.querySelectorAll('.op-toggle-btn');
let overviewProductMenuItems = document.querySelectorAll('.op-toggle-menu-item');
let overviewProductAddToCartBtn = document.querySelectorAll('.op-add-to-cart-btn');
let overviewProductDiscountPrice = document.querySelectorAll('.op-discount-price');
let overviewProductAddToFavoriteBtn = document.querySelectorAll('.op-add-to-favorite-btn');

let overviewProductPrevIndex = null;


(function () {
    for (let i = 0; i < overviewProductToggleBtn.length; i++) {
        let overviewProductClassName = getClassName(overviewProducts[i], 1);

        for (let j = 0; j < featuredProducts.length; j++) {
            let featuredProductClassName = getClassName(featuredProducts[j], 1);

            if (overviewProductClassName === featuredProductClassName) {
                overviewProductName[i].textContent = `${productName[j].textContent}`;
                overviewProductPrice[i].textContent = `${productPrice[j].textContent}din/${productUnit[j].textContent}`;
                overviewProductDiscountPrice[i].textContent = `${currentPrice[j].textContent}din/${productUnit[j].textContent}`;
                break;
            }
        }

        overviewProductToggleBtn[i].addEventListener('click', function () {
            for (let j = 0; j < overviewProductToggleBtn.length; j++) {
                overviewProductMenuItems[j].classList.remove('active-op-menu');
            }

            if (overviewProductPrevIndex === i) {
                overviewProductPrevIndex = null;
            } else {
                overviewProductMenuItems[i].classList.add('active-op-menu');
                overviewProductPrevIndex = i;
            }

            overviewProductAddToCartBtn[i].onclick = () => {
                addOuterProductToShoppingCartArea(getClassName(overviewProducts[i], 1));
                overviewProductMenuItems[i].classList.remove('active-op-menu');
                overviewProductPrevIndex = null;
            }

            overviewProductAddToFavoriteBtn[i].onclick = () => {
                addOuterProductToFavoriteProductArea(getClassName(overviewProducts[i], 1));
                overviewProductMenuItems[i].classList.remove('active-op-menu');
                overviewProductPrevIndex = null;
            }

        });
    }
})();



let faqTitle = document.querySelectorAll('.faq-title');
let faqText = document.querySelectorAll('.faq-text');
let faqIcon = document.querySelectorAll('.faq-icon');

let faqPrevIndex = null;

for (let i = 0; i < faqTitle.length; i++) {
    faqTitle[i].addEventListener('click', () => {
        for (let j = 0; j < faqText.length; j++) {
            faqText[j].classList.remove('active-faq-text');
            faqIcon[j].classList.remove('active-faq-icon');
        }

        if (faqPrevIndex === i) {
            faqPrevIndex = null;
        } else {
            faqText[i].classList.add('active-faq-text');
            faqIcon[i].classList.add('active-faq-icon');
            faqPrevIndex = i;
        }

    });
}








let reviewContents = document.querySelectorAll('.review-content');
let prevElemIndex = null;

for (let i = 0; i < reviewContents.length; i++) {
    reviewContents[i].classList.add('close-review');
    reviewContents[i].onclick = () => {
        for (let j = 0; j < reviewContents.length; j++) {
            reviewContents[j].classList.toggle('close-review');
        }
    }
}


let filterMenu = document.querySelectorAll('.filter-menu li');
let filterContents = document.querySelectorAll('.filter-content');


(function () {
    for (let i = 0; i < filterContents.length; i++) {
        if (filterContents[i].getAttribute('data-item') === 'fruits') {
            filterContents[i].classList.add('activeContents');
        } else {
            filterContents[i].classList.add('deleteContents');
        }
    }
})();


(function () {
    for (let i = 0; i < filterMenu.length; i++) {
        filterMenu[i].addEventListener('click', () => {
            for (let j = 0; j < filterMenu.length; j++) {
                filterMenu[j].classList.remove('active-menu');
            }

            filterMenu[i].classList.add('active-menu');
            let attrValue = filterMenu[i].getAttribute('data-list');

            for (let k = 0; k < filterContents.length; k++) {
                
                filterContents[k].classList.add('deleteContents');
                filterContents[k].classList.remove('activeContents');

                
                if (filterContents[k].getAttribute('data-item') === attrValue) {
                    filterContents[k].classList.add('activeContents');
                    filterContents[k].classList.remove('deleteContents');
                }
            }
        });
    }
})();


let lightBox = document.querySelector('.lightbox');
let closeBtn = document.querySelector('#close-lightbox');
let imgCategory = document.querySelector('#image-category');
let lightBoxArrow = document.querySelector('.lightbox-arrow');
let lightBoxShadow = document.querySelector('.lightbox-shadow');
let lightBoxImage = document.querySelector('.image-wrapper img');
let lightboxBuyNowBtn = document.querySelector('.lightbox-buy-btn');


let leftArrow = document.querySelector('#left-arrow');
let rightArrow = document.querySelector('#right-arrow');


let recentProductItemName = document.querySelectorAll('.rec-item-name');
let recentProductItemPrice = document.querySelectorAll('.rec-item-price');
let recentProductTotalSales = document.querySelectorAll('.rec-total-sales');
let recentProductItemUnits = document.querySelectorAll('.rec-item-unit');
let recentProductItemStatus = document.querySelectorAll('.rec-item-status');


let recentProductName = document.querySelector('#rec-name');
let recentProductPrice = document.querySelector('#rec-price');
let recentProductSales = document.querySelector('#rec-sales');
let recentProductUnit = document.querySelector('#rec-unit');
let recentProductStatus = document.querySelector('#rec-status');


let recentProductNameList = [];
let recentProductPriceList = [];
let recentProductUnitsList = [];
let recentProductSalesList = [];
let recentProductStatusList = [];
let recentProductClassNameList = [];


function updatePopularProductInfo(index) {
    let getCategory = filterContents[index].getAttribute('data-item');
    let getImg = filterContents[index].querySelector('img').src;

    if (getCategory === 'fruits') {
        imgCategory.textContent = `voće`;
    } else if (getCategory === 'vegetables') {
        imgCategory.textContent = `povrće`;
    } else if (getCategory === 'eggs') {
        imgCategory.textContent = `jaja`;
    } else if (getCategory === 'dry-fruits') {
        imgCategory.textContent = `suvo voće`;
    } else if (getCategory === 'spices') {
        imgCategory.textContent = `začini`;
    }

    recentProductName.textContent = `${recentProductNameList[index]}`;
    recentProductPrice.textContent = `${recentProductPriceList[index]}`;
    recentProductSales.textContent = `${recentProductSalesList[index]} `;
    recentProductUnit.textContent = `${recentProductUnitsList[index]}+`;
    recentProductStatus.textContent = `${recentProductStatusList[index]}`;

    lightBoxImage.src = getImg;
}


(function () {
    for (let i = 0; i < filterContents.length; i++) {

        recentProductClassNameList.push(getClassName(filterContents[i], 1));

        
        for (let j = 0; j < featuredProducts.length; j++) {
            let freaturedProductClassName = getClassName(featuredProducts[j], 1);
            if (recentProductClassNameList[i] === freaturedProductClassName) {
                recentProductItemName[i].textContent = `${productName[j].textContent}`;
                recentProductItemPrice[i].textContent = `${productPrice[j].textContent} din/${productUnit[j].textContent}`;
                recentProductItemUnits[i].textContent = `${productUnit[j].textContent}`;
            }
        }

        
        recentProductNameList.push(recentProductItemName[i].innerHTML);
        recentProductPriceList.push(recentProductItemPrice[i].innerHTML);
        recentProductUnitsList.push(recentProductItemUnits[i].innerHTML);
        recentProductSalesList.push(recentProductTotalSales[i].innerHTML);
        recentProductStatusList.push(recentProductItemStatus[i].innerHTML);

        
        filterContents[i].addEventListener('click', () => {

            updatePopularProductInfo(i);

            lightBox.classList.add('show-lightbox');
            lightBoxShadow.classList.add('show-shadow');
            lightBoxArrow.classList.add('show-lightbox-arrow');
            controllScrolling.style.overflow = 'hidden';

            let slideIndex = i;

            
            function recentProductSlideLeft() {
                slideIndex--;

                if (slideIndex < 0) {
                    slideIndex = filterContents.length - 1;
                }

                updatePopularProductInfo(slideIndex);
            }

            
            function recentProductSlideRight() {
                slideIndex++;

                if (slideIndex >= filterContents.length) {
                    slideIndex = 0;
                }

                updatePopularProductInfo(slideIndex);
            }

            leftArrow.onclick = () => {
                recentProductSlideLeft();
            }

            rightArrow.onclick = () => {
                recentProductSlideRight();
            }

           
            document.onkeydown = (event) => {
                if (event.keyCode === 37) {
                    recentProductSlideLeft();
                }

                if (event.keyCode === 39) {
                    recentProductSlideRight();
                }
            }

            
            lightboxBuyNowBtn.onclick = () => {
                addOuterProductToShoppingCartArea(recentProductClassNameList[slideIndex]);
            }

            
            closeBtn.onclick = () => {
                lightBox.classList.remove('show-lightbox');
                lightBoxShadow.classList.remove('show-shadow');
                lightBoxArrow.classList.remove('show-lightbox-arrow');
                controllScrolling.style.overflow = 'auto';
            }
        });
    }
})();


let loginForm = document.querySelector('.login-wrap');
let signupForm = document.querySelector('.signup-wrap');

let signupToggleBtn = document.querySelector('#toggle-signup');
let loginToggleBtn = document.querySelector('#toggle-login');

let userBtn = document.querySelector('#login-or-signup');
let loginCloseBtn = document.querySelector('#login-close-btn');
let signupCloseBtn = document.querySelector('#signup-close-btn');

userBtn.onclick = () => {
    toggleBar.classList.remove('active-toggler');
    navigationArea.classList.remove('active-navbar');
    searchBox.classList.remove('active-search-box');
    supportCenter.classList.remove('active-support-center');

    addClass(loginForm, ['animate__animated', 'animate__bounceInDown', 'active-ls']);

    setTimeout(() => {
        removeClass(loginForm, ['animate__animated', 'animate__bounceInDown']);
    }, 1200);

    popupShadow.classList.add("active-popup-shadow");
}

signupToggleBtn.onclick = () => {
    loginForm.classList.remove('active-ls');
    signupForm.classList.add('active-ls');
}

loginToggleBtn.onclick = () => {
    signupForm.classList.remove('active-ls');
    loginForm.classList.add('active-ls');
}

loginCloseBtn.onclick = () => {
    loginForm.classList.remove('active-ls');
    popupShadow.classList.remove("active-popup-shadow");
}

signupCloseBtn.onclick = () => {
    signupForm.classList.remove('active-ls');
    popupShadow.classList.remove("active-popup-shadow");
}


let subscribePopup = document.querySelector('.subscribe-popup');
let subPopupCloseBtn = document.querySelector('.sub-popup-close-btn');

let removeSubscribePopupAnim = setTimeout(() => {
    removeClass(subscribePopup, ['animate__animated', 'animate__bounceInUp']);
}, 2200);

subPopupCloseBtn.onclick = () => {
    subscribePopup.classList.add('remove-sub-popup');
}


let greatDealsProductPopup = document.querySelector('.gd-product-popup-wrap');
let greatDealsPopupCloseBtn = document.querySelector('.gd-popup-close-btn');

let greatDealsProductPopupImage = document.querySelector('.gd-popup-image img');
let greatDealsProductPopupName = document.querySelector('.gd-popup-product-name');
let greatDealsProductPopupDiscount = document.querySelector('.gd-popup-product-discount');
let greatDealsProductPopupPrice = document.querySelector('.gd-popup-product-price');
let greatDealsProductPopupUnit = document.querySelector('.gd-popup-product-unit');
let greatDealsProductPopupRating = document.querySelector('.rating-avg strong');
let greatDealsProductPopupReviewCount = document.querySelector('.gd-popup-review-count');
let greatDealsProductPopupAddToCartBtn = document.querySelector('.gd-popup-add-to-cart-btn');

let greatDealsPopupTimerDays = document.querySelector('.gd-popup-timer-days');
let greatDealsPopupTimerHours = document.querySelector('.gd-popup-timer-hours');
let greatDealsPopupTimerMinutes = document.querySelector('.gd-popup-timer-minutes');
let greatDealsPopupTimerSeconds = document.querySelector('.gd-popup-timer-seconds');

let timerId = null;
let greatDealsProductClassNameList = [];

let monthIndex4 = date.getMonth();
let year4 = date.getFullYear();


function createInfiniteCountdown(date, time) {
    let curntTime = Date.now();
    let eventTime = new Date(`${month[monthIndex4]} ${date}, ${year4} ${time}`).getTime();

    let totalSeconds = (eventTime - curntTime) / 1000;

    if (totalSeconds < 0) {
        monthIndex4 = (monthIndex4 + 1) % 12;

        if (monthIndex4 === 0) {
            year4 = year4 + 1;
        }

        let eventTime = new Date(`${month[monthIndex4]} ${date}, ${year4} ${time}`).getTime();
        totalSeconds = (eventTime - curntTime) / 1000;
    }

    let days = Math.floor(totalSeconds / dayConst);
    totalSeconds = totalSeconds % dayConst;

    let hours = Math.floor(totalSeconds / hourConst);
    totalSeconds = totalSeconds % hourConst;

    let minutes = Math.floor(totalSeconds / minuteConst);
    totalSeconds = totalSeconds % minuteConst;

    let seconds = Math.floor(totalSeconds);

    if (days < 10) {
        days = '0' + days;
    }

    if (hours < 10) {
        hours = '0' + hours;
    }

    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    return [days, hours, minutes, seconds];
}


function showGreatDealsProductPopup(index) {
    let getImage = greatDealsProductImage[index].src;
    let getName = greatDealsProductName[index].textContent;
    let getDiscount = greatDealsProductDiscount[index].textContent;
    let getPrice = greatDealsProductPrice[index].textContent;
    let getUnit = greatDealsProductUnit[index].textContent;
    let getRating = greatDealsProductRating[index].textContent;
    let getReview = greatDealsProductReviewCount[index].textContengreatDeals

    greatDealsProductPopupImage.src = getImage;
    greatDealsProductPopupName.textContent = getName;
    greatDealsProductPopupDiscount.textContent = getDiscount;
    greatDealsProductPopupPrice.textContent = getPrice;
    greatDealsProductPopupUnit.textContent = getUnit;
    greatDealsProductPopupRating.textContent = getRating;
    greatDealsProductPopupReviewCount.textContent = getReview;

    if (timerId) {
        clearInterval(timerId);
    }

    timerId = setInterval(() => {
        if (index === 0) {
            createCountdown = createInfiniteCountdown(date1, time1);
        } else if (index === 1) {
            createCountdown = createInfiniteCountdown(date2, time2);
        } else if (index === 2) {
            createCountdown = createInfiniteCountdown(date3, time3);
        }

        updateDest = [greatDealsPopupTimerDays, greatDealsPopupTimerHours, greatDealsPopupTimerMinutes, greatDealsPopupTimerSeconds];
        updateCountDownTimer(createCountdown, updateDest);

    }, 1000);

    addClass(greatDealsProductPopup, ['animate__animated', 'animate__bounceInDown', 'active-gd-popup']);

    setTimeout(() => {
        removeClass(greatDealsProductPopup, ['animate__animated', 'animate__bounceInDown']);
    }, 1200);

    greatDealsProductPopupAddToCartBtn.onclick = () => {
        let greatDealsProductClass = greatDealsProductClassNameList[index];
        addOuterProductToShoppingCartArea(greatDealsProductClass);
    }

    greatDealsPopupCloseBtn.onclick = () => {
        greatDealsProductPopup.classList.remove('active-gd-popup');
    }

}


(function () {
    for (let i = 0; i < greatDealsProducts.length; i++) {

        greatDealsProductClassNameList.push(getClassName(greatDealsProducts[i], 1));

       
        for (let j = 0; j < featuredProducts.length; j++) {
            let freaturedProductClassName = getClassName(featuredProducts[j], 1);
            if (greatDealsProductClassNameList[i] === freaturedProductClassName) {
                let featuredProductPrice = `${productPrice[j].textContent}`;
                let featuredProductDiscount = `${productDiscount[j].textContent}% popusta`;
                let featuredProductCurrentPrice = `${currentPrice[j].textContent}`;
                let featuredProductUnit = `din/${productUnit[j].textContent}`;

                greatDealsProductPrice[i].textContent = featuredProductCurrentPrice;
                greatDealsProductPrevPrice[i].textContent = featuredProductPrice;
                greatDealsProductDiscount[i].textContent = featuredProductDiscount;
                greatDealsProductUnit[i].textContent = featuredProductUnit;
                greatDealsProductPrevUnit[i].textContent = featuredProductUnit;

                break;
            }
        }

       
        greatDealsProducts[i].addEventListener('click', function () {
            showGreatDealsProductPopup(i);
        });
    }
})();

setTimeout(() => {
    showGreatDealsProductPopup(2);
}, 25000);



let callToActionProduct = document.querySelector('.call-to-action');
let callToActionProductImage = document.querySelector('.cta-image-content img');
let callToActionDiscountPercentage = document.querySelector('.cta-save-per');
let callToActionProductName = document.querySelector('.cta-offer-title');
let callToActionProductType = document.querySelector('.cta-product-type');
let callToActionOfferPrice = document.querySelector('.cta-offer-price');
let callToActionOfferMessage = document.querySelector('.cta-offer-msg');
let callToActionProductBtn = document.querySelector('.cta-button');

let callToActionProductClass = callToActionProduct.getAttribute('class');
let callToActionProductClassName = callToActionProductClass.split(' ')[1];


(function () {
    for (let i = 0; i < featuredProducts.length; i++) {
        let freaturedProductClass = getClassName(featuredProducts[i], 1);

        if (callToActionProductClassName === freaturedProductClass) {
            let ctaProductName = productName[i].textContent.split(' ');

            if (ctaProductName[0] === `Sveža` || ctaProductName.length > 1) {
                callToActionProductName.textContent = `${productName[i].textContent}`;
            } else {
                callToActionProductName.textContent = `Sveža ${productName[i].textContent}`;
            }

            callToActionProductImage.src = `${productImage[i].src}`;
            callToActionDiscountPercentage.textContent = `Uštedite do ${productDiscount[i].textContent}%`;
            callToActionOfferPrice.textContent = `${currentPrice[i].textContent} dinara`;
            callToActionOfferMessage.textContent = `Ponuda važi samo za ${callToActionProductType.textContent}`;
        }
    }
})();


callToActionProductBtn.onclick = () => {
    addOuterProductToShoppingCartArea(callToActionProductClassName);
}

