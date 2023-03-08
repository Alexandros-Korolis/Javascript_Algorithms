const sumAll = function(a,b) 
{
    if(a<b && a>0 && b>0 && Number.isInteger(a) && Number.isInteger(b))
    {
        var sum = a;
        for(let i = a+1; i<=b; i++)
        {
            sum +=i;
        }
    }
    else if(a>b && a>0 && b>0 && Number.isInteger(a) && Number.isInteger(b))
    {
        var sum = b;
        for(let i = b+1; i<=a; i++)
        {
            sum +=i;
        }
    }
    else
    {
        sum = 'ERROR'
    }
    

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
