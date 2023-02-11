'use strict'

function getFactorial(n){
    if(n===1){
        return 1}
 else{
    return n*getFactorial(n-1)
 }
    }
let result=getFactorial(3);
console.log(result)

//Task #2

const pow=(num, degree)=>{
    return(degree==1)?num:(num*pow(num,degree-1))
}
console.log(pow(5,2));

//Task #3

const sum=(a,b)=>{
    if(b===0){
        return a;
    }
    else{
        return sum(++a,--b);
    }
}
console.log(sum(5,8));