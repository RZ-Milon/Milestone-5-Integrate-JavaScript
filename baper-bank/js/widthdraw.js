/* 
1. add event handler with the widthdraw button
2. get the widthdraw amount from the widthdraw input field
2-5. also make sure to convert the input into a number by parseFloat
3. get previous widthdraw totl
4. calculate total widthdraw amount
4-5. set total widthdraw amount

5. get the previous balance total
6. calculate new balance total
6-5. set the new balance total

7. clear the innput field
*/

// step-1: 
document.getElementById('btn-widthdraw').addEventListener('click', function () {
    // step-2: 
    const widthdrawField = document.getElementById('widthdraw-field');
    const newWidthdrawAmountString = widthdrawField.value;
    const newWidthdrawAmount = parseFloat(newWidthdrawAmountString);

    // step-7:
    widthdrawField.value = '';

    if (isNaN(newWidthdrawAmount)) {
        alert('Please provide a valid number');
        return;
    }

    // step-3:
    const widthdrawTotalElement = document.getElementById('widthdraw-total');
    const previousWidthdrawTotalString = widthdrawTotalElement.innerText;
    const previousWidthdrawTotal = parseFloat(previousWidthdrawTotalString);


    // step-5:
    const balanceTotalElement = document.getElementById('blance-total');
    const previousBlanceTotalString = balanceTotalElement.innerText;
    const previousBlanceTotal = parseFloat(previousBlanceTotalString);



    if (newWidthdrawAmount > previousBlanceTotal) {
        alert('Tomar eto taka ace naki j tumi tulte aicho');
        return;
    }


    // step-4:
    const currentWidthdrawTotal = previousWidthdrawTotal + newWidthdrawAmount;
    widthdrawTotalElement.innerText = currentWidthdrawTotal;

    // step-6: 
    const newBalaneTotal = previousBlanceTotal - newWidthdrawAmount;
    balanceTotalElement.innerText = newBalaneTotal;
})