var username;
var password;
function onClick() {
    getStuff();
}

function getStuff() {
    chrome.storage.sync.get(["username"], function(items) {
        console.log(items.username);
        username = items.username;
        console.log(username);
    });
    chrome.storage.sync.get(["password"], function(items) {
        console.log(items.password);
        password = items.password;
        console.log(password);
    });
    window.setTimeout(function() {
        if (document.getElementById('username').value == username && document.getElementById('password').value == password) {
            console.log("Yes");
        } else {
            console.log("No")
        }
    }, 3000);
}

function Auth() {
    if (document.getElementById('username').value == username && document.getElementById('password').value == password) {
        console.log("Yes");
    } else {
        console.log("No")
    }
}
document.getElementById('Submit').addEventListener('click', onClick);