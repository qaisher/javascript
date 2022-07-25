//objects

const myObj1 = {
    name : 'Henry Mathews',
    age : 33,
    country : 'India',
    isAlive : true,
    vehicle : {
        make : 'BMW',
        model : 'GS220',
        year : 2019
    }
};

//custom JSON string
const myObj1Str = '{"name" : "Henry Mathews", "age" : 33, "country" : "India", "isAlive" : true, "vehicle" : { "make" : "BMW", "model" : "GS220", "year" : 2019 }}';


const myObj1StrParsed = JSON.parse(myObj1Str); //passing custom json string
console.log(typeof(myObj1StrParsed.vehicle));
console.log(typeof(myObj1StrParsed.age));

console.log(myObj1);

const myObj1Stringified = JSON.stringify(myObj1);

console.log(myObj1Stringified);

const myObj1Parsed = JSON.parse(myObj1Stringified);

console.log(myObj1Parsed);



//arrays

const myArr1Str = '[3, 4, 2, 8, 9]'; //custom json array literal
const myArr2Str = '["hello", "hey", "hi", "greetings"]'; //custom json array literal

console.log(JSON.parse(myArr1Str));
console.log(JSON.parse(myArr2Str));


const myArr3 = [7, 2, 0, 5];

const myArr3Stringified = JSON.stringify(myArr3);
console.log(myArr3Stringified);

const myArr3Parsed = JSON.parse(myArr3Stringified);
console.log(myArr3Parsed);