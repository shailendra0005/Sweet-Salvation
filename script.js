// Shoping cart start at line 205
// Buttons for adding event listeners
const allBtn = document.querySelector("[data-category='all']");
const cakeBtn = document.querySelector("[data-category='cake']");
const cupcakeBtn = document.querySelector("[data-category='cupcake']");
const dougnutBtn = document.querySelector("[data-category='dougnut']");
const sweetBtn = document.querySelector("[data-category='sweet']");
const modalContainer = document.querySelector(".modalContainer");
const modalBtn = document.querySelector(".fa-window-close");
const bodyElement = document.querySelector("body");
const cart = document.querySelectorAll(".fa-shopping-cart");
// Search btn
const searchBtn = document.getElementById("searchBtn");

// Card Elements
const cakeCards = document.querySelectorAll("[data-item='cake']");
const cupcakeCards = document.querySelectorAll("[data-item='cupcake']");
const dougnutCards = document.querySelectorAll("[data-item='dougnut']");
const sweetCards = document.querySelectorAll("[data-item='sweet']");
const allCards = document.querySelectorAll("[data-item]");

// Image List 
var imageList = [];
var imageIndex;

// Modal Arrows 
const leftArrow = document.querySelector(".fa-arrow-circle-left");
const rightArrow = document.querySelector(".fa-arrow-circle-right");

cakeBtn.addEventListener("click", function () {
    // hide all exept cake items
    for (let i = 0; i < cupcakeCards.length; i++) {
        cupcakeCards[i].classList = "hide";
    }
    for (let i = 0; i < dougnutCards.length; i++) {
        dougnutCards[i].classList = "hide";
    }
    for (let i = 0; i < sweetCards.length; i++) {
        sweetCards[i].classList = "hide";
    }
    for (let i = 0; i < cakeCards.length; i++) {
        cakeCards[i].classList = "show";
    }
});
cupcakeBtn.addEventListener("click", function () {
    // hide all exept cupcake items
    for (let i = 0; i < cakeCards.length; i++) {
        cakeCards[i].classList = "hide";
    }
    for (let i = 0; i < dougnutCards.length; i++) {
        dougnutCards[i].classList = "hide";
    }
    for (let i = 0; i < sweetCards.length; i++) {
        sweetCards[i].classList = "hide";
    }
    for (let i = 0; i < cupcakeCards.length; i++) {
        cupcakeCards[i].classList = "show";
    }
});
dougnutBtn.addEventListener("click", function () {
    // hide all exept dougnut items
    for (let i = 0; i < cakeCards.length; i++) {
        cakeCards[i].classList = "hide";
    }
    for (let i = 0; i <cupcakeCards.length; i++) {
        cupcakeCards[i].classList = "hide";
    }
    for (let i = 0; i < sweetCards.length; i++) {
        sweetCards[i].classList = "hide";
    }
    for (let i = 0; i < dougnutCards.length; i++) {
        dougnutCards[i].classList = "show";
    }
});
sweetBtn.addEventListener("click", function () {
    // hide all exept sweet items
    for (let i = 0; i < cakeCards.length; i++) {
        cakeCards[i].classList = "hide";
    }
    for (let i = 0; i < cupcakeCards.length; i++) {
        cupcakeCards[i].classList = "hide";
    }
    for (let i = 0; i < dougnutCards.length; i++) {
       dougnutCards[i].classList = "hide";
    }
    for (let i = 0; i < sweetCards.length; i++) {
        sweetCards[i].classList = "show";
    }
});
allBtn.addEventListener("click", function () {
    // show all items
    for (let i = 0; i < cakeCards.length; i++) {
        cakeCards[i].classList = "show";
    }
    for (let i = 0; i < cupcakeCards.length; i++) {
        cupcakeCards[i].classList = "show";
    }
    for (let i = 0; i < dougnutCards.length; i++) {
        dougnutCards[i].classList = "show";
    }
    for (let i = 0; i < sweetCards.length; i++) {
        sweetCards[i].classList = "show";
    }
});

// Custom search
function customSearch() {
    var searchText = document.querySelector("input").value.toLowerCase();
    var cardsList = []; // used as plaseholder for all cards what have searched text in it
    var filteredList = []; // removed duplicates from unsearchedCards
    var unsearchedCards = []; // all ther cards - used to add "hide" class

    // loot trought all cards and check if they have searched text in it
    for (let i = 0; i < allCards.length; i++) {
        allCards[i].classList = "show"; // restart displayed cards to all visible
        if (allCards[i].dataset.item.search(searchText) >= 0) {
            cardsList.push(allCards[i].dataset.item);
        }
        else {
            unsearchedCards.push(allCards[i].dataset.item);
        }
    }
    filteredList = [... new Set(unsearchedCards)]; //filter unsearched cards from duplicated
    var hiddenCards = [];

    for (let i = 0; i < filteredList.length; i++) {
        hiddenCards = (document.querySelectorAll("[data-item=" + filteredList[i] + "]"));
        for (let j = 0; j < hiddenCards.length; j++) {
            hiddenCards[j].classList = "hide";
        }

    }
    // clear input after search
    document.querySelector("input").value = "";
    document.querySelector("input").placeholder = "search";
}
// Custom search added to search btn
searchBtn.addEventListener("click", function () {
    customSearch();
});

// Custom search added to input and work when enter is pressed
document.querySelector("input").addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        customSearch();
    }
});

const shopingCart = document.querySelectorAll(".fa-shopping-cart");
const modalElement = document.querySelectorAll(".modal");
// Show shoping cart on hover of image 
for (let i = 0; i < allCards.length; i++) {
    // show shoping cart on hover
    allCards[i].addEventListener("mouseover", function () {
        if (allCards[i].childNodes[1].childNodes[3].classList == "") {
            allCards[i].childNodes[1].childNodes[3].classList = "showShopingCart";
        }
    });
    // hide shoping cart whan user move mouse away
    allCards[i].addEventListener("mouseout", function () {
        if (allCards[i].childNodes[1].childNodes[3].classList == "showShopingCart") {
            allCards[i].childNodes[1].childNodes[3].classList = "";
        }
    });

    /* MODAL*/
    allCards[i].childNodes[1].childNodes[1].addEventListener("click", function () {
        let currentImage = allCards[i].childNodes[1].childNodes[1].src; // save clicked image
        modalContainer.classList.add("showModal"); // show modal
        bodyElement.classList.add("greyBackground"); // change background of page when modal is active
        modalContainer.childNodes[1].childNodes[1].src = currentImage; // let modal image match clicked
        imageIndex = i; // Save index of modal image - used to change image of modal with arrows
    });

    // Make image list
    imageList.push(allCards[i].childNodes[1].childNodes[1].src);
}

// modal btn 
modalBtn.addEventListener("click", function () {
    modalContainer.classList.remove("showModal"); // remove modal
    bodyElement.classList.remove("greyBackground"); // reverse background
});

// modal arrows 
leftArrow.addEventListener("click", function () {
    if (imageIndex == 0) {
        imageIndex = imageList.length-1;
    }
    else {
        imageIndex--;
    }
    modalContainer.childNodes[1].childNodes[1].src = imageList[imageIndex];
});
rightArrow.addEventListener("click", function () {
    if (imageIndex == imageList.length - 1) {
        imageIndex = 0;
    }
    else {
        imageIndex++;
    }
    modalContainer.childNodes[1].childNodes[1].src = imageList[imageIndex];
});

// Shoping cart
// placeholders
var imageSrc = "";
var name = "";
var priceWithDollar = "";
var price = 0;
// dom elements
var cartCount = document.getElementById("cartCount");
var cartPrice = document.getElementById("cartPrice");
var cartBtn = document.getElementById("cartList");
var cartModal = document.getElementById("cartListModal");
var cartModalTotal = document.getElementById("cartModalTotal");
var currentTotal = 0;

// Create cart item placeholder - modal
var cartModalData = document.getElementById("cartModalData");
cartModalData.id = "cartModalData";

for (let i = 0; i < cart.length; i++) {
    cart[i].addEventListener("click", function () {
        imageSrc = cart[i].parentNode.parentNode.childNodes[1].src;
        name = cart[i].parentNode.parentNode.parentNode.childNodes[3].childNodes[1].innerText;
        priceWithDollar = cart[i].parentNode.parentNode.parentNode.childNodes[3].childNodes[3].innerText;
        price = priceWithDollar.slice(0, -1);
        currentTotal = cartPrice.innerText * 1 + price * 1;
        
        cartCount.innerText = cartCount.innerText * 1 + 1;
        cartPrice.innerText = currentTotal;
        alert("Item added to cart");

        // create cart item every time user click on btn
        var cartItem = document.createElement("div");
        var cartModalImage = document.createElement("img");
        var cartModalItemContainer = document.createElement("div");
        var cartModalName = document.createElement("p");
        var cartModalPrice = document.createElement("p");
        var cartModalDeleteIcon = document.createElement("p");

        // update image
        cartModalImage.src = imageSrc;
        cartItem.appendChild(cartModalImage);

        // update name and price
        cartModalName.innerText = name;
        cartModalPrice.innerText = price + "$";
        cartModalItemContainer.appendChild(cartModalName);
        cartModalItemContainer.appendChild(cartModalPrice);
        cartItem.appendChild(cartModalItemContainer);

        // add delete icon
        cartModalDeleteIcon.innerHTML = '<i class="fas fa-trash"></i>';
        cartItem.appendChild(cartModalDeleteIcon);
        cartModalDeleteIcon.style.cursor = "pointer";
        
        // Remove item when bin icon is clicked
        cartModalDeleteIcon.addEventListener("click", function () {
            // reduce count
            cartCount.innerText = cartCount.innerText * 1 - 1;
            // reduce price
            cartPrice.innerText = currentTotal - (cartModalPrice.innerText.slice(0, -1) * 1);
            cartModalTotal.innerText = cartPrice.innerText;
            // remove item
            cartItem.remove();
            // restart current price
            currentTotal = cartPrice.innerText;
        });
        // Change size of remove icon / bin on hover
        cartModalDeleteIcon.addEventListener("mouseover", function () {
            cartModalDeleteIcon.style.color = "red";
            cartModalDeleteIcon.style.fontSize = "105%";
        });
        cartModalDeleteIcon.addEventListener("mouseout", function () {
            cartModalDeleteIcon.style.color = "black";
            cartModalDeleteIcon.style.fontSize = "100%";
        });
        // total price
        cartModalTotal.innerText = currentTotal;
        cartModalData.appendChild(cartItem);


        // Clear all items from cart
        const clearCart = document.getElementById("clearCart");
        clearCart.addEventListener("click", function () {
            for (let i = 0; i < cartModalData.childNodes.length; i++) {
                cartModalData.childNodes[i].remove();
                cartCount.innerText = 0;
                cartPrice.innerText = 0;
                cartModalTotal.innerText = 0;
            }
        });
    });
}


// Add modal to cart btn
cartBtn.addEventListener("click", function () {
    if (cartModal.style.display == "none") { // Used to toggle btn
        if (cartCount != 0) {
            // open modal
            cartModal.style.display = "block";
        }
        else {
            // open modal
            cartModal.style.display = "block";
        }
    }
    else { // Toggle btn
        cartModal.style.display = "none";
    }
});

// add delete btn to remove item from cart and remove also cart count and price
// style elements in modal
// add remove all function / restart


