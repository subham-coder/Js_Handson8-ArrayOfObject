// Q1.	"We are interested in retrieving only the students' names; all the names should be in caps.
// ['JOHN', 'BABA', 'YAGA', 'WICK']"
//    
// let studentRecords = [ {name: 'John', id: 123, marks : 98 },
// {name: 'Baba', id: 101, marks : 23 },
// {name: 'yaga', id: 200, marks : 45 },
// {name: 'Wick', id: 115, marks : 75 } ] ;

// let ans=[];
// for(let i=0;i<studentRecords.length;i++) {
//    ans.push(studentRecords[i].name.toUpperCase());
// }
// console.log(ans);

// Q2. "Suppose we have the same dataset as above but this time we want to get the details of students who scored more than 50 marks.
// [{name: 'John', id: 123, marks: 98 },{name: 'Wick', id: 115, marks: 75 }]"

// let studentRecords = [ {name: 'John', id: 123, marks : 98 },
// {name: 'Baba', id: 101, marks : 23 },
// {name: 'yaga', id: 200, marks : 45 },
// {name: 'Wick', id: 115, marks : 75 } ] ;

// let ans=[];
// for(let i=0;i<studentRecords.length;i++) {
//    if (studentRecords[i].marks>50) {
//       ans.push(studentRecords[i]);
// }
// }
// console.log(ans);

//Q3.  Retrieve the details of students who scored more than 50 marks and have IDs greater than 120.

// let studentRecords = [ {name: 'John', id: 123, marks : 98 },
//           {name: 'Baba', id: 101, marks : 23 },
//           {name: 'yaga', id: 200, marks : 45 },
//           {name: 'Wick', id: 115, marks : 75 } ] ;

// let ans=[];
//     for(let i=0;i<studentRecords.length;i++) {
//         if(studentRecords[i].marks>50 && studentRecords[i].id>120) {
//             ans.push(studentRecords[i]);
//         }
//     }
// console.log(ans);

// Q4- Consider the same scenario we have discussed above, but this time we would like to know the sum total of the marks of the student.

// let studentRecords = [ {name: 'John', id: 123, marks : 98 },
// {name: 'Baba', id: 101, marks : 23 },
// {name: 'yaga', id: 200, marks : 45 },
// {name: 'Wick', id: 115, marks : 75 } ] 

// let ans=[];
// sum=0;
// for(i=0;i<studentRecords.length;i++) {  
//      sum+=studentRecords[i].marks;
// }
// console.log(sum);

//Q5- This time we want to get only the names of the students who scored more than 50 marks from the same dataset used above.

// let studentRecords = [ {name: 'John', id: 123, marks : 98 },
// {name: 'Baba', id: 101, marks : 23 },
// {name: 'yaga', id: 200, marks : 45 },
// {name: 'Wick', id: 115, marks : 75 } ] 

// let ans=[];
// for(i=0;i<studentRecords.length;i++) {
//     if(studentRecords[i].marks>50) {
//         ans.push(studentRecords[i].name);
//     }
// }
// console.log(ans);

//Q6- This time we want to get only the names of the students who scored more than 50 marks from the same dataset used above.

// let studentRecords = [ {name: 'John', id: 123, marks : 98 },
//           {name: 'Baba', id: 101, marks : 23 },
//           {name: 'yaga', id: 200, marks : 45 },
//           {name: 'Wick', id: 115, marks : 75 } ] 

// let ans=[];
// let a=0;
// for(i=0;i<studentRecords.length;i++) {
//     if(studentRecords[i].id>120) {
//         a+=studentRecords[i].marks;
//     }
// }
// console.log(a);

// Q7- This time we are required to print the total marks of the students with marks greater than 50 after a grace of 15 marks has been added to those students who scored less than 50.

// let studentRecords = [ {name: 'John', id: 123, marks : 98 },
//           {name: 'Baba', id: 101, marks : 23 },
//           {name: 'yaga', id: 200, marks : 45 },
//           {name: 'Wick', id: 115, marks : 75 } ] 
// // 
// let ans=[];
// let a=0;
// for(let i=0;i<studentRecords.length;i++) {
//     if (studentRecords[i].marks<50) {
//         studentRecords[i].marks+=15;
//     }
//     if(studentRecords.marks>50) {
//         a+=studentRecords[i].marks;
        
//     }
// }
// console.log(a);

//Q8. Create 6 objects , each object will have name, class, roll no as properties. Store these objects in an array of objects. 

// let studentRecords = [ {name: 'John', id: 123, marks : 98 },
//           {name: 'Baba', id: 101, marks : 23 },
//           {name: 'yaga', id: 200, marks : 45 },
//           {name: 'Wick', id: 115, marks : 75 } ] 

let students=[ object1={name: "John" , class: 1, rollno: 1},
object2={name: "Aman" , class: 2, rollno: 4},
object3={name: "Ram" , class: 3 , rollno: 6},
object4={name: "Subham" , class: 4 , rollno: 8},
object5={name: "Ramesh" , class:5 , rollno: 10},
object6={name: "Sai" , class:6 , rollno: 12}];
console.log(students);