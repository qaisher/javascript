var number = Math.round(10*Math.random());


switch (number) {
    case 1:
        console.log('You got 1!');
        
        break;
    case 2:
        console.log('You got 2!');
        
        break;
    case 3:
        console.log('You got 3!');
        
        break;
    case 4:  //grouping multiple case
    default:
        console.log('You got 4 or more.');
        break;
}