/*
1. Add Event listener to the deposit bitton
2. get deposit amount from the deposit input fild
2-5. Convart string deposit amount to an ni=umber type
3. Clear the deposit input field after getting the value
*/
 
// Step 1 
document.getElementById('btn-deposit').addEventListener('click', function(){

    // Step 2
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    
    // Step 3 
    depositField.value = ''

})