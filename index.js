
var lgoin=document.querySelector("#login");
var user=document.querySelector("#e-mail");
var password=document.querySelector("#password");

lgoin.addEventListener("click",loginSuccess);


function loginSuccess(){
   if(user.value==="Shital-Rathod" && password.value==="10-10-2000"){
    alert("Sorry! Kiran has restricted you from this page, Please ask for his permission.");
   // window.location.href="./Profile.html"
   }
   else{
    alert("Incorrect e-mail or password");
   }
}


