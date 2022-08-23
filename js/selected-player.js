

document.getElementById('select-messi').addEventListener('click', function(button){
    const nameFildMessi = document.getElementById('messi');
    // const nameSelect = nameFildMessi.innerText;
    console.log(nameFildMessi)

    const playerSelectedFild = document.getElementById('player-selected');

    const playerSelectedStirme =playerSelectedFild.innerText;   
    
})

document.getElementById('btn-calculat-field').addEventListener('click', function(){
   
    const playerField = document.getElementById('player-input');
    const playerFieldStirem = playerField.value;
    const playerFieldField = parseFloat(playerFieldStirem);
    
    const expensesAmount = document.getElementById('expenses');
    const expensesAmountStirem = expensesAmount.innerText;
    const expensesAmountField = parseFloat(expensesAmountStirem)
    expensesAmount.innerText = playerFieldField + expensesAmountField
})

document.getElementById('btn-total').addEventListener('click', function(){
   
    const playerField = document.getElementById('manager');
    const playerFieldStirem = playerField.value;
    const playerFieldField = parseFloat(playerFieldStirem);
    
    const coachAmount = document.getElementById('coach');
    const coachAmountStirem = coachAmount.value;
    const coachAmountField = parseFloat(coachAmountStirem)



    const expensesAmount = document.getElementById('total-amount');
    const expensesAmountStirem = expensesAmount.innerText;
    const expensesAmountField = parseFloat(expensesAmountStirem)
    expensesAmount.innerText = playerFieldField + coachAmountField
})

