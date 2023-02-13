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

// Step 4
const withdrawTotalElement = document.getElementById('withdraw-total');
const previouswithdrawTotalString = withdrawTotalElement.innerText;
const previouswithdrawTotal = parseFloat(previouswithdrawTotalString);

// Step 5
const newwithdrawTotal = previouswithdrawTotal + newWithdrawAmount;
withdrawTotalElement.innerText = newwithdrawTotal;

// Step 6
const balanceElement = document.getElementById('balance-total');
const previousBalanceTotalString = balanceElement.innerText;
const previousBalanceTotal = parseFloat(previousBalanceTotalString);

// Step 7
const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
balanceElement.innerText = newBalanceTotal;

})