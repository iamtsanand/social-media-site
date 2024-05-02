var register = ()=>{
    window.location.assign("../Pages/Register.htm");
};

const regex_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const Email = document.getElementById("email");
const Password = document.getElementById("password");
const Message = document.getElementById("message");

const login = ()=>{
    if(Email.value === ""){
        Message.innerHTML = "Please enter your Email Address. ";
    }else if(!Email.value.match(regex_email)){
        Message.innerHTML= "Please enter a valid Email Address!";
    }else if(Password.value === ""){
        Message.innerHTML = "Please enter the Password."
    }else{
        const UserData = {
            Email : Email.value,
            Password : Password.value
        } 
        firebase.auth().signInWithEmailAndPassword(Email.value,Password.value)
  .then((userCredential) => {
    if(userCredential.user.emailVerified){
        message.innerHTML = "Sign In successfully";
        Message.style.color = "green";
        window.location.assign("../Pages/home.htm")
    }else{
        message.innerHTML = "Please Verify your email!";
        Message.style.color = "red";
        window.location.assign("../Pages/emailVerification.htm")
    }
  })
  .catch((error) => {
    Message.innerHTML = error.message;
  });
    }
};


const ForgetPassword = ()=>{
    window.location.assign("../Pages/forgetPassword.htm")
}