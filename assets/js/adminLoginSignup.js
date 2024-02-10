let login = true;

let optionsBtns=document.querySelector(".option-btns");

let workCont=document.querySelector("#work-cont");
let userInfo=document.querySelector("#user-info");

if(!login){
    optionsBtns.style.display="flex";
    workCont.style.display="none";
    userInfo.style.display="none";
}
else{
    workCont.style.display="block";
    optionsBtns.style.display="none";
}
