/*
1. Add Event listener to the deposit bitton
2. get deposit amount from the deposit input fild
2-5. Convart string deposit amount to an ni=umber type
3. Clear the deposit input field after getting the value
4. Get the previous deposit total
5. Calculate new deposit total and set the value to the deposit total
6. Get curent banalce
7. Calculate new Balance total and set the value to the balance total
*/
 
// Step 1 
document.getElementById('btn-deposit').addEventListener('click', function(){

    // Step 2
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    
    // Step 3 
    depositField.value = '';

    // Step 4
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

     // Step 5
     const newDepositTotal = previousDepositTotal + newDepositAmount;
     depositTotalElement.innerText = newDepositTotal;

// Step 6
     const balanceTotalElement = document.getElementById('balance-total');
     const previousBalanceTotalString = balanceTotalElement.innerText;
     const previousBalanceTotalAmount = parseFloat(previousBalanceTotalString);

     // Step 7
     const newBalanceTotal = previousBalanceTotalAmount + newDepositAmount;
     balanceTotalElement.innerText = newBalanceTotal;

})