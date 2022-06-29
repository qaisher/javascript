//1. For a given number N check if it is prime or not. A prime number is a number which is only divisible by 1 and itself.

let num = Math.round(Math.random()*10);
checkPrime(num);

function checkPrime(num){

    if(num === 0){
        console.log(`Zero is not a prime number.`);
        return;
    }

    if(num === 1){
        console.log(`1 is not a prime number.`);
        return;
    }

    if(num === 2){
        console.log(`2 is a prime number.`);
        return;
    }

    for(let i = 2; i<num; i++){

        if(num%i === 0){
            console.log(`The number ${num} is not prime.`);
            return;
        }
    }
    console.log(`The number ${num} is prime.`);
}




//2. Given a positive integer, N. Find the factorial of N.

//using for loop
function factorialForLoop(num){

    let result = 1;

    for(let i = num; i > 1; i--){
        result *= i;
    }

    return result;
}

//using recursion
function factorialRecursion(num){

    if(num>1){
    result = num*factorialRecursion(num-1);
    return result;
    }

    return 1;
}

console.log(factorialRecursion(6));
console.log(factorialForLoop(6));



//3. You are given an array A of size N. You need to print elements of A in alternate order (starting from index 0).


function alternateElements(arr){
    let alternateArr = [];

    for(let i = 0; i<arr.length; i=i+2){
        alternateArr.push(arr[i]);
    }

    return alternateArr;
}

console.log(alternateElements([3, 2, 5, 8, 9, 0]));

/*
function alternateElements(arr){
    for(let i = 0; i<(arr.length)/2;  i++){

        console.log(arr[i]);

        if(i<(arr.length-1)/2){
        
            console.log(arr[arr.length - 1 -i]);
        }
    }
}
*/




//4. Given an array A of size N, print the reverse of it.

let arr1 = [5, 9, 2, 0, 4, 3];

for(let i = arr1.length-1; i>=0; i--){
    console.log(arr1[i]);
}

//alternatively
console.log(arr1.reverse());



//5. Given a sorted array A[] of size N, delete all the duplicate elements from A[]. Note: Don't use set or HashMap to solve the problem.

let arr2 = [2, 3, 3, 3, 4, 5, 6, 6, 7, 7, 7, 7, 7, 8, 9];

function deleteDuplilcate(arr){

    for(let i = 0; i < arr.length; i++){

        if(arr[i] === arr[i+1]){

            for(let j = i+1; j<arr.length; j++){
                arr[j] = arr[j+1];
            }

            arr.length--;
            i--;
        }
    }

    return arr;

}

console.log(deleteDuplilcate(arr2));



//6. Given a string “nitin”, check if it is palindrome or not.

let input = "nitin";

function checkPalindrome(str){
    let strReversed = '';
    for(let i = str.length-1; i>=0; i--){
        strReversed += str[i];
    }

    if(!(str.localeCompare(strReversed))){
        console.log(`The given string is palindrome.`);
    }
    else
        console.log(`The given string is NOT palindrome.`);
}

checkPalindrome(input);



//7. Given a String S, reverse the string without reversing its individual words. Words are separated by dots.

let s = 'i.like.javascript.very.much';
let stringArray = s.split('.');
let reversed = [];

for(let i = stringArray.length-1; i>=0; i--){
    reversed.push(stringArray[i]);
}

//stringArray.reverse();
let finalResult = reversed.join('.');
console.log(finalResult);



//8. Given a string str containing only lower case alphabets, the task is to sort it in lexicographically-descending order.
function arrange(str){

    let arr = str.split('');

    console.log(arr);

    for(let i = 0; i<arr.length; i++){

        for(let j = 0; j<arr.length-i; j++){

            if(arr[j]<arr[j+1]){
                
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    console.log(arr.join(''));

}
arrange('kaishar');
