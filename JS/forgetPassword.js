const back = ()=>{
    window.location.assign("../Pages/login.htm");
}

let Email = document.getElementById("email");
let Message = document.getElementById("message");

const reset = ()=>{
    if(Email.value === ""){
        Message.innerHTML = "Please enter your Email Address!"
        Message.style.color = "red";
    }else{
        firebase.auth().sendPasswordResetEmail(Email.value)
        .then(() => {
            Message.innerHTML = "Password Reset Mail is sent";
            Message.style.color ="green";
            setTimeout(()=>{
                window.location.assign("../Pages/login.htm")
            },2000)
        })
        .catch((error) => {
            Message.innerHTML = error.message;
            Message.style.color = "red";
        });  
    }
}