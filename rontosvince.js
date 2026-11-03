// Student Record System

// 10 LET VARIABLES
let studentName = "Lebron James";
let age = 41;
let course = "BSIT";
let yearLevel = 3;
let section = "3B";
let math = 75;
let science = 70;
let english = 80;
let city = "Cebu";
let school = "ABC University";

// 10 CONST VARIABLES
const passing = 75;
const studentID = "BSIT001";
const teacher = "Mr. Santos";
const subject1 = "Math";
const subject2 = "Science";
const subject3 = "English";
const semester = "1st Semester";
const room = "IT-203";
const department = "IT";
const schoolYear = "2026-2027";

// TEMPLATE LITERALS
console.log(`Name: ${studentName}`);
console.log(`Age: ${age}`);
console.log(`Course: ${course}`);
console.log(`Year: ${yearLevel}`);
console.log(`Section: ${section}`);
console.log(`Math: ${math}`);
console.log(`Science: ${science}`);
console.log(`English: ${english}`);
console.log(`City: ${city}`);
console.log(`School: ${school}`);

// 5 ARROW FUNCTIONS
const greet = () => `Hello ${studentName}`;
const average = () => (math + science + english) / 3;
const checkGrade = grade => grade >= passing;
const add = (a, b) => a + b;
const courseName = () => `${course} Student`;

// 3 DESTRUCTURED ARRAYS
let [sub1, sub2] = ["Math", "Science"];
let [grade1, grade2] = [88, 90];
let [hobby1, hobby2] = ["Basketball", "Gaming"];

// 3 DESTRUCTURED OBJECTS
let {name, studentAge} = {name: "Vince", studentAge: 20};
let {teacherName, teacherSubject} = {
    teacherName: "Mr. Santos",
    teacherSubject: "JavaScript"
};
let {schoolName, schoolCity} = {
    schoolName: "ABC University",
    schoolCity: "Cebu"
};

// 2 ARRAYS WITH SPREAD
let subjects = [sub1, sub2, ...["English"]];
let grades = [grade1, grade2, ...[85]];

// 2 OBJECTS WITH SPREAD
let student = {...{name: "Vince", age: 20}, course: "BSIT"};
let schoolInfo = {...{name: "ABC University"}, city: "Cebu"};

// 2 MAP
let doubled = [1, 2, 3].map(x => x * 2);
let updatedGrades = [80, 85, 90].map(x => x + 5);

// 2 FILTER
let passingGrades = [60, 75, 80, 90].filter(x => x >= 75);
let highGrades = [80, 85, 90, 95].filter(x => x >= 90);

// 2 OPTIONAL CHAINING
let email = {contact: {email: "vince@gmail.com"}}?.contact?.email;
let phone = {contact: {phone: "09123456789"}}?.contact?.phone;

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