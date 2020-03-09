chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.executeScript({
		        code: `
		            var bgElement = document.createElement('div');
		            var s = bgElement.style;
		            s.position = 'fixed';
		            s.left = '-100%';
		            var title = document.title;
		            var url = window.location.href;
		            var res = '[' + title + '](' + url + ')';
		            //bgElement.appendChild(document.createElement('pre')).textContent = title;
		            bgElement.appendChild(document.createElement('pre')).textContent = res;
		            document.body.appendChild(bgElement);
		            document.getSelection().selectAllChildren(bgElement);
		            var result = document.execCommand('copy');
		            document.body.removeChild(bgElement);
		        `
		    });

    chrome.browserAction.setBadgeText({
        tabId: tab.id,
        text: 'Copy'
    });
    setTimeout(function(){
        chrome.browserAction.setBadgeText({
            tabId: tab.id,
            text: ''
        });
    }, 1000);
});