// Logical AND (&&)
// Returns TRUE if both operands are TRUE
console.log(true && true);

let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;
console.log(eligibleForLoan);

// Logical OR (||)
// Returns TRUE if one of the operands is TRUE
highIncome = true;
goodCreditScore = true;
eligibleForLoan = highIncome || goodCreditScore;
console.log(eligibleForLoan);
highIncome = false;
console.log(eligibleForLoan);

// NOT (!)
highIncome = false;
goodCreditScore = false;
eligibleForLoan = highIncome || goodCreditScore;
let applicationRefused = !eligibleForLoan;
console.log('Eligible', eligibleForLoan);
console.log('Application Refused', applicationRefused);
