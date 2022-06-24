'use strict';

//var

var nameUser = 'different abc';
function testVar(){
    if(true){
        var nameUser = 'abc'; //variable of the same name in different scope
        console.log(contact); //returns undefined as it is called before assignment
    }
    console.log(nameUser);
    var email = 'abc123';
    console.log(email);
}
console.log(nameUser);

function testLet(){
    if(true){
        let address = 'xyz';
        console.log(address);
    }
    //console.log(address);

}
var count = 8;
for(var i = 0;i<10;i++){
    var count = 0; //redeclaration
}
console.log(i);
console.log(count);



//var contact = 999;

//console.log(name);
//console.log(email);
//console.log(address);
testVar();
testLet();

var contact = 999; //assignment not hoisted



//let
function letScopeTest(){
    //console.log(num);
    let num = 99;

    for(let j=0; j<5; j++){
        let k = 10;
        console.log(j);
        //sub-block
        if(true){
            console.log(k);
        }
      
    }
    //console.log(k);
    console.log(num);
}

let num = 'redeclared num'; //variable of the same name in different scope
console.log(num);
letScopeTest();

//console.log(j);




//const
if(true){
    const a = 0;
    console.log(a);
    //sub-block
    if(true)
    console.log(a);

}

let a = 2; //variable of the same name in different scope
console.log(a);
/*
if(true){
    a=7;
}*/