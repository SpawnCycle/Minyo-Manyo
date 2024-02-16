const basket = document.getElementById("basket");
const sidebar = document.getElementById("sidebar-div");
const products = document.getElementById("products");

const list_of_items = [
    {
        name: "Model B",
        img: "img/pi_1_model_b.png",
        price: "10 euro",
        desc: "This is an example short description But description lenght shouldnt be more than this for each item it will just be different text",
    },
    {
        name: "Model B",
        img: "img/pi_1_model_b.png",
        price: "10 euro",
        desc: "This is an example short description But description lenght shouldnt be more than this for each item it will just be different text",
    },    
    {
        name: "Model B",
        img: "img/pi_1_model_b.png",
        price: "10 euro",
        desc: "This is an example short description But description lenght shouldnt be more than this for each item it will just be different text",
    },    
    {
        name: "Model B",
        img: "img/pi_1_model_b.png",
        price: "10 euro",
        desc: "This is an example short description But description lenght shouldnt be more than this for each item it will just be different text",
    },    
    {
        name: "Model B",
        img: "img/pi_1_model_b.png",
        price: "10 euro",
        desc: "This is an example short description But description lenght shouldnt be more than this for each item it will just be different text",
    },
    {
        name: "Model B",
        img: "img/pi_1_model_b.png",
        price: "10 euro",
        desc: "This is an example short description But description lenght shouldnt be more than this for each item it will just be different text",
    },
    
]

function main() {
    make_products()
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

function make_products() {
    list_of_items.forEach(element => {
        var div = document.createElement("div");
        div.setAttribute("class", "product_showcase");
        var image_div = document.createElement("div");
        image_div.setAttribute("class", "product_image");
        image_div.innerHTML = "<img src = \'"+ element.img +"\' alt = \'product image\'>"; // we do a bit of react - L
        var desc_div = document.createElement("div")
        desc_div.setAttribute("class", "product_desc");
        desc_div.innerHTML = `
        <h3>`+ element.name +`</h3>
        <p>`+ element.desc +`</p>
        `;
        div.appendChild(image_div);
        div.appendChild(desc_div);
        products.appendChild(div);
    });
}

function remove_products() {
    let items = document.getElementsByClassName("product_showcase");

    // debug
    // console.log("huh???")

    while (items[0]) { // because it constantly removes from list, so iterating the list would skip elements
        items[0].parentNode.removeChild(items[0]);
    }
}