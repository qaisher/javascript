const parentFunc = function() {
    let a = 20;
    return y = function() {
        console.log(`Accessing a from parent scope - ${a}`);
    }
};

const x = parentFunc();
y();
x();


const myFuncGrand = function() {
    let a = 100;
    console.log(`We are inside grand func. ${a}.`);

    const myFuncParent = function() {
        let b = 200;
        console.log(`We are inside parent func. ${b}.`);

        const child = function (){
            console.log(`${a} from grand and ${b} from parent.`);
        }
        return child;
    }

    let z = myFuncParent();
    return z;
};

const k = myFuncGrand();

k();

console.dir(k);
/*
(function(){
    const header = document.querySelector('h1');
    header.style.color = 'red';
    document.body.addEventListener('click', function(){
        header.style.color = 'blue';
    });
})();8
*/