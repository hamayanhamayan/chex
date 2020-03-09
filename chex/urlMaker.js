export function getNextUrl(url) {
    let atcoder = /^https:\/\/atcoder\.jp\/contests\/(.+)\/tasks\/(.+)$/;

    if (atcoder.test(url)) {
        var prefix = url.slice(0, -1);
        var num = url.slice(-1);
        num = String.fromCharCode(num.charCodeAt(0) + 1)
        url = prefix + num;
    }
     
    return url;
}