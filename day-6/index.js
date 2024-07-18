// task-1
let arr = [1, 2, 3, 4, 5];

const task1 = () => {
  console.log(arr);
};
task1();
// task-2
console.log("first elem-", arr[0], "last elem-", arr[arr.length - 1]);
// TASK-3
arr.push(3);
task1()
// task-4
arr.pop();
task1()
// task-5
arr.shift();
task1();
// task-6
arr.unshift(20)
task1();
// task-7
let newArr=arr.map(x=>x*2);
console.log(newArr);
// task-8
let evenArr=arr.filter((n)=>{
  return n%2===0
})
console.log(evenArr);
// task-9
const sum=arr.reduce((a,b)=>{
  return a+b;
})
console.log(sum);
// task-10
for(let i=0;i<arr.length;i++){
  console.log(arr[i])
}
// task-11
for(let elem of arr){
  console.log(elem)
}
// task-12
const twoDimensionaArr=[[1,2,3],[4,5,6],[7,8,9]]
console.log(twoDimensionaArr);
// task-13
let elem=twoDimensionaArr[0][2];
console.log(elem);