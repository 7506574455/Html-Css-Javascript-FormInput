//UC1
 //To validate the name field using the REGEX expression
 //Name validation
 const nameText=document.querySelector('#name');
 const nameTextError=document.querySelector('.name-error')
 nameText.addEventListener('input',function(){
     let nameRegex=RegExp('^[A-Z]{1}[a-z]{2,}$')
     console.log(nameText);
     if(nameRegex.test(nameText.value))
         nameTextError.textContent=' ';
     else
         nameTextError.textContent='Name invalid'
 });

 //UC2
 //To validate the email field using the REGEX expression
        
const email = document.querySelector('#email');
const emailError = document.querySelector('.email-error');
        text.addEventListener('input', function() {
        let emailRegex = RegExp("^[A-Z a-z]{1,}([+-_.]*)[A-Z a-z 0-9 _+-.]*[@]{1}[A-Z a-z 0-9 +_-]{1,}[.]{1}[a-z]{2,3}([.]{1}[a-z]{2})*$");
        if(emailRegex.test(email.value))
            emailError.emailContent = "";
        else emailError.emailContent = "Email is Invalid";
});

//UC3
//Mobile number validation
const number = document.querySelector('#tel');
const numberError = document.querySelector('.tel-error');
number.addEventListener('input', function () {
    let numberRegex = RegExp('^[1-9]{2}\\s{0,1}[1-9]{1}[0-9]{9}$');
    if (numberRegex.test(number.value))
        numberError.textContent = ' ';
    else
        numberError.textContent = 'Invalid Number!';
}); 
//UC4
//password validation minimum 8 characters
const pwd = document.querySelector('#pwd');
const passworderror = document.querySelector('.pwd-error');
pwd.addEventListener('input', function () {
let passwordpattern = RegExp('^[a-z A-Z 0-9 @#%!&*_]{8,}$');
    if (passwordpattern.test(pwd.value))
        passworderror.textContent = ' ';
    else
        passworderror.textContent = 'Invalid Password!';
});

 