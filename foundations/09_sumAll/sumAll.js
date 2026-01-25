const sumAll = function(start, end) {
    let sum = 0;
    if(typeof start != "number" || typeof end != "number" 
        || start < 0 || end < 0 
        || !Number.isInteger(start) || !Number.isInteger(end)) 
        return "ERROR";
    if(start > end){
        start += end;
        end = start - end;
        start -= end;
    }
    while(start<=end){
        sum += start;
        start++;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
