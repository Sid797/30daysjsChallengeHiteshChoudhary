// task -1
const task1 = (a) => {
  if (a > 0) {
    console.log("positive");
  } else if (a < 0) {
    console.log("negative");
  } else if (a === 0) {
    console.log("zero");
  } else {
    console.log("invalid");
  }
}
task1(-5);

// Task 2
const task2 = (age) => {
  if (age >= 18) {
    console.log("Eligible to vote");
  } else {
    console.log("Not eligible to vote");
  }
}

// Task 3
const task3 = (a, b, c) => {
  if (a >= b && a >= c) {
    console.log(a);
  } else if (b >= a && b >= c) {
    console.log(b);
  } else {
    console.log(c);
  }
}

// Task 4
const task4 = (dayNumber) => {
  switch (dayNumber) {
    case 1:
      console.log("Sunday");
      break;
    case 2:
      console.log("Monday");
      break;
    case 3:
      console.log("Tuesday");
      break;
    case 4:
      console.log("Wednesday");
      break;
    case 5:
      console.log("Thursday");
      break;
    case 6:
      console.log("Friday");
      break;
    case 7:
      console.log("Saturday");
      break;
    default:
      console.log("Invalid day number");
  }
}

// Task 5
const task5 = (score) => {
  switch (true) {
    case score >= 90:
      console.log("Grade A");
      break;
    case score >= 80:
      console.log("Grade B");
      break;
    case score >= 70:
      console.log("Grade C");
      break;
    case score >= 60:
      console.log("Grade D");
      break;
    case score < 60:
      console.log("Grade F");
      break;
    default:
      console.log("Invalid score");
  }
}

// Task 6
const task6 = (num) => {
  console.log(num % 2 === 0 ? "Even" : "Odd");
}

// Task 7
const task7 = (year) => {
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log("Leap year");
  } else {
    console.log("Not a leap year");
  }
}

