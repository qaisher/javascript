let x = 1;

const parentFunction = () => {

    let myVal = 3;
    console.log(x);
    console.log(myVal);

    const childFunction = () => {
        return (`This is sum of x and myVal from childFunction even after the outer function has closed-${myVal+x}`);
    }

    return childFunction;
};

console.log(parentFunction);
const test = parentFunction(); //childFunction is returned to test.
console.log(test); //function
console.log(test()); //childFunction is invoked with access to the outer lexical scope (x and myVal).




//closure with IIFE

const privateCounter = (() => {
    let count = 0;
    console.log(`Initial value of count ${count}`);
    return function child() { count++; console.log(count); }
}) ();


privateCounter();
console.log(privateCounter);
privateCounter();
privateCounter();