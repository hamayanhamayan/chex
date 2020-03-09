import { getNextUrl, getPrevUrl } from './urlMaker.js';

chrome.browserAction.onClicked.addListener(function(tab) {
	console.log('Copy Start')
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

chrome.commands.onCommand.addListener(function(command) {
	console.log('Command Get')
	if (command == "right-action") {
		console.log('Right Start')
		chrome.tabs.query({'active': true}, function(tabs) {
			let cur = tabs[0].url;
			let next = getNextUrl(cur);
			if (cur != next) chrome.tabs.update(tabs[0].id, {url: next});
	  	});
	} else if (command == "left-action") {
		console.log('Left Start')
		chrome.tabs.query({'active': true}, function(tabs) {
			let cur = tabs[0].url;
			let next = getPrevUrl(cur);
			if (cur != next) chrome.tabs.update(tabs[0].id, {url: next});
	  	});
	}
});
  