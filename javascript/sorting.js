// const person=["RAM" ,"Shyam" ,"Hari" ,"Geeta"];

// person.sort();

// console.log(person);

// const number=[9, 10,  8 , 3, 2];

// number.sort( (a,b) => a-b);

// console.log(number);

const info = [{ name: "Ram", age: 20, gpa: 2.9 },
{ name: "Aman", age: 30, gpa: 3.9 },
{ name: "Saman", age: 27, gpa: 1.9 },
{ name: "Gita", age: 23, gpa: 4.0 }
]
info.sort((a,b) => a.gpa - b.gpa);

console.log(info);