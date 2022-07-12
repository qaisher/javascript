const uno = () => {
    return `I'm One.`;
};

const dos = () => {
    setTimeout(() => {
        return `I'm Two.`;
    }, 5000);
    
};

const tres = () => {
    return `I'm Three.`;
};


const callMe = () => {
    let valOne = uno();
    console.log(valOne);

    let valTwo = dos();
    console.log(valTwo);

    let valThree = tres();
    console.log(valThree);
};


callMe();