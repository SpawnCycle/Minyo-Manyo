const basket = document.getElementById("basket");
const sidebar = document.getElementById("sidebar-div");
const products = document.getElementById("products");
const bask_elements = document.getElementById("basket_items");
const checkout = document.getElementById("checkout");
const price = document.getElementById("price");
const popper = document.getElementById("popup");
const popper_inf = document.getElementById("popup_info");

let poppedup = false;
let total = 0.0;

function main() {
    // build_by_price()
    // build_by_price("desc")
    make_products()
    recalc_price()
    popup("test")
    // does stuff on startup
}

function popup(info) {
    if (!poppedup) {
        change_popup_info(info)
        popper.style.top = "50%";
        poppedup = true;
    }
}

function close_popup() {
    if (poppedup) {
        popper.style.top = "-50%";
        poppedup = false;
    }

}

function change_popup_info(info) {
    switch (info) {
        case "test":
            popper_inf.innerText = "info";
            break;
        case "bui":
            popper_inf.innerText = "Thank you for buying " + total + " € ammount of items";
            break;
    }
}

function checkout_baton() {
    close_popup()
    sleep(500).then(() => {
        while (bask_elements.children && bask_elements.children[0]) {
            bask_elements.removeChild(bask_elements.children[0])
        }
        popup("bui")
        recalc_price()
    })
}

function make_products(items = list_of_items) {
    items.forEach(element => {
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
        var buton = document.createElement("div");
        buton.setAttribute("class", "price_and_buy");
        buton.innerHTML = `
            <p>` + element.price + `</p>
            <button onclick="buy(this)" id = "` + element.name + `">Buy</button>
        
        `; // we love react
        div.appendChild(buton);
        div.appendChild(image_div);
        div.appendChild(desc_div);
        products.appendChild(div);
    });
}

function buy(that) {
    let name = that.id;

    if (name) {
        add_to_basket(name);
    }
}

function add_to_basket(name) {
    list_of_items.forEach(element => {
        if (element.name == name) {
            let master_div = document.createElement("div");
            master_div.setAttribute("class", "basket_element");
            let img_div = document.createElement("div");
            img_div.setAttribute("class", "basket_img");
            img_div.innerHTML = `
                <img src="` + element.img + `" alt="kep">
            `;
            master_div.appendChild(img_div);
            let desc_div = document.createElement("div");
            desc_div.setAttribute("class", "basket_desc");
            desc_div.innerHTML = `
                <p id="` + element.name + `">` + element.name + `</p>
                <p>` + element.price + `</p>
                <button onclick="remove_from_basket(this)" id ="` + element.name + `">Remove</button>
            `;
            master_div.appendChild(desc_div);
            document.getElementById("basket_items").appendChild(master_div);
        }
    });
    recalc_price()
}

function remove_from_basket(button) {
    let item_removed = button.parentElement.firstChild.innerText; // for future use, maybe alert?
    let item_div = button.parentElement.parentElement;
    bask_elements.removeChild(item_div);
    recalc_price()
}

function recalc_price() {
    total = 0.00;
    let to_find = [];
    let elements = document.getElementsByClassName("basket_desc");
    for (const child of elements) {
        for (const chid of child.children) {
            if (chid.tagName == "BUTTON") {
                to_find.push(chid.id);
            }
        }
    }
    for (item of to_find) {
        for (i of list_of_items) {
            if (i.name == item) {
                if (parseInt(i.price) == 0) {
                    total += 0;
                } else {
                    total += parseFloat(i.price) + 0.99;
                }

            }
        }
    }
    price.innerText = total + " €";
}

function remove_products() {
    let items = document.getElementsByClassName("product_showcase");

    while (items[0]) { // because it constantly removes from list, so iterating the list would skip elements
        items[0].parentNode.removeChild(items[0]);
    }
}

// let isBasketVisible = false;
// function toggleBasket() {
//     if (isBasketVisible == false) {
//         basket.style.display = "inline";
//     } else {
//         basket.style.display = "none";
//     }
//     isBasketVisible = !isBasketVisible;
// }

function build_by_price(which_way = "asc") {
    remove_products();
    make_products(sort_by_price(which_way));
}

function sort_by_price(which_way) {
    let sorted_list = [];
    list_of_items.forEach(element => {
        sorted_list.push(element)
    });

    for (let i = 0; i < sorted_list.length; i++) {
        for (j = 0; i <sorted_list.length; i++) {
            if (parseInt(sorted_list[j].price > sorted_list[j + 1].price)) {
                let tmp = sorted_list[j + 1];
                sorted_list[j + 1] = sorted_list[j];
                sorted_list[j] = tmp;
            }
        }
    }

    switch (which_way) {
        case "asc":
            return sorted_list;
            break;
        case "desc":
            return sorted_list.reverse();
            break;
        default:
            return sorted_list;
            break;
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const list_of_items = [
    {
        name: "PI 1 Model B",
        img: "img/product_images/pi_1_model_b.png",
        price: "11,99 €",
        desc: "The Raspberry Pi 1 Model B heralded a new era of accessible computing, providing enthusiasts with a compact yet powerful platform for tinkering and learning programming skills.",
    },
    {
        name: "PI 1 Model A",
        img: "img/product_images/pi_1_model_a.png",
        price: "11,99 €",
        desc: "Offering the same capabilities as its predecessor but in a more streamlined form factor, the Raspberry Pi 1 Model A was designed for projects where space and power efficiency were paramount.",
    },    
    {
        name: "PI 1 Model B+",
        img: "img/product_images/pi_1_model_b+.png",
        price: "13,99 €",
        desc: "Building upon the success of its predecessors, the Raspberry Pi 1 Model B+ introduced enhanced connectivity options and improved power efficiency, perfect for IoT and educational projects alike.",
    },    
    {
        name: "PI 1 Model A+",
        img: "img/product_images/pi_1_model_a+.png",
        price: "13,99 €",
        desc: "With its compact design and reduced power consumption, the Raspberry Pi 1 Model A+ provided a cost-effective solution for projects requiring a balance of performance and efficiency.",
    },    
    {
        name: "PI 2 Model B",
        img: "img/product_images/pi_2_model_b.png",
        price: "18,99 €",
        desc: "The Raspberry Pi 2 Model B brought significant performance improvements over its predecessors, making it ideal for multimedia applications, gaming, and more demanding projects.",
    },
    {
        name: "PI Zero",
        img: "img/product_images/pi_zero.png",
        price: "4,99 €",
        desc: "With its ultra-compact size and affordability, the Raspberry Pi Zero opened up a world of possibilities for embedded projects and IoT applications, without compromising on performance.",
    },
    {
        name: "PI 3 Model B",
        img: "img/product_images/pi_3_model_b.png",
        price: "18,99 €",
        desc: "Featuring built-in Wi-Fi and Bluetooth connectivity, the Raspberry Pi 3 Model B offered enhanced versatility and convenience for wireless projects and networking applications.",
    },
    {
        name: "PI Zero W",
        img: "img/product_images/pi_zero_w.png",
        price: "6,99 €",
        desc: "The Raspberry Pi Zero W combined the compact form factor of the Pi Zero with integrated Wi-Fi and Bluetooth, making it even easier to create connected devices and IoT solutions.",
    },
    {
        name: "PI 3 Model B+",
        img: "img/product_images/pi_3_model_b+.png",
        price: "22,99 €",
        desc: "Building upon the success of its predecessor, the Raspberry Pi 3 Model B+ introduced faster processing speeds and improved networking capabilities, perfect for multitasking and network-heavy applications.",
    },
    {
        name: "PI 3 Model A+",
        img: "img/product_images/pi_3_model_a+.png",
        price: "22,99 €",
        desc: "Offering similar performance to the Pi 3 Model B+ but in a smaller form factor, the Raspberry Pi 3 Model A+ was designed for projects where space and power efficiency were critical considerations.",
    },
    {
        name: "PI 4 Model A",
        img: "img/product_images/pi_4_model_a.png",
        price: "28,99 €",
        desc: "The Raspberry Pi 4 Model A provided a more affordable entry point into the Pi 4 lineup while still delivering impressive performance, making it ideal for various educational and hobbyist projects.",
    },
    {
        name: "Pi 4 Model B",
        img: "img/product_images/pi_4_model_b.png",
        price: "28,99 €",
        desc: "With its powerful quad-core processor, increased RAM options, and support for dual 4K displays, the Raspberry Pi 4 Model B became the go-to choice for demanding projects and applications requiring high performance.",
    },
    {
        name: "PI 400",
        img: "img/product_images/pi_400.png",
        price: "48,99 €",
        desc: "Redefining the concept of personal computing, the Raspberry Pi 400 integrated the Pi 4 Model B into a sleek keyboard form factor, offering a complete desktop experience in a compact package.",
    },

    
]