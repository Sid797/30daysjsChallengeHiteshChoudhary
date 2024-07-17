// task1
const evenodd = (n) => {
  if (n % 2 === 0) {
    console.log("even");
  } else {
    console.log("odd");
  }
};
evenodd(0);
// task-2
const square = (n) => {
  console.log(n * n);
};
square(5);
// task-3
const maxOfTwo = (a, b) => {
  if (a > b) {
    console.log(`${a} is bigger`);
  } else if (a === b) {
    console.log("both are equal");
  } else {
    console.log(`${b} is bigger`);
  }
};
maxOfTwo(4, 2);
// task-4
const concateTwoStrings = (a, b) => {
  c=a.concat(b)
  console.log(c);
}

concateTwoStrings("hi","wi" );

// task-5
const arrowSum=(a,b)=>{
  c=a+b;
  console.log(c)
}
arrowSum(1,2)
// task-6
const stringContains=(s,char)=>{
  if(s.includes(char)){
    console.log("contains")
  }else{
    console.log("doesnt contain")
  }
}
stringContains("hii","r")
// task-7
const prod=(a,b=12)=>{
    console.log(a*b);
}
prod(12)
// task-8
const greeting=(name,age=18)=>{
  console.log(`hello ${name} you are ${age} years old`)
}
greeting("sidd")
// task-9
const helloworld=()=>{
  console.log("hello world")
}
const callFuncNTime=(func,n)=>{
  for(let i=0;i<n;i++){
    func();
  }
}
callFuncNTime(helloworld,2)
// task-10
const task10=(func1,func2,val)=>{
    console.log(func2(func1(val)));
}
const square1=(n)=>{
  return n*n;
}
const cube=(n)=>{
  return n*n*n;
}
task10(square1,cube,2);