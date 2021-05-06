const trim=function (string, character) {

    while (string.charAt(0) === character) {
        string = string.substring(1);
    }

    while (string.charAt(string.length - 1) === character) {
        string = string.substring(0, string.length - 1);
    }
    return string;
}


module.exports = trim