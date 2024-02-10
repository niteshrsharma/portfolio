let loginForm=document.querySelector(".login-form-cont");
let signupForm=document.querySelector(".signup-form-cont");
let isLoginFormOpen=false;
let isSignupFormOpen=false;
function showLoginForm(){
    isLoginFormOpen=!isLoginFormOpen;
    isSignupFormOpen=false;
    if(isLoginFormOpen){
        loginForm.style.display="block";
        signupForm.style.display="none";
    }
    else{
        isLoginFormOpen.display="none"
    }
}

function showSignupForm(){
    isLoginFormOpen=false;
    isSignupFormOpen=!isSignupFormOpen;
    if(isSignupFormOpen){
        signupForm.style.display="block";
        loginForm.style.display="none";
    }
    else{
        signupForm.display="none"
    }
}