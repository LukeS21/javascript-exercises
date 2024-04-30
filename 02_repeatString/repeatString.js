const repeatString = function(input, times) {
    let returnString = "";
    for(let i = 0; i<times; i++){
        returnString += input;
    }
    return returnString;
};

// Do not edit below this line
module.exports = repeatString;
