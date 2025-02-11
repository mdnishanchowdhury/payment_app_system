
// Cash-In section
document.getElementById('Cash-In').addEventListener('click', function () {
    const amountSection = getInputPhone_PinNUmber('amount-section');
    const pinNumber = getInputPhone_PinNUmber('pin-number');
    const balance = document.getElementById('balance').innerText;
    const balanceSection = parseFloat(balance);


    if (pinNumber === 1234) {
        const total = amountSection + balanceSection;
        document.getElementById('balance').innerText = total;

        // display starting
        
        const p =document.createElement('p');
        p.innerText =`Cash-In: ${amountSection} tk. balance: ${total}`;
        // console.log(p);
        document.getElementById('display-section').appendChild(p);

        // ending display
    }
    else {
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


    if (pinNumber === 1234) {
        const total = amountSection - balanceSection;
        const totalPositive = total * -1;
        document.getElementById('balance').innerText = totalPositive;

         // display starting
        
         const p =document.createElement('p');
         p.innerText =`Cash-Out tk: ${amountSection} tk. balance: ${totalPositive}`;
         console.log(p);
         document.getElementById('display-section').appendChild(p);
 
         // ending display
    }
    else {
        alert('wrong information');
    }

})
// Transaction history
document.getElementById('transaction-history-btm').addEventListener('click', function () {
    getDisplay('display-section-item');
});
