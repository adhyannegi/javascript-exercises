const repeatString = function(text, times) {
    if (times < 0){
        return "ERROR";
    };
    let ans = "";
    for (let i = 0; i < times; i++){
        ans += text;
    }
    return ans;
};

// Do not edit below this line
module.exports = repeatString;
