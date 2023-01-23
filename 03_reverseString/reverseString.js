const reverseString = function(text) {
    let len = text.length;
    if (len === 1){
        return text;
    }
    let reverse = "";
    for (let i = (len - 1); i >= 0; i++){
        reverse += text.charAt(i);
    }
    return reverse;
};

// Do not edit below this line
module.exports = reverseString;
