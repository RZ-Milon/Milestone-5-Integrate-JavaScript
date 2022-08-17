document.getElementById('btn-withdraw').addEventListener('click', function(){
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');
    const previousWithdrawTotal = getTextElementValueById('withdraw-total');
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    setTextElementValueById('withdraw-total', newWithdrawTotal);
    
    const previousBlanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = previousBlanceTotal - newWithdrawAmount;
    setTextElementValueById('balance-total', newBalanceTotal);
})