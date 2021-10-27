var settings = {
    enabled: false,
    timeout: 10,
    tabs: {}
};

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log("Received request: ", request);
    
    if (request.cmd === "settings") {
        sendResponse({settings: settings, tab: sender.tab ? sender.tab.id : null});
    }
    if (request.cmd === "timeout") {
        settings.timeout = parseInt(request.value);
        sendResponse({ settings: settings });
    }
    if (request.cmd === "enable") {
        settings.enabled = request.value;
        sendResponse({ settings: settings });
    }
    if (request.cmd === "start") {
        settings.tabs[request.tab] = true;
        sendResponse({ settings: settings });
    }
    if (request.cmd === "stop") {
        settings.tabs[request.tab] = false;
        sendResponse({ settings: settings });
    }
});
