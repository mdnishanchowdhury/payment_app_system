
// Cash-In section
document.getElementById('Cash-In').addEventListener('click', function () {
    const amountSection = getInputPhone_PinNUmber('amount-section');
    const pinNumber = getInputPhone_PinNUmber('pin-number');
    const balance = document.getElementById('balance').innerText;
    const balanceSection = parseFloat(balance);
   
   
    if(pinNumber === 1234){
        const total = amountSection + balanceSection;
        document.getElementById('balance').innerText=total;
    }
    else{
        alert('wrong information');
    }
})
// Cash-out section
document.getElementById('Cash-In').addEventListener('click', function () {
    getDisplay('display1');

})

document.getElementById('cash-out').addEventListener('click', function () {
    getDisplay('display2');
    const amountSection = getInputPhone_PinNUmber('amount-section');
    const pinNumber = getInputPhone_PinNUmber('pin-number');
    const balance = document.getElementById('balance').innerText;
    const balanceSection = parseFloat(balance);
   
   
    if(pinNumber === 1234){
        const total = amountSection - balanceSection;
        const totalPositive = total * -1;
        document.getElementById('balance').innerText= totalPositive;
    }
    else{
        alert('wrong information');
    }

})