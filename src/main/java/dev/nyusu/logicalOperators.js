//logical and (&&)
//returns TRUE if both operands are TRUE

//console.log(true && true);



let highIncome = true;
let goodCreditScore = false;
let eligibleForLoan = (highIncome && goodCreditScore) ? 'Loan Is Aproved' : 'Loan Was Denied' ;
//console.log('Eligible', eligibleForLoan);
console.log(eligibleForLoan);
//let applicationRefused = !eligibleForLoan

//console.log('Application Refused', applicationRefused);


let userColor = '';
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;
//console.log(currentColor)

