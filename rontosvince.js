// Student Record System

// 10 LET VARIABLES
let studentName = "Vince P. Rontos";
let age = 21;
let department = "CCIS";
let yearLevel = 3;
let section = "3C";
let IT3O3 = 75;
let IT300  = 90;
let IT302 = 95;
let city = "Calbayog, City ";
let school = "Northwest Samar State University";

// 10 CONST VARIABLES
const passing = 75;
const studentID = " 08- 11 -2005";
const teacher = "Mr. Yuri Joseph A. Ortiz";
const subject1 = "IT 302";
const subject2 = "IT 303";
const subject3 = "IT 300";
const semester = "2nd Semester";
const room = "IT-203";
const Department = "CCIS";
const schoolYear = "2026-2027";

// TEMPLATE LITERALS
console.log(`Name: ${studentName}`);
console.log(`Age: ${age}`);
console.log(`Course: ${course}`);
console.log(`Year: ${yearLevel}`);
console.log(`Section: ${section}`);
console.log(`IT300: ${IT300}`);
console.log(`IT303: ${IT3O3}`);
console.log(`IT302: ${IT302}`);
console.log(`City: ${city}`);
console.log(`School: ${school}`);

// 5 ARROW FUNCTIONS
const greet = () => `Hello ${studentName}`;
const average = () => (IT300 + IT3O3 + IT302) / 3;
const checkGrade = grade => grade >= passing;
const add = (a, b) => a + b;
const courseName = () => `${course} Student`;

// 3 DESTRUCTURED ARRAYS
let [sub1, sub2] = ["IT300", "IT302"];
let [grade1, grade2] = [88, 90];
let [hobby1, hobby2] = ["BADMINTON", "BASKETBALL"];

// 3 DESTRUCTURED OBJECTS
let {name, studentAge} = {name: "Vince", studentAge: 20};
let {teacherName, teacherSubject} = {
    teacherName: "Mr. Yuri Joseph A. Ortiz",
    teacherSubject: "Mobile Programming"
};
let {schoolName, schoolCity} = {
    schoolName: "Northwest Samar State University",
    schoolCity: "Calbayog, City"
};

// 2 ARRAYS WITH SPREAD
let subjects = [sub1, sub2, ...["IT302"]];
let grades = [grade1, grade2, ...[85]];

// 2 OBJECTS WITH SPREAD
let student = {...{name: "Vince", age: 20}, course: "BSIT"};
let schoolInfo = {...{name: "Northwest Samar State University"}, city: "Calbayog, City"};

// 2 MAP
let doubled = [1, 2, 3].map(x => x * 2);
let updatedGrades = [80, 85, 90].map(x => x + 5);

// 2 FILTER
let passingGrades = [60, 75, 80, 90].filter(x => x >= 75);
let highGrades = [80, 85, 90, 95].filter(x => x >= 90);

// 2 OPTIONAL CHAINING
let email = {contact: {email: "rontosvince4"}}?.contact?.email;
let phone = {contact: {phone: "09388395085"}}?.contact?.phone;

// OUTPUT
console.log(`Hello: ${greet()}`);
console.log(`Average: ${average()}`);
console.log(`Passed: ${checkGrade(math)}`);
console.log(`Addition: ${add(10, 5)}`);
console.log(`Course: ${courseName()}`);
console.log(`Subjects: ${subjects}`);
console.log(`Grades: ${grades}`);
console.log(`Doubled: ${doubled}`);
console.log(`Passing: ${passingGrades}`);
console.log(`High Grades: ${highGrades}`);
console.log(`Email: ${email}`);
console.log(`Phone: ${phone}`);