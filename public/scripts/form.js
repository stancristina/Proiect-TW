//Create input using js

/**
 * Builds a first name input-label pair which will be returned 
 * inside a div parent
 */
var formStatus = [
    false, // product-name
    false, // product-type
    false, // barcode
    false, // material
    false, // description
    false, // price 
];

function getProductNameInput() {

    const inputNumber = 0;

    var productNameLabel = document.createElement("LABEL");
    productNameLabel.setAttribute("for", "productName");
    productNameLabel.appendChild(document.createTextNode("Product Name"));

    var productNameInput = document.createElement("INPUT");
	productNameInput.setAttribute("type", "text");
    productNameInput.setAttribute("id", "productName");

    var errorMessage = document.createElement("SPAN");
    errorMessage.classList.add("errorMessage");
    errorMessage.appendChild(document.createTextNode("Field is mandatory"));
    errorMessage.style.visibility = "hidden";

    var parentDiv = document.createElement("DIV");
    parentDiv.appendChild(productNameLabel);
    parentDiv.appendChild(productNameInput);
    parentDiv.appendChild(errorMessage);

    productNameInput.classList.add("formInput");
    productNameLabel.classList.add("formLabel");

    productNameInput.oninput = function () {

        let isValid = this.value != null && this.value.length > 0; 

        if(!isValid) {
            //invalid
            formStatus[inputNumber] = false;
            errorMessage.style.visibility = "";
            productNameInput.classList.add("invalidInput");
        } else {
            //valid
            formStatus[inputNumber] = true;
            errorMessage.style.visibility = "hidden";
            productNameInput.classList.remove("invalidInput");
        }
    }

    return parentDiv;
}

/**
 * Builds a product name input-label pair which will be returned 
 * inside a div parent
 */
function getProductTypeInput() {

    const inputNumber = 1;

    var productTypeLabel = document.createElement("LABEL");
    productTypeLabel.setAttribute("for", "productType");
    productTypeLabel.appendChild(document.createTextNode("Product Type"));

    var productTypeInput = document.createElement("INPUT");
	productTypeInput.setAttribute("type", "text");
    productTypeInput.setAttribute("id", "productType");

    var errorMessage = document.createElement("SPAN");
    errorMessage.classList.add("errorMessage");
    errorMessage.appendChild(document.createTextNode("Field is mandatory"));
    errorMessage.style.visibility = "hidden";
    
    var parentDiv = document.createElement("DIV");
    parentDiv.appendChild(productTypeLabel);
    parentDiv.appendChild(productTypeInput);
    parentDiv.appendChild(errorMessage);

    productTypeInput.classList.add("formInput");
    productTypeLabel.classList.add("formLabel");

    productTypeInput.oninput = function () {

        var isValid = this.value != null && this.value.length > 0;

        if(!isValid) {
            //invalid
            formStatus[inputNumber] = false;
            errorMessage.style.visibility = "";
            productTypeInput.classList.add("invalidInput");
        } else {
            //valid
            formStatus[inputNumber] = true;
            errorMessage.style.visibility = "hidden";
            productTypeInput.classList.remove("invalidInput");
        }
    }

    return parentDiv;
}

/**
 * Builds a barcode input-label pair which will be returned 
 * inside a div parent
 */
function getBarcodeInput() {

    const inputNumber = 2;

    var barCodeLabel = document.createElement("LABEL");
    barCodeLabel.setAttribute("for", "barCode");
    barCodeLabel.appendChild(document.createTextNode("Barcode"));

    var barCodeInput = document.createElement("INPUT");
	barCodeInput.setAttribute("type", "text");
    barCodeInput.setAttribute("id", "barCode");

    var errorMessage = document.createElement("SPAN");
    errorMessage.classList.add("errorMessage");
    errorMessage.appendChild(document.createTextNode("Field is mandatory"));
    errorMessage.style.visibility = "hidden";
    
    var parentDiv = document.createElement("DIV");
    parentDiv.appendChild(barCodeLabel);
    parentDiv.appendChild(barCodeInput);
    parentDiv.appendChild(errorMessage);

    barCodeInput.classList.add("formInput");
    barCodeLabel.classList.add("formLabel");

    barCodeInput.oninput = function () {

        var isValid = this.value != null && this.value.length > 0;

        if(!isValid) {
            //invalid
            formStatus[inputNumber] = false;
            errorMessage.style.visibility = "";
            barCodeInput.classList.add("invalidInput");
        } else {
            //valid
            formStatus[inputNumber] = true;
            errorMessage.style.visibility = "hidden";
            barCodeInput.classList.remove("invalidInput");
        }
    }

    return parentDiv;
}

/**
 * Builds a material input-label pair which will be returned 
 * inside a div parent
 */
function getMaterialInput() {

    const inputNumber = 3;

    var materalLabel = document.createElement("LABEL");
    materalLabel.setAttribute("for", "material");
    materalLabel.appendChild(document.createTextNode("Material"));

    var materialInput = document.createElement("INPUT");
	materialInput.setAttribute("type", "text");
    materialInput.setAttribute("id", "material");

    var errorMessage = document.createElement("SPAN");
    errorMessage.classList.add("errorMessage");
    errorMessage.appendChild(document.createTextNode("Field is mandatory"));
    errorMessage.style.visibility = "hidden";
    
    var parentDiv = document.createElement("DIV");
    parentDiv.appendChild(materalLabel);
    parentDiv.appendChild(materialInput);
    parentDiv.appendChild(errorMessage);

    materialInput.classList.add("formInput");
    materalLabel.classList.add("formLabel");

    materialInput.oninput = function () {

        var isValid = this.value != null && this.value.length > 0;

        if(!isValid) {
            //invalid
            formStatus[inputNumber] = false;
            errorMessage.style.visibility = "";
            materialInput.classList.add("invalidInput");
        } else {
            //valid
            formStatus[inputNumber] = true;
            errorMessage.style.visibility = "hidden";
            materialInput.classList.remove("invalidInput");
        }
    }

    return parentDiv;
}

/**
 * Builds a description input-label pair which will be returned 
 * inside a div parent
 */
function getDescriptionInput() {

    const inputNumber = 4;

    var descriptionLabel = document.createElement("LABEL");
    descriptionLabel.setAttribute("for", "description");
    descriptionLabel.appendChild(document.createTextNode("Description"));

    var descriptionInput = document.createElement("INPUT");
	descriptionInput.setAttribute("type", "text");
    descriptionInput.setAttribute("id", "description");

    var errorMessage = document.createElement("SPAN");
    errorMessage.classList.add("errorMessage");
    errorMessage.appendChild(document.createTextNode("Field is mandatory"));
    errorMessage.style.visibility = "hidden";
    
    var parentDiv = document.createElement("DIV");
    parentDiv.appendChild(descriptionLabel);
    parentDiv.appendChild(descriptionInput);
    parentDiv.appendChild(errorMessage);

    descriptionInput.classList.add("formInput");
    descriptionLabel.classList.add("formLabel");

    descriptionInput.oninput = function () {

        var isValid = this.value != null && this.value.length > 0;

        if(!isValid) {
            //invalid
            formStatus[inputNumber] = false;
            errorMessage.style.visibility = "";
            descriptionInput.classList.add("invalidInput");
        } else {
            //valid
            formStatus[inputNumber] = true;
            errorMessage.style.visibility = "hidden";
            descriptionInput.classList.remove("invalidInput");
        }
    }

    return parentDiv;
}


function getPriceInput() {

    const inputNumber = 5;

    var priceLabel = document.createElement("LABEL");
    priceLabel.setAttribute("for", "price");
    priceLabel.appendChild(document.createTextNode("Product price"));

    var priceInput = document.createElement("INPUT");
    priceInput.setAttribute("type", "tel");
    priceInput.setAttribute("id", "price");

    var errorMessage = document.createElement("SPAN");
    errorMessage.classList.add("errorMessage");
    errorMessage.appendChild(document.createTextNode("Field is mandatory"));
    errorMessage.style.visibility = "hidden";

    var parentDiv = document.createElement("DIV");
    parentDiv.appendChild(priceLabel);
    parentDiv.appendChild(priceInput);
    parentDiv.appendChild(errorMessage);
    
    priceInput.classList.add("formInput");
    priceLabel.classList.add("formLabel");

    priceInput.oninput = function () {

        var isValid = this.value != null && this.value.length > 0;

        if(!isValid) {
            //invalid
            formStatus[inputNumber] = false;
            errorMessage.style.visibility = "";
            priceInput.classList.add("invalidInput");
        } else {
            //valid
            formStatus[inputNumber] = true;
            errorMessage.style.visibility = "hidden";
            priceInput.classList.remove("invalidInput");
        }
    }

    return parentDiv;
}


//checkbox input
function getRestrictionInput() {

    var RestrictionInput = document.createElement("INPUT");
    RestrictionInput.setAttribute("type", "checkbox");
    RestrictionInput.setAttribute("id", "restriction");
    var RestrictionLabel = document.createElement("LABEL");
    RestrictionLabel.setAttribute("for", "restriction");
    RestrictionLabel.appendChild(document.createTextNode("Is refundable"));
    
    var parentDiv = document.createElement("DIV");
    parentDiv.appendChild(RestrictionInput);
    parentDiv.appendChild(RestrictionLabel);

    RestrictionInput.classList.add("formRInput");
    RestrictionLabel.classList.add("formRLabel");

    return parentDiv;
}

//range input
function getRatingInput() {

    var rangeLabel = document.createElement("LABEL");
    rangeLabel.setAttribute("for", "rangeInput");
    rangeLabel.appendChild(document.createTextNode("Rating"));

    var rangeInput = document.createElement("INPUT");
    rangeInput.setAttribute("type", "range");
    rangeInput.setAttribute("id", "rangeInput");
    
    var parentDiv = document.createElement("DIV");
    parentDiv.appendChild(rangeLabel);
    parentDiv.appendChild(rangeInput);

    rangeLabel.classList.add("formRatingInput");
    rangeInput.classList.add("formRatingLabel");

    return parentDiv;
}


window.onload = function main(event) {

    // Check if the user is logged in
    let token = localStorage.getItem("token");
    if(token == undefined) {
        alert("You need to be logged in to access this page");
        window.location.replace("login.html");
    }

    document.getElementById("return").onclick = () => {
        window.location.replace("ring.html");
    }
	
    var subtitle = document.createElement("h3");
    var subtitleText = document.createTextNode("Welcome to the Create Products Page");
    subtitle.appendChild(subtitleText);
    document.body.appendChild(subtitle);

    subtitle.classList.add("subtitleText");
    
    // Appending first name input and label
    document.body.appendChild(getProductNameInput());

    // Appending last name input and label
    document.body.appendChild(getProductTypeInput());

    // Appending barcode input and label
    document.body.appendChild(getBarcodeInput());
    
    // Appending material input and label
     document.body.appendChild(this.getMaterialInput());
    
    // Appending description input and label
    document.body.appendChild(this.getDescriptionInput());

    //Appending phone number input and label
    document.body.appendChild(getPriceInput());

    //Appending hasParentalRestriction input and label
    document.body.appendChild(getRestrictionInput());

    //Appending rating input and label
    document.body.appendChild(getRatingInput());

    var submitButton = document.createElement("input");
    submitButton.type = "button";
    submitButton.id = "submit_button";
    submitButton.value = "Create object";
    submitButton.onclick = submitForm;
    document.body.appendChild(submitButton);
}

function submitForm() {
    // Check if form is valid;
    for(let i = 0; i < formStatus.length; i++) {
        if(formStatus[i] == false) {
            alert("Not all the fields ar valid");
            return;
        }
    }

    // Get the token
    let token = localStorage.getItem("token");
    if(token == undefined) {
        alert("You need to be logged in to access this page");
        window.location.replace("login.html");
    }

    // Collect product data
    let data = {
        "product": {
            "productName": document.getElementById("productName").value,
            "productType": document.getElementById("productType").value,
            "barcode": document.getElementById("barCode").value,
            "price": document.getElementById("price").value,
            "material": document.getElementById("material").value,
            "isRefundable": document.getElementById("restriction").checked,
            "rating": document.getElementById("rangeInput").value / 10,
            "description": document.getElementById("description").value
        }
    }

    // Prepare request
    var settings = {
        "url": "http://localhost:3000/api/product",
        "type": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + token,
            "Access-Control-Allow-Origin": "*"
        },
        "data": JSON.stringify(data),
    };

    // Do request
    $.ajax(settings).success(function (response) {
        alert("Object created");
    });

    window.location.replace("ring.html");
      
}