window.onload = function main(event) {
    var logstatus = document.getElementById("logstatus");
    var token = this.localStorage.getItem("token");
    if(token != undefined) {
        logstatus.innerText = "You are logged in. Token is refreshing in 30 minutes from log in.";
        window.setTimeout(function() {
            alert("You are being logged out");
            logout();
        }, 18000000);
    } else {
        logstatus.innerText = "You are not logged in";
    }

    this.document.getElementById("logout").onclick = logout;

    var isPresent = false;

    window.setInterval(function () {

        if(!isPresent) {
            var div = document.createElement("div");
            var text = document.createElement("h5");
            var button = document.createElement("button");
            let numberOfVisitors = Math.floor(Math.random() * 10 + 1);
            button.innerText = "Click the button to close";
            text.innerText = "Currently, there are " + numberOfVisitors + " visitors on the site.";
            div.appendChild(text);
            div.appendChild(button);
            div.style.backgroundColor = "#e6f2ff";
            div.style.position = "fixed";
            div.style.top = "250px";
            div.style.right = "5px";
            document.body.appendChild(div);
            isPresent = true;
            button.onclick = () => {
                document.body.removeChild(div);
                isPresent = false;
            }
        }
    }, 2500);

}

function logout() {
    localStorage.removeItem("token");
    window.location.replace("index.html");
}