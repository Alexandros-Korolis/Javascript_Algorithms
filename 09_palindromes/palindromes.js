//Takes an array
//Split array word by word 
//Remove punctuation from each word
//Add all words together 
//Reverse that word 
//Compare 

const palindromes = function (word) {
    let wordToLower = word.toLowerCase();
    let punctuationless = wordToLower.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    let cleanString = punctuationless.replace(/\s{2,}/g," ");
    let wordToArray = Array.from(cleanString);   
    let noSpaceWord = wordToArray.forEach(removeSpace);
    let finalWord = wordToArray.join(''); 
    let reverseWord ;

    function removeSpace(item,index){
        if(item.includes(' '))
        {
            wordToArray.splice(index,1);
        }
    };

    const reverseString = function(a){
        let text =a
        var arr = []

        for(let j = text.length-1; j>=0; j--)
        {
            arr.push(text[j])         
        }
        
        return arr.join('')
    };

     reverseWord = reverseString(finalWord);

     if(finalWord == reverseWord)
     {
        return true;
     }
     else
     {
        return false;
     }
};


// Do not edit below this line
module.exports = palindromes;
