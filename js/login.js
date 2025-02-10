// login button starting
document.getElementById('btm-login').addEventListener('click',function(){
   const PhoneNumber = getInputPhone_PinNUmber('phone-number');
   const PinNumber = getInputPhone_PinNUmber('password-number');
   console.log(PhoneNumber,PinNumber)
   if(PhoneNumber === 1234 && PinNumber === 1234 ){
    window.location.href = '/home.html';
   }
   else{
    alert('please right information')
   }
})
