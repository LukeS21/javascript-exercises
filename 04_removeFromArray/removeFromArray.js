const removeFromArray = function(arr, ...elem) {
    for(let i = 0; i < elem.length; i++){
        while(arr.includes(elem[i])){
            arr.splice(arr.indexOf(elem[i]),1)
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;