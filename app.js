function signup() {
    var getInput = document.querySelector('#getEmail')
    var getNewPassword = document.querySelector('#getNewPass')
    var getCnfrmPassword = document.querySelector('#getCnfrmPass')
    if(getInput.value == '' || getNewPassword.value == '' || getCnfrmPassword.value == ''){
        alert("Please Fill the Required Fields Correclty")
    }
    else if (getNewPassword.value !== getCnfrmPassword.value) {
        alert("Password are not Match")
    }
    else {
        localStorage.setItem('Email', getInput.value)
        localStorage.setItem('New Password', getNewPassword.value)
        localStorage.setItem('Confirm Password',getCnfrmPassword.value)
        location.href = './signin.html'
        alert("Sign Up Succesfully")
    }


}

function signin() {
    var getInput = document.querySelector('#getEml')
    var getPassword = document.querySelector('#getPassword')
    if(localStorage.getItem('Email') == getInput.value && localStorage.getItem('New Password') == getPassword.value){
        alert("Log in Sucessfull")
        location.href = './dashboard.html'
    }
    else {
        location.href = './signup.html'
        alert("Log in Failed, Please Sign Up First")
    }
}


// function geth1() {
//     var email = localStorage.getItem('Email')
//     document.write(`<h1> Welcome ${email} ! </h1>`)
    
// }