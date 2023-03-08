const removeFromArray = function(a,...b) 
{

    for(let i = 0; i<b.length; i++)
    {
        for(let j=0; j<a.length; j++)
        {
            if(a[j]===b[i])
            {
                var index = a.indexOf(b[i])
                a.splice(index,1)
            }
        }
    }

    return a
};


// Do not edit below this line
module.exports = removeFromArray;
