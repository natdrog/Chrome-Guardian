

chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("Page ready");
		// ----------------------------------------------------------

	}
	}, 10);
});

var pageInfo = {
  "url": window.location.href
};

// Sends the information back to background.js
chrome.runtime.sendMessage(pageInfo);