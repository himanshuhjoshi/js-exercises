const repeatString = function(string, num) {
    if(num<0) return 'ERROR';
    let resultString='';
    while(num>0){
        resultString += string;
        num--;
    }
    return resultString;c
};

// Do not edit below this line
module.exports = repeatString;
