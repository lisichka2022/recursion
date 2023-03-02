'use strict';
function numberPalindrome(num, steps = 0) {
    let str = num.toString();
    let reversedStr = str.split('').reverse().join('');
    let result = num + Number(reversedStr);
    steps++;
    if (result.toString() === result.toString().split('').reverse().join('')) {
      return { 
        result: result.toString(), 
        steps: steps };
    } 
      return numberPalindrome(result, steps);
    }
  
  console.log(numberPalindrome(86));