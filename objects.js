//creating and accessing objects

var student = {
    fname : 'rahul',
    lname : 'kumar',
    rollNo : 35,
    grade : 8
};

console.log(`Student's name is ${student.fname} ${student.lname} and his roll no. is ${student.rollNo}.`)


//methods in object
var user = {
    fname : 'qaisher',
    lname : 'alam',
    age : 28,
    nationality : 'Indian',
    courseList : [],
    getCourse : function (){
        return `${this.fname} is enrolled in ${this.courseList.length} course(s).`;
    },
    addCourse : function (courseName){
        this.courseList.push(courseName);
    }
};

console.log(user.getCourse());
user.addCourse('javascript'); //added to the courseList
console.log(user.getCourse());



//array of objects

var employees = [
    {fullName : 'Mike Tyson', empcode : 345},
    {fullName : 'Muhammad Ali', empcode : 153},
    {fullName : 'Henry Cooper', empcode : 267}
];

console.log(employees[1]);
console.log(`Greatest of all time ${employees[1].fullName}.`);



//const arrays and objects

const constantArray = [3, 7, 9, 2];
console.log(constantArray);
//constantArray = [2, 9, 0, 1]; throws an error
constantArray[0] = 2;
constantArray[1] = 9;
constantArray[2] = 0;
constantArray[3] = 1;
console.log(constantArray); //const array is mutated


const person = {
    fullName : 'abc def',
    contact : 1233
};
console.log(person);

/*
person = {
    fullName : 'abc xyz',
    contact : 1233
};
throws an error */

person.fullName = 'abc xyz';

console.log(person); //object is mutated
