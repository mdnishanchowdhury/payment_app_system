// phone number & pin number section function generate
function getInputPhone_PinNUmber(id){
    const Number =document.getElementById(id).value;
    const IntNUmber = parseFloat(Number);
    return IntNUmber;
}

function getDisplay(id){
    document.getElementById('display1').classList.add('hidden');
    document.getElementById('display2').classList.add('hidden');
    document.getElementById('display-section-item').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');
};