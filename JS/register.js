var login = () => {
    window.location.assign("../Pages/login.htm");
};

const regex_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

const FirstName = document.getElementById("firstname");
const LastName = document.getElementById("lastname");
const Email = document.getElementById("email");
const PhoneNumber = document.getElementById("phoneNumber");
const Password = document.getElementById("password");
const ConfirmPassword = document.getElementById("confirmPassword");
const Message = document.getElementById("message");

const signup = () => {

    if (FirstName.value === "") {
        Message.innerHTML = "First Name is required!";

    } else if (LastName.value === "") {
        Message.innerHTML = "Last Name is required!";

    } else if (Email.value === "") {
        Message.innerHTML = "Email is required!";

    } else if (!Email.value.match(regex_email)) {
        Message.innerHTML = "Please enter a valid Email Address!";

    } else if (PhoneNumber.value.length === 0) {
        Message.innerHTML = "Mobile Number is required!";

    } else if (PhoneNumber.value.length < 11) {
        Message.innerHTML = "Please enter 11 digit Mobile Number!";

    } else if (Password.value === "") {
        Message.innerHTML = "Password is required!";

    } else if (ConfirmPassword.value === "") {
        Message.innerHTML = "Confirm Password is required!";

    } else if (Password.value !== ConfirmPassword.value) {
        Message.innerHTML = "Password do not match!";

    }else{
    firebase.auth().createUserWithEmailAndPassword(Email.value, Password.value)
        .then((userCredential) => {

        var date = new Date().toLocaleDateString();

        const UserData = {
            FirstName: FirstName.value,
            LastName: LastName.value,
            Email: Email.value,
            PhoneNumber: PhoneNumber.value,
            Password: Password.value,
            ConfirmPassword: ConfirmPassword.value,
            uid: userCredential.user.uid,
            ProfilePicture: "",
            CoverPicture: "",
            SignUpDate: '${date}'
        }
    firebase.firestore().collection("Users").doc(userCredential.user.uid).set(UserData)
        .then((res)=>{
            Message.innerHTML = "Account Successfully Created.";
            Message.style.color = "green";
        })

    const user = firebase.auth().currentUser;
    user.sendEmailVerification()
        .then((res)=>{
            setTimeout(()=>{
                window.location.assign("../Pages/emailVerification.htm");
            },2000)
        })
  })
  .catch((error) => {
    Message.innerHTML = error.message;
    Message.style.color = "red";
  });
    }
};
