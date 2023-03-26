const palindromes = function (word) {
    let arrayWord = Array.from(word.toLowerCase());
    let revArrayWord = [];

    if(arrayWord.includes('!'))
    {
        let newArrWord = arrayWord.filter(function(e){
            return e !== "!";
        });

        for(let i = newArrWord.length - 1; i>=0; i--)
        {
            revArrayWord.push(newArrWord[i]);
        }

        if(revArrayWord.toString() == newArrWord.toString())
        {
            return true;
        }
    }
        else if(arrayWord.includes('.'))
    {
        let newArrWord = arrayWord.filter(function(e){
            return e !== "!";
        });
    
        for(let i = newArrWord.length - 1; i>=0; i--)
        {
            revArrayWord.push(newArrWord[i]);
        }
    
        if(revArrayWord.toString() == newArrWord.toString())
        {
            return true;
        }
    }
        else
    {
        for(let i = arrayWord.length - 1; i>=0; i--)
        {
            revArrayWord.push(arrayWord[i]);
        }

        if(revArrayWord.toString() == arrayWord.toString())
        {
            return true;
        }
    }

};


// Do not edit below this line
module.exports = palindromes;
