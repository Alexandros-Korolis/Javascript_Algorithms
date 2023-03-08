const repeatString = function(a, b) {
    let word = a;
    let num = b;
    let str = "";
    for(i=0; i<b; i++)
    {
        str += word;
    }

    return str;

};


// Do not edit below this line
module.exports = repeatString;
