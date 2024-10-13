
var lgoin=document.querySelector("#login");
var user=document.querySelector("#e-mail");
var password=document.querySelector("#password");

lgoin.addEventListener("click",loginSuccess);


function loginSuccess(){
   if(user.value==="Shital-Rathod" && password.value==="10-10-2000"){
    alert("Welcome back Shital! Log in succesfull.");
    window.location.href="./Profile.html"
   }
   else{
    alert("Incorrect e-mail or password");
   }
}


