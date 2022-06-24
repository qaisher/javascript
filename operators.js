var sellingPrice = 100;
var listingPrice = 500;
var discountPercent = ((listingPrice-sellingPrice) / listingPrice) * 100;

console.log(`Discount percentage is ${discountPercent}`);

roundedOffPercent = Math.round(discountPercent);
console.log(`${roundedOffPercent}% off`);

//modulus

let num = Math.round(10*Math.random());

if(num%2===0) //checks whether the remainder is zero
{
    console.log(`Even number.`);
}
else{
    console.log(`Odd number.`);
}



//comparison
 let newNum = Math.round(10*Math.random());
 if(newNum>5){
    console.log(`number is greater than 5.`);
 }
 else if(newNum==5){
    console.log(`number is 5`);
 }
 else{
    console.log(`number less than 5`);
 }


 

//logical operator

let num2 = Math.random(10*Math.random());
if(num2>5 && num2<8){
    console.log(`The number is between 5 and 8`);
}
else if(num2===5 || num2 === 8){
    console.log(`The number is either 5 or 8`);
}
if(!(num2===1)){
    console.log( `The number is not 1`);
}