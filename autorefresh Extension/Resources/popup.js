var bt_autorefresh = document.getElementById("bt-autorefresh");
var cb_autorefresh = document.getElementById("cb-autorefresh");
var n_autorefresh = document.getElementById("n-autorefresh");

function onError(error) {
  console.error(`Error: ${error}`);
}

function sendMessageToContent(tabs, cmd, timeout) {
  for (let tab of tabs) {
    browser.tabs.sendMessage(
      tab.id,
      {
          cmd: cmd,
          enabled: cb_autorefresh.checked,
          timeout: timeout
      }
    ).then(response => {
        if (cmd == "start") {
          bt_autorefresh.innerText = "stop";
        } else {
          bt_autorefresh.innerText = "start";
        }
      console.log("Message from the content script:");
      console.log(response.response);
    }).catch(onError);
  }
}

browser.tabs.query({
    currentWindow: true,
    active: true
}).then(tabs => {
    var tab = tabs[0].id;
    bt_autorefresh.onclick = () => {
        browser.runtime.sendMessage({ cmd: bt_autorefresh.textContent, tab: tab }).then((response) => {
            console.log("Received response: ", response);
            sendMessageToContent(tabs, bt_autorefresh.textContent, n_autorefresh.value);
        });
    };
    cb_autorefresh.onclick = () => {
        browser.runtime.sendMessage({ cmd: "enable", value: cb_autorefresh.checked }).then((response) => {
            console.log("Received response: ", response);
        });
    };
    n_autorefresh.oninput = (e) => {
        browser.runtime.sendMessage({ cmd: "timeout", value: e.target.value }).then((response) => {
            console.log("Received response: ", response);
        });
    };
    browser.runtime.sendMessage({ cmd: "settings" }).then((response) => {
        console.log("Received response: ", response);
        if (response.settings.tabs[tab]) {
            bt_autorefresh.innerText = "stop";
        }
        cb_autorefresh.checked = response.settings.enabled;
        n_autorefresh.value = response.settings.timeout;
    });
}).catch(onError);

