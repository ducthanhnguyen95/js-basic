// 0-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A

// function calculateGrade(marks) {
//   let grade = 0;

//   for (let value of marks) {
//     if (value > 100) return value + ' invalid';
//     grade += value;
//   }

//   let average = Math.floor(grade / makrs.length);
//   if (average >= 0 && average <= 59) return 'F';
//   else if (average >= 60 && average <= 69) return 'D';
//   else if (average >= 70 && average <= 79) return 'C';
//   else if (average >= 80 && average <= 89) return 'B';
//   else 'A';
// }

function calculateGrade(marks) {
  const average = calculateAverage(makrs);
  if (average < 60) return 'F';
  if (average < 70) return 'D';
  if (average < 80) return 'C';
  if (average < 90) return 'B';
  return 'A';
}

function calculateAverage(array) {
  let sum = 0;
  for (let value of array) {
    if (value > 100) return value + ' invalid';
    sum += value;
  }
  return Math.floor(sum / array.length);
}

const makrs = [80, 80, 100];
console.log(calculateGrade(makrs));
