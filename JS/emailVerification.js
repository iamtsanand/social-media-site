let Email = document.getElementById("emailid");
let Message = document.getElementById("message");


firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log(user);
        if(user.emailVerified){
            window.location.assign("../Pages/home.htm");
        }
    } else {
        window.location.assign("../Pages/login.htm");
    }
});


const resend = ()=>{
     firebase.auth().currentUser.sendEmailVerification().then(()=>{
        Message.innerHTML = "A verification mail has been sent to your Email Address";
        Message.style.color = "green";
        Message.style.marginBottom = "15px";
    })
}

const reload =()=>{
    location.reload();
}