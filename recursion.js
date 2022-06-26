'use strict';

let factorial = 0;

function factorialOfNumber(x){
    if(x==0){
        return x;
    }

    factorialOfNumber(x-1);
    factorial = factorial+x;
}

console.log(factorialOfNumber(5));