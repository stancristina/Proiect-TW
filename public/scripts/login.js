formStatus = [false, false];

function login() {

    // Check if the fields are valid;
    let isValid = formStatus[0] === true && formStatus[1] == true;
    if(!isValid) {
        alert("Fields are not valid");
        return;
    }

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let data = {
        "user": {
            "userName": email,
            "password": password
        }
    }

    var settings = {
        "url": "http://localhost:3000/api/login",
        "type": "POST",
        "timeout": 0,
        "headers": {
          "Content-Type": "application/json"
        },
        "data": JSON.stringify(data),
      };
      
    $.ajax(settings).done(function (response) {
        alert("Login successfuly");
        localStorage.setItem('token', response.token);
        window.location.replace("index.html");
    });
}

window.onload = function main(event) {
    this.document.getElementById("login").onclick = login;
    this.document.getElementById("loginForm").onkeypress = (evt) => {
        if(evt.code === "Enter") {
            this.login();
        }
    }

    var loginButtonDiv = document.getElementById("loginbuttondiv");
    var form = document.getElementById("loginForm");

    var emailInput = this.getEmailInput();
    var passwordInput = this.getPasswordInput();

    form.insertBefore(emailInput, loginButtonDiv);
    form.insertBefore(passwordInput, loginButtonDiv);

}



/**
 * Builds an email input-label pair which will be returned 
 * inside a div parent
 */
function getEmailInput() {

    const inputNumber = 0;

    var emailLabel = document.createElement("LABEL");
    emailLabel.setAttribute("for", "email");
    emailLabel.appendChild(document.createTextNode("Email"));

    var emailInput = document.createElement("INPUT");
	emailInput.setAttribute("type", "email");
    emailInput.setAttribute("id", "email");

    var errorMessage = document.createElement("SPAN");
    errorMessage.classList.add("errorMessage");
    errorMessage.appendChild(document.createTextNode("Field is mandatory and content must be a valid email address"));
    errorMessage.style.visibility = "hidden";
    
    var parentDiv = document.createElement("DIV");
    parentDiv.appendChild(emailLabel);
    parentDiv.appendChild(emailInput);
    parentDiv.appendChild(errorMessage);


    emailInput.classList.add("formInput");
    emailLabel.classList.add("formLabel");

    emailInput.oninput = function () {

        var isEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/g;
        var isValid = this.value != null && this.value.length > 0 && this.value.match(isEmail);

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

    const inputNumber = 1;

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