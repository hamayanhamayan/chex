let atcoder = /^https:\/\/atcoder\.jp\/contests\/(.+)\/tasks\/(.+)$/;
let pornhub1 = /^(https:\/\/jp\.pornhub\.com\/(.*)\page=)(.*)$/
let pornhub2 = /^https:\/\/jp\.pornhub\.com\/(.*)$/
let pornhub3 = /^https:\/\/jp\.pornhub\.com\/(.*)\?(.*)$/
let yukicoder = /^(https:\/\/yukicoder\.me\/problems\/no\/)(.+)$/;

let ctftime1 = /^(https:\/\/ctftime\.org\/(.*)\page=)(.*)$/;
let ctftime2 = /^https:\/\/ctftime\.org\/(.*)$/;

let codeforces = /^https:\/\/codeforces\.com\/contest\/(.+)\/problem\/(.+)$/;

let xnxx1 = /^https:\/\/www\.xnxx\.com\/search\/(.+)$/;
let xnxx2 = /^https:\/\/www\.xnxx\.com\/search\/(.+)\/(.+)$/;

let xv1 = /^https:\/\/www\.xvideos\.com\/(.+)$/;
let xv2 = /^https:\/\/www\.xvideos\.com\/(.+)\&p=(.+)$/;

let default1 = /^(https:\/\/(.*)\page=)(.*)$/;
let default2 = /^https:\/\/(.*)\?(.*)$/;

export function getNextUrl(url) {
    if (atcoder.test(url)) {
        var prefix = url.slice(0, -1);
        var num = url.slice(-1);
        num = String.fromCharCode(num.charCodeAt(0) + 1)
        url = prefix + num;
    }
    else if (pornhub2.test(url)) {
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
    else if (ctftime2.test(url)) {
        if (!ctftime1.test(url)) {
            url = url + '?page=2';
        } else {
            var res = url.match(ctftime1);
            var prefix = res[1];
            var num = parseInt(res[3]) + 1
            url = prefix + String(num)
        }
    }
    else if (yukicoder.test(url)) {
        var res = url.match(yukicoder);
        var prefix = res[1];
        var num = parseInt(res[2]) + 1
        url = prefix + String(num)
    }
    else if (codeforces.test(url)) {
        var prefix = url.slice(0, -1);
        var num = url.slice(-1);
        num = String.fromCharCode(num.charCodeAt(0) + 1)
        url = prefix + num;
    }
    else if (xnxx1.test(url)) {
        if(xnxx2.test(url)) {
            var res = url.match(xnxx2);
            var prefix = parseInt(res[2]) + 1;
            url = "https://www.xnxx.com/search/" + res[1] + "/" + String(prefix);
        } else {
            url = url + "/2";
        }
    }
    else if (xv1.test(url)) {
        if(xv2.test(url)) {
            var res = url.match(xv2);
            var prefix = parseInt(res[2]) + 1;
            url = "https://www.xvideos.com/" + res[1] + "&p=" + String(prefix);
        } else {
            url = url + "&p=2";
        }
    }
    else {
        if (!default1.test(url)) {
            if (default2.test(url)) {
                url = url + '&page=2';
            } else {
                url = url + '?page=2';
            }
        } else {
            var res = url.match(default1);
            var prefix = res[1];
            var num = parseInt(res[3]) + 1
            url = prefix + String(num)
        }
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
    else if (pornhub1.test(url)) {
        var res = url.match(pornhub1);
        var prefix = res[1];
        var num = parseInt(res[3]) - 1
        if (num == 1) url = prefix.slice(0, -6)
        else url = prefix + String(num)
    }
    else if (ctftime1.test(url)) {
        var res = url.match(ctftime1);
        var prefix = res[1];
        var num = parseInt(res[3]) - 1
        if (num == 1) url = prefix.slice(0, -6)
        else url = prefix + String(num)
    }
    else if (yukicoder.test(url)) {
        var res = url.match(yukicoder);
        var prefix = res[1];
        var num = parseInt(res[2]) - 1
        url = prefix + String(num)
    }
    else if (codeforces.test(url)) {
        var prefix = url.slice(0, -1);
        var num = url.slice(-1);
        num = String.fromCharCode(num.charCodeAt(0) - 1)
        url = prefix + num;
    }
    else if (xnxx2.test(url)) {
        var res = url.match(xnxx2);
        var prefix = res[1];
        var num = parseInt(res[2]) - 1;
        url = "https://www.xnxx.com/search/" + res[1] + "/" + String(num);
    }
    else if (xv2.test(url)) {
        var res = url.match(xv2);
        var prefix = res[1];
        var num = parseInt(res[2]) - 1;
        url = "https://www.xvideos.com/" + res[1] + "&p=" + String(num);
    }
    else {
        var res = url.match(default1);
        var prefix = res[1];
        var num = parseInt(res[3]) - 1
        if (num == 1) url = prefix.slice(0, -6)
        else url = prefix + String(num)
    }
     
    return url;
}