
let ring_imgs = []

window.onload = function main(event) {

    document.getElementById("new_product").onclick = () => {
        window.location.replace("form.html");
    }

    let ring_container = document.getElementById("ring_container");

    ring_imgs.push("https://images-na.ssl-images-amazon.com/images/I/61MnT8q%2B3UL._UL1400_.jpg");
    ring_imgs.push("https://images-na.ssl-images-amazon.com/images/I/71Pzqic%2BArL._UL1500_.jpg");
    ring_imgs.push("https://www.candere.com/media/catalog/product/cache/1/yellow_gold_default/9df78eab33525d08d6e5fb8d27136e95/c/0/c006367_1_2.jpg");

    // Check if the user is logged in
    let token = localStorage.getItem("token");
    if(token == undefined) {
        alert("You need to be logged in to access this page");
        window.location.replace("login.html");
    }

    // Do a Get request to get all the products
    var settings = {
        "url": "http://localhost:3000/api/product",
        "type": "GET",
        "timeout": 0,
        "headers": {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + token,
          "Access-Control-Allow-Origin": "*"
        }
      };
      
    // For every product, create a html section with the data
    $.ajax(settings).success(function (response) {
        for(let i = 0; i < response.length; i ++) {
            ring_container.appendChild(getSingleProductTemplate(response[i]));
        }
    });

}

function getSingleProductTemplate(product_data) {
    console.log(product_data);

    // Create a div which has an img (randomly picked from the topmost declared array)
    // and an unordered list with the data from the current product
    var div = document.createElement("div");
    div.classList.add("product_item");
    var img = document.createElement("img");
    img.style.height = "200px";
    img.style.height = "200px";

    if(ring_imgs.length > 0) {
        img.src = ring_imgs[ring_imgs.length - 1];
        ring_imgs.pop();
    } else {
        img.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/No_image_available_600_x_450.svg/1280px-No_image_available_600_x_450.svg.png";
    }

    var ul = document.createElement("ul");

    var productName = document.createElement("li");
    ul.appendChild(productName);
    productName.innerText = "Product Name: " + product_data["productName"];

    var productType = document.createElement("li");
    ul.appendChild(productType);
    productType.innerText = "Product Type: " + product_data["productType"];

    var price = document.createElement("li");
    ul.appendChild(price);
    price.innerText = "Price " + product_data["price"];

    var rating = document.createElement("li");
    ul.appendChild(rating);
    rating.innerText = "Rating " + product_data["rating"];

    var barcode = document.createElement("li");
    ul.appendChild(barcode);
    barcode.innerText = "Barcode: " + product_data["barcode"];

    div.appendChild(img);
    div.appendChild(ul);
    return div;
}