const removeFromArray = function(array1, ...args) {
    const ans = [];
    array1.forEach((item) => {
        if (!args.includes(item)) {
            ans.push(item);
        }
    })
    return ans;
};

// Do not edit below this line
module.exports = removeFromArray;
