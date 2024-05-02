firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        if(user.emailVerified){
            setTimeout(()=>{
                window.location.assign("../Pages/home.htm")
            },1000)
        }else{
            setTimeout(()=>{
                window.location.assign("../Pages/emailVerification.htm")
            },1000)
        }
    } else {
        setTimeout(()=>{
            window.location.assign("../Pages/login.htm")
        },1000)
    }
  });