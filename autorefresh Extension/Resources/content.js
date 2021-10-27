var intervalID;

browser.runtime.sendMessage({ cmd: "settings" }).then((response) => {
    console.log("Received response: ", response);
    if (response.settings.enabled) {
        if (response.settings.tabs[response.tab]) {
            var timeout = response.settings.timeout;
            if (timeout < 5) {
                timeout = 5;
            }
            intervalID = setInterval(autoRefresh, timeout * 1000);
        }
    }
});

function autoRefresh() {
    window.location = window.location.href;
}

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log("Received request: ", request);
    
    if(request.cmd == "start" && request.enabled) {
        var timeout = parseInt(request.timeout);
        if (timeout < 5) {
            timeout = 5;
        }
        intervalID = setInterval(autoRefresh, timeout * 1000);
    }
    if(request.cmd == "stop") {
        clearInterval(intervalID);
    }
    
    sendResponse(request.cmd + "ed");
});
