//Create input using js

/**
 * Builds a first name input-label pair which will be returned 
 * inside a div parent
 */
var formStatus = [true, true, true, true];

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
 * Builds an email input-label pair which will be returned 
 * inside a div parent
 */
function getEmailInput() {

    const inputNumber = 3;

    var emailLabel = document.createElement("LABEL");
    emailLabel.setAttribute("for", "email");
    emailLabel.appendChild(document.createTextNode("Company's Email"));

    var emailInput = document.createElement("INPUT");
	emailInput.setAttribute("type", "email");
    emailInput.setAttribute("id", "email");

    var errorMessage = document.createElement("SPAN");
    errorMessage.classList.add("errorMessage");
    errorMessage.appendChild(document.createTextNode("Field is mandatory"));
    errorMessage.style.visibility = "hidden";
    
    var parentDiv = document.createElement("DIV");
    parentDiv.appendChild(emailLabel);
    parentDiv.appendChild(emailInput);
    parentDiv.appendChild(errorMessage);


    emailInput.classList.add("formInput");
    emailLabel.classList.add("formLabel");

    emailInput.oninput = function () {

        var isValid = this.value != null && this.value.length > 0;

        if(!isValid) {
            //invalid
            formStatus[inputNumber] = false;
            errorMessage.style.visibility = "";
            emailInput.classList.add("invalidInput");
        } else {
            //valid
            formStatus[inputNumber] = true;
            errorMessage.style.visibility = "hidden";
            emailInput.classList.remove("invalidInput");
        }
    }

    return parentDiv;
}

/**
 * Builds a password input-label pair which will be returned 
 * inside a div parent
 */
function getPasswordInput() {

    const inputNumber = 4;

    var passwordLabel = document.createElement("LABEL");
    passwordLabel.setAttribute("for", "password");
    passwordLabel.appendChild(document.createTextNode("Password"));

    var passwordInput = document.createElement("INPUT");
	passwordInput.setAttribute("type", "password");
    passwordInput.setAttribute("id", "password");

    var errorMessage = document.createElement("SPAN");
    errorMessage.classList.add("errorMessage");
    errorMessage.appendChild(document.createTextNode("Password must contain lowercase and uppercase letters and have at least 8 characters"));
    errorMessage.style.visibility = "hidden";
    
    var parentDiv = document.createElement("DIV");
    parentDiv.appendChild(passwordLabel);
    parentDiv.appendChild(passwordInput);
    parentDiv.appendChild(errorMessage);

    passwordInput.classList.add("formInput");
    passwordLabel.classList.add("formLabel");

    passwordInput.oninput = function () {

        var hasLowerUpperDigitSpecial = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/g
        var isValid = this.value != null && this.value.length >= 8 && this.value.match(hasLowerUpperDigitSpecial);

        if(!isValid) {
            //invalid
            formStatus[inputNumber] = false;
            errorMessage.style.visibility = "";
            passwordInput.classList.add("invalidInput");
        } else {
            //valid
            formStatus[inputNumber] = true;
            errorMessage.style.visibility = "hidden";
            passwordInput.classList.remove("invalidInput");
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


//radio input
function getMaleInput() {

    const inputNumber = 6;

    var maleInput = document.createElement("INPUT");
    maleInput.setAttribute("type", "radio");
    maleInput.setAttribute("id", "male");
    var maleLabel = document.createElement("LABEL");
    maleLabel.setAttribute("for", "male");
    maleLabel.appendChild(document.createTextNode("Male"));
    
    var parentDiv = document.createElement("DIV");
    parentDiv.appendChild(maleInput);
    parentDiv.appendChild(maleLabel);

    maleInput.classList.add("formGenderInput");
    maleLabel.classList.add("formGenderLabel");

    return parentDiv;

}

function getFemaleInput() {

    const inputNumber = 7;

    var femaleInput = document.createElement("INPUT");
    femaleInput.setAttribute("type", "radio");
    femaleInput.setAttribute("id", "female");
    var femaleLabel = document.createElement("LABEL");
    femaleLabel.setAttribute("for", "female");
    femaleLabel.appendChild(document.createTextNode("Female"));
    
    var parentDiv = document.createElement("DIV");
    parentDiv.appendChild(femaleInput);
    parentDiv.appendChild(femaleLabel);

    femaleInput.classList.add("formGenderInput");
    femaleLabel.classList.add("formGenderLabel");

    return parentDiv;

}


//checkbox input
function getRestrictionInput() {

    const inputNumber = 8;

    var RestrictionInput = document.createElement("INPUT");
    RestrictionInput.setAttribute("type", "checkbox");
    RestrictionInput.setAttribute("id", "restriction");
    var RestrictionLabel = document.createElement("LABEL");
    RestrictionLabel.setAttribute("for", "restriction");
    RestrictionLabel.appendChild(document.createTextNode("I agree to the Terms of Service and Privacy Policy"));
    
    var parentDiv = document.createElement("DIV");
    parentDiv.appendChild(RestrictionInput);
    parentDiv.appendChild(RestrictionLabel);

    RestrictionInput.classList.add("formRInput");
    RestrictionLabel.classList.add("formRLabel");

    return parentDiv;
}

//range input
function getRatingInput() {

    const inputNumber = 9;

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

function getMessage() {

    const numberInput = 10;
    
    var messageLabel = document.createElement("TEXTAREA");
    messageLabel.setAttribute("id", "message");
    messageLabel.appendChild(document.createTextNode("Your message.."));
    document.body.appendChild(messageLabel);
}

function getSubmit() {

var submitElement = document.createElement('INPUT');
submitElement.setAttribute("type", "submit");
submitElement.setAttribute("name", "dsubmit");
var submitLabel = this.document.createElement("LABEL");
submitLabel.setAttribute("for", "dsubmit")
submitLabel.appendChild(document.createTextNode("Submit"))

document.body.appendChild(submitElement);

}


window.onload = function main(event) {
	
    var subtitle = document.createElement("h3");
    var subtitleText = document.createTextNode("Welcome to the Create Objects Page");
    subtitle.appendChild(subtitleText);
    document.body.appendChild(subtitle);

    subtitle.classList.add("subtitleText");
    
    // Appending first name input and label
    document.body.appendChild(getProductNameInput());

    // Appending last name input and label
    document.body.appendChild(getProductTypeInput());

    // Appending barcode input and label
    document.body.appendChild(getBarcodeInput());
    
    // Appending email input and label
    document.body.appendChild(getEmailInput());
    
    // Appending password input and label
    document.body.appendChild(getPasswordInput());

    //Appending phone number input and label
    document.body.appendChild(getPriceInput());

    //Appending male input and label
    document.body.appendChild(getMaleInput());

    //Appending female input and label
    document.body.appendChild(getFemaleInput());

    //Appending hasParentalRestriction input and label
    document.body.appendChild(getRestrictionInput());

    //Appending rating input and label
    document.body.appendChild(getRatingInput());

    //Appending message input and label
    document.body.appendChild(getMessage());
}