//1. For a given number N check if it is prime or not. A prime number is a number which is only divisible by 1 and itself.

let num = Math.round(Math.random()*10);
checkPrime(num);
function checkPrime(num){
    if(num === 0){
        console.log(`Zero is not a prime number.`);
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
    for(let i = 0; i<arr.length - 1;  i+2){
        console.log()
    }
}



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

    for(let i = 0; i<arr.length; i++){
        if(arr[i] === arr[i+1]){
            for(let j = i+1; j<arr.length;j++){
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

let str = "nitin";

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

checkPalindrome(str);



//7. Given a String S, reverse the string without reversing its individual words. Words are separated by dots.

let s = 'i.like.javascript.very.much';
let stringArray = s.split('.');
stringArray.reverse();
let finalResult = stringArray.join('.');
console.log(finalResult);



//8. Given a string str containing only lower case alphabets, the task is to sort it in lexicographically-descending order.
function arrange(str){

    for(let j = str.length-1; j>=0; j--){
        console.log(str[j]);
        for(let i = j; i>=0; i--){
            console.log(str[i])
            /*if(str[i]>str[i-1]){
                let temp = str[i];
                str[i] = str[i-1];
                str[i-1] = temp;
                
            }*/
        }
    }


}
arrange('kaishar');
