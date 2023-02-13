/*
1. Add Event listener to the deposit bitton
*/

//  Step 1 
document.getElementById('btn-withdraw').addEventListener('click', function(){

//  Step 2
const withdrawField = document.getElementById('withdraw-field');
const newWithdrawAmountString = withdrawField.value;
const newWithdrawAmount = parseFloat(newWithdrawAmountString);

// Step 3 
withdrawField.value = '';

})