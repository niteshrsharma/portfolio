let login = true;

let optionsBtns=document.querySelector(".option-btns");

let orderForm=document.querySelector("#order-form");
let userInfo=document.querySelector("#user-info");

if(!login){
    optionsBtns.style.display="flex";
    orderForm.style.display="none";
    userInfo.style.display="none";
}
else{
    userInfo.style.display="block";
    optionsBtns.style.display="none";
}

