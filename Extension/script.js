/* global $ */

function blockSites() {
    $("#div").empty();
    $("#div").append("<br>");
    $("#div").append("<center>Block site URL or keyword: <input id='input' type='text'></input><button onclick='blockURL()'>Block URL</button><button onclick='blockKeyword()'>Block Keyword</button></center>");
}

function setEmailAddress() {
    $("#div").empty();
    $("#div").append("<br>");
    $("#div").append("<center>Enter new email address: <input id='email' type='text'></input></center>");
    $("#div").append("<center>Enter password: <input id='pass' type='password'></input></center>");
    $("#div").append("<center><button onclick='checkPassword()'>Change Email</button></center>");
}

function changePassword() {
    var password = "password"; ************
    
    $("#div").empty();
    $("#div").append("<br>");
    $("#div").append("<center>Enter old password: <input id='oldpass' type='password'></input></center>");
    $("#div").append("<center>Enter new password: <input id='pass' type='text'></input></center>");
    $("#div").append("<center><button onclick='checkOldPassword()'>Change Password</button></center>");
}

function blockedSiteHistory() {
    var blockedSites = ["google.com", "yahoo.com"]; *************
    
    $("#div").empty();
    $("#div").append("<br>");
    $("#div").append("<center><b>Blocked Sites:</b></center>");
    
    for(var blockedSite in blockedSites) {
        $("#div").append("<center><p>" + blockedSites[blockedSite] + "</p></center>");
    }
}

function checkPassword() {
    var password = "password"; *************
    
    $("#failmessage").remove();
    if($("#pass").val() == password)
        changeEmail();
    else if($("#email").val().length == 0) {
        $("#email").val("");
        $("#pass").val("");
        $("#div").append("<center><p id='failmessage' style='color:red'>Please enter an email.</p></center>");
    } else {
        $("#email").val("");
        $("#pass").val("");
        $("#div").append("<center><p id='failmessage' style='color:red'>Incorrect password.</p></center>");
    }
}

function checkOldPassword() {
    var password = "password"; ***************
    
    $("#failmessage").remove();
    if($("#oldpass").val() == password)
        changePass();
    else if($("#oldpass").val().length == 0) {
        $("#oldpass").val("");
        $("#pass").val("");
        $("#div").append("<center><p id='failmessage' style='color:red'>Please enter a new password.</p></center>");
    } else {
        $("#oldpass").val("");
        $("#pass").val("");
        $("#div").append("<center><p id='failmessage' style='color:red'>Incorrect password.</p></center>");
    }
}

function blockURL() {
    var url = $("#input").val();
    $("#input").val("");
    
    ********* add url to list of blocked urls
}

function blockKeyword() {
    var keyword = $("#input").val();
    $("#input").val("");
    
    ********* add keyword to list of blocked keywords
}

function changeEmail() {
    var email = $("#email").val();
    ********* change email
    
    $("#div").append("<center><p>Email changed successfully.</p></center>");
}

function changePass() {
    var password = $("#pass").val();
    ********** change password
    
    $("#div").append("<center><p>Password changed successfully.</p></center>")
}