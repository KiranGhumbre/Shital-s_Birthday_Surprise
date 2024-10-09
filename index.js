
var lgoin=document.querySelector("#login");
var user=document.querySelector("#e-mail");
var password=document.querySelector("#password");
var form=document.querySelector("#myform");

lgoin.addEventListener("click",loginSuccess);


function loginSuccess(){
   if(user.value==="Shital-Rathod" && password.value==="10-10-2000"){
    alert("Happy Birthday Shital! Login Successful");
    window.location.href="./Profile.html"
   }
   else{
    alert("Incorrect e-mail or password");
   }
}


