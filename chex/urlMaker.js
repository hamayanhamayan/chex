let atcoder = /^https:\/\/atcoder\.jp\/contests\/(.+)\/tasks\/(.+)$/;
let pornhub1 = /^(https:\/\/jp\.pornhub\.com\/(.*)\page=)(.*)$/
let pornhub2 = /^https:\/\/jp\.pornhub\.com\/(.*)$/
let pornhub3 = /^https:\/\/jp\.pornhub\.com\/(.*)\?(.*)$/
let yukicoder = /^(https:\/\/yukicoder\.me\/problems\/no\/)(.+)$/;

let ctftime1 = /^(https:\/\/ctftime\.org\/(.*)\page=)(.*)$/;
let ctftime2 = /^https:\/\/ctftime\.org\/(.*)$/;

export function getNextUrl(url) {
    if (atcoder.test(url)) {
        var prefix = url.slice(0, -1);
        var num = url.slice(-1);
        num = String.fromCharCode(num.charCodeAt(0) + 1)
        url = prefix + num;
    }
    if (pornhub2.test(url)) {
        if (!pornhub1.test(url)) {
            if (pornhub3.test(url)) {
                url = url + '&page=2';
            }
            else {
                url = url + '?page=2';
            }
        } else {
            var res = url.match(pornhub1);
            var prefix = res[1];
            var num = parseInt(res[3]) + 1
            url = prefix + String(num)
        }
    }
    if (ctftime2.test(url)) {
        if (!ctftime1.test(url)) {
            url = url + '?page=2';
        } else {
            var res = url.match(ctftime1);
            var prefix = res[1];
            var num = parseInt(res[3]) + 1
            url = prefix + String(num)
        }
    }
    if (yukicoder.test(url)) {
        var res = url.match(yukicoder);
        var prefix = res[1];
        var num = parseInt(res[2]) + 1
        url = prefix + String(num)
    }
     
    return url;
}

export function getPrevUrl(url) {
    if (atcoder.test(url)) {
        var prefix = url.slice(0, -1);
        var num = url.slice(-1);
        num = String.fromCharCode(num.charCodeAt(0) - 1)
        url = prefix + num;
    }
    if (pornhub1.test(url)) {
        var res = url.match(pornhub1);
        var prefix = res[1];
        var num = parseInt(res[3]) - 1
        if (num == 1) url = prefix.slice(0, -6)
        else url = prefix + String(num)
    }
    if (ctftime1.test(url)) {
        var res = url.match(ctftime1);
        var prefix = res[1];
        var num = parseInt(res[3]) - 1
        if (num == 1) url = prefix.slice(0, -6)
        else url = prefix + String(num)
    }
    if (yukicoder.test(url)) {
        var res = url.match(yukicoder);
        var prefix = res[1];
        var num = parseInt(res[2]) - 1
        url = prefix + String(num)
    }
     
    return url;
}