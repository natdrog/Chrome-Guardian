/* SmtpJS.com */
Email = { send: function (a, b, c, d, e, f, g) { var h = Math.floor(1e6 * Math.random() + 1), i = "https://smtpjs.com/smtp.aspx?"; i += "From=" + a, i += "&to=" + b, i += "&Subject=" + encodeURIComponent(c), i += "&Body=" + encodeURIComponent(d), void 0 == e.token ? (i += "&Host=" + e, i += "&Username=" + f, i += "&Password=" + g, i += "&Action=Send") : (i += "&SecureToken=" + e.token, i += "&Action=SendFromStored"), i += "&cachebuster=" + h, Email.ajax(i) }, sendWithAttachment: function (a, b, c, d, e, f, g, h) { var i = Math.floor(1e6 * Math.random() + 1), j = "https://smtpjs.com/smtp.aspx?"; j += "From=" + a, j += "&to=" + b, j += "&Subject=" + encodeURIComponent(c), j += "&Body=" + encodeURIComponent(d), j += "&Attachment=" + encodeURIComponent(h), void 0 == e.token ? (j += "&Host=" + e, j += "&Username=" + f, j += "&Password=" + g, j += "&Action=Send") : (j += "&SecureToken=" + e.token, j += "&Action=SendFromStored"), j += "&cachebuster=" + i, Email.ajax(j) }, ajax: function (a) { var b = Email.createCORSRequest("GET", a); b.onload = function () { var a = b.responseText; console.log(a) }, b.send() }, createCORSRequest: function (a, b) { var c = new XMLHttpRequest; return "withCredentials" in c ? c.open(a, b, !0) : "undefined" != typeof XDomainRequest ? (c = new XDomainRequest, c.open(a, b)) : c = null, c } };

/*var settings = new Store("settings", {
  "sample_setting": "This is how you use Store.js to remember values"
});
*/


readTextFile("C:\\Users\\kkuhn\\Documents\\test.txt");
var StrF = Str.split(" ");
var user;
var password;
chrome.runtime.onInstalled.addListener(function() {});


alert(localStorage["ChromeLogin"]);
    var test = localStorage["ChromeLogin"];
    if (test == "asd"){
       console.log("it is asd");
    }else{
        console.log("It is NOT asd");
    }
   
   
      chrome.webRequest.onBeforeRequest.addListener(
        function(details) {
          console.log("Is this running?");
          if (1 == 1){
            for (var i = 0; i < StrF.length; ++i)
            {
              console.log(StrF[i]);
              if(details.url.indexOf(StrF[i]) != -1){
                  console.log("NEIN")
            return {cancel: details.url.indexOf(StrF[i]) != -1};

              }
            }
          }

        },
        {urls: ["<all_urls>"]},
        ["blocking"]);


function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
Str = allText;
            }
        }
    }
    rawFile.send(null);
}





