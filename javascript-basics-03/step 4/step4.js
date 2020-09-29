let form = document.querySelector("button");
let password = document.getElementById("password");
let confirmation = document.getElementById("confirmation");
form.addEventListener("click" , ( ) => {
    if(password.value !== confirmation.value){
        password.style.borderColor = "red";
        confirmation.style.borderColor = "red";    
    }
});