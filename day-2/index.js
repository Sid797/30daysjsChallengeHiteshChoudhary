// task-1
const task1 = (a, b) => {
  return a + b;
};
console.log(task1(5, 6));
// task-2
const task2 = (a, b) => {
  return a - b;
};
console.log(task2(6, 5));
// task-3
const task3 = (a, b) => {
  return a * b;
};
console.log(task3(3, 6));
// task-4
const task4 = (a, b) => {
  return a / b;
};
console.log(task4(10, 5));
// task-5
const task5 = (a, b) => {
  return a % b;
};
console.log(task5(6, 5));
// task-6
const task6 = (a) => {
  a += 1;
  return a;
};
console.log(task6(5));
// task-7
const task7 = (a, b) => {
  a -= b;
  return a;
};
console.log(task7(10, 5));
// task-8
const task8 = (a, b) => {
  if (a > b) {
    return true;
  } else {
    return false;
  }
};
console.log(task8(10, 5));
// task-9
const task9 = (a, b) => {
  if (a >= b) {
    return true;
  } else {
    return false;
  }
};
console.log(task9(10, 5));
// task-10
const task10 = (a, b) => {
  if (a == b) {
    console.log("equal");
  } else {
    console.log("unequal");
  } //this logs equal lol because js

  
  if (a === b) {
    console.log("equal");
  } else {
    console.log("unequal");
  }//this logs unequal 
};
task10(1,"1");
// task-11
const task11 = (a, b) => {
  if (a > 5 && b < 10) {
    console.log("true");
  } else {
    console.log("false");
  }
};
task11(6, 9);
// task-12
const task12 = (a, b) => {
  if (a > 5 || b < 10) {
    console.log("true");
  } else {
    console.log("false");
  }
};
task12(6, 11);
// task-13
const task13 = (a) => {
  if (!(a > 5)) {
    console.log("true");
  } else {
    console.log("false");
  }
};
task13(6);
// task-14
const task14 = (a) => {
  return a > 0 ? 'positive' : 'negative';
};
console.log(task14(-5));
