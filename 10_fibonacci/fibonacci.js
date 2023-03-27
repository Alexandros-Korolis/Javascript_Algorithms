const fibonacci = function(num) {
    let fibNumbers = [];

    if(num > 0)
    {
        for(let i = 0; i<num; i++)
        {
            if(i == 0 || i == 1)
            {
                fibNumbers.push(1);
            }
            else
            {
                fibNumbers.push(fibNumbers[i-1]+fibNumbers[i-2]);
            }
        }

        return fibNumbers[num-1];
    }
    else
    {
        return "OOPS";
    }
};

// Do not edit below this line
module.exports = fibonacci;
