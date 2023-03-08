const reverseString = function(a) 
{
    let text =a
    var arr = []

    for(let j = text.length-1; j>=0; j--)
    {
        arr.push(text[j])         
    }
    
    return arr.join('')
};


// Do not edit below this line
module.exports = reverseString;
