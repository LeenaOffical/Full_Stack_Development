// class Student{
//     //  let name;
//     //  let age;
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
// }

// const obj1 = new Student("Leena",21);
// console.log(obj1);
// const obj2 = new Student("viga",21);
// console.log(obj2);
// const obj3 = new Student("Avi",21);
// console.log(obj3);
// const obj4 = new Student("Kavya",21);
// console.log(obj4);

// const arr = [1,2,3,4,5];

// let ans = arr.every(val=>val<6);
// // let ans = arr.reduce(val=>val<0);
// console.log(ans);

// let a = 7;
// let b = 0;

// if(b==0){
//     throw new Error('Divided by 0 is not possible');
// }
// console.log(a/b);

// let a = 6;
// try{
//     console.log(a);
// } catch(error){
//     console.error(error);
// }finally{
//     console.log("always");
// }

let a = 10;
let b = "10";
b = Number(b);
console.log(typeof a);
console.log(typeof b);
console.log(a==b);
console.log(a===b);