'use strict';

//function with another function as default value

function calcTax(income, tax = determineTaxSlab(income)){

    alert(`Tax on Rs. ${income} is Rs. ${tax}.`);

}

function determineTaxSlab(income){
    if(income <= 250000){
        return 0;
    }
    else if(income > 250000 && income <= 500000){
        return 0.05*income;
    }
    else if(income > 500000 && income <= 750000){
        return 0.1*income;
    }
    else if(income > 750000 && income <= 1000000){
        return 0.15*income;
    }
    else if(income > 1000000 && income <= 1250000){
        return 0.20*income;
    }
    else if(income > 1250000 && income <= 1500000){
        return 0.25*income;
    }
    else if(income > 1500000){
        return 0.3*income;
    }
}

let userInput = prompt("Enter your income to calculate tax.")

calcTax(Number(userInput));