//task-1
var a = 5;
console.log(a);
//task-2
let b = "hi";
console.log(b);
//task-3
const c = false;
console.log(c);
//task-4
const num = 5;
const str = "ji";
const bool = true;
const obj = {
  a: 5,
  b: "hi",
  c: false,
};
const arr = [1, 2, 3, 4, 5];
console.log(typeof num, typeof str, typeof bool, typeof obj, typeof arr);
console.log("arr is a special object called Array-", Array.isArray(arr));
// task-5
let task5 = 5;
console.log("old value:", task5);
task5 = 6;
console.log("new value:", task5);
// task-6
const task6=5;
console.log("old value:", task6);
// task6=6;
// console.log("new value:", task6);



// FEATURES AS REQUESTED
// 1st script
// const num = 5;
// const str = "ji";
// const bool = true;
// const obj = {
//   a: 5,
//   b: "hi",
//   c: false,
// };
// const arr = [1, 2, 3, 4, 5];
// already defined above 
console.log(num,"- type is",typeof num);
console.log(str,"- type is",typeof str);
console.log(bool,"- type is",typeof bool);
console.log(obj,"- type is",typeof obj);
console.log(arr,"- type is",typeof arr);
// 2nd script
let var1 = 5;
console.log("first variable with let",var1)
var1=6;
console.log("second variable with let",var1)

const var2=10;
console.log("first variable with const",var2)
var2=11;
console.log("second variable with const",var2)