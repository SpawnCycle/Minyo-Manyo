const basket = document.getElementById("basket");
const sidebar = document.getElementById("sidebar-div");
const products = document.getElementById("products");

function main() {
    // does stuff on startup
}

let isBasketVisible = false;
function toggleBasket() {
    if (isBasketVisible == false) {
        basket.style.display = "inline";
    } else {
        basket.style.display = "none";
    }
    isBasketVisible = !isBasketVisible;
}

let isSidebarVisible = false;
function toggleSidebar() {
    if (isSidebarVisible == false) {
        sidebar.style.display = "inline";
    } else {
        sidebar.style.display = "none";
    }
    isSidebarVisible = !isSidebarVisible;
}