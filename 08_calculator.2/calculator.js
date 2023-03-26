const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(a) {
  if(a.length == 0)
  {
    return 0;
  }
    else if(a.length == 1)
  {
    return a[0];
  }
  else
  {
    let totalArr = a.reduce((total,arrNum) => {
      return total + arrNum;
    },0);
    return totalArr;
  }
};

const multiply = function(a) {
  let result = a.reduce((total,num)=>{
    return total*num;
  });

  return result;
};

const power = function(a,b) {
    return a**b;
};

const factorial = function(a) {
    if(a == 0)
    {
      return 1;
    }
      else
    { 
      let result = 1;
      for(let i=1; i<=a; i++)
      {
        result = result*i;
      }
      return result;
    } 
    
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
