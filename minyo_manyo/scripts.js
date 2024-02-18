const basket = document.getElementById("basket");
const sidebar = document.getElementById("sidebar-div");
const products = document.getElementById("products");

const list_of_items = [
    {
        name: "PI 1 Model B",
        img: "img/product_images/pi_1_model_b.png",
        price: "12 euro",
        desc: "The Raspberry Pi 1 Model B heralded a new era of accessible computing, providing enthusiasts with a compact yet powerful platform for tinkering and learning programming skills.",
    },
    {
        name: "PI 1 Model A",
        img: "img/product_images/pi_1_model_a.png",
        price: "12 euro",
        desc: "Offering the same capabilities as its predecessor but in a more streamlined form factor, the Raspberry Pi 1 Model A was designed for projects where space and power efficiency were paramount.",
    },    
    {
        name: "PI 1 Model B+",
        img: "img/product_images/pi_1_model_b+.png",
        price: "14 euro",
        desc: "Building upon the success of its predecessors, the Raspberry Pi 1 Model B+ introduced enhanced connectivity options and improved power efficiency, perfect for IoT and educational projects alike.",
    },    
    {
        name: "PI 1 Model A+",
        img: "img/product_images/pi_1_model_a+.png",
        price: "14 euro",
        desc: "With its compact design and reduced power consumption, the Raspberry Pi 1 Model A+ provided a cost-effective solution for projects requiring a balance of performance and efficiency.",
    },    
    {
        name: "PI 2 Model B",
        img: "img/product_images/pi_2_model_b.png",
        price: "19 euro",
        desc: "The Raspberry Pi 2 Model B brought significant performance improvements over its predecessors, making it ideal for multimedia applications, gaming, and more demanding projects.",
    },
    {
        name: "PI Zero",
        img: "img/product_images/pi_zero.png",
        price: "5 euro",
        desc: "With its ultra-compact size and affordability, the Raspberry Pi Zero opened up a world of possibilities for embedded projects and IoT applications, without compromising on performance.",
    },
    {
        name: "PI 3 Model B",
        img: "img/product_images/pi_3_model_b.png",
        price: "19 euro",
        desc: "Featuring built-in Wi-Fi and Bluetooth connectivity, the Raspberry Pi 3 Model B offered enhanced versatility and convenience for wireless projects and networking applications.",
    },
    {
        name: "PI Zero W",
        img: "img/product_images/pi_zero_w.png",
        price: "7 euro",
        desc: "The Raspberry Pi Zero W combined the compact form factor of the Pi Zero with integrated Wi-Fi and Bluetooth, making it even easier to create connected devices and IoT solutions.",
    },
    {
        name: "PI 3 Model B+",
        img: "img/product_images/pi_3_model_b+.png",
        price: "23 euro",
        desc: "Building upon the success of its predecessor, the Raspberry Pi 3 Model B+ introduced faster processing speeds and improved networking capabilities, perfect for multitasking and network-heavy applications.",
    },
    {
        name: "PI 3 Model A+",
        img: "img/product_images/pi_3_model_a+.png",
        price: "23 euro",
        desc: "Offering similar performance to the Pi 3 Model B+ but in a smaller form factor, the Raspberry Pi 3 Model A+ was designed for projects where space and power efficiency were critical considerations.",
    },
    {
        name: "PI 4 Model A",
        img: "img/product_images/pi_4_model_a.png",
        price: "29 euro",
        desc: "The Raspberry Pi 4 Model A provided a more affordable entry point into the Pi 4 lineup while still delivering impressive performance, making it ideal for various educational and hobbyist projects.",
    },
    {
        name: "Pi 4 Model B",
        img: "img/product_images/pi_4_model_b.png",
        price: "29 euro",
        desc: "With its powerful quad-core processor, increased RAM options, and support for dual 4K displays, the Raspberry Pi 4 Model B became the go-to choice for demanding projects and applications requiring high performance.",
    },
    {
        name: "PI 400",
        img: "img/product_images/pi_400.png",
        price: "49 euro",
        desc: "Redefining the concept of personal computing, the Raspberry Pi 400 integrated the Pi 4 Model B into a sleek keyboard form factor, offering a complete desktop experience in a compact package.",
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