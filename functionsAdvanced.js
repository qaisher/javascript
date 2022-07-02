//rest and spread

let arr1 = [3, 5, 2, 6, 1, 0, 7];

console.log(arr1);
console.log(...arr1);

let arr2 = [5, 0, arr1];

console.log(...arr2);

let arr3 = [5, 0, ...arr1];

console.log(...arr3);


