chrome.tabs.onUpdated.addListener(function(tabId, changeInfo) { //Se lanza cuando una pestaña se actualiza


    if (changeInfo.url.includes("https://free3d.com/")) {
        alert("Se iniciara JS");
        chrome.tabs.executeScript(tabId, {
            file: 'js/cambios.js'
        });
    }




});