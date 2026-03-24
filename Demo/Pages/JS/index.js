function SignupForm() {

   event.preventDefault();

   signupUsername = document.getElementById("SignupUsername").value;
   signupPassword = document.getElementById("SignupPassword").value;


   if (signupUsername && signupPassword) {


       StorageUsername = localStorage.getItem("SignupUsername");
       StoragePassword = localStorage.getItem("SignupPassword");


       if(StorageUsername==signupUsername && StoragePassword==StoragePassword){
       
          alert("Plz try to log_in")
          window.location.href="index_log_in.htm";

       }else{
         localStorage.setItem("SignupUsername", signupUsername);
         localStorage.setItem("SignupPassword", signupPassword);
         
         alert("You'r Acc was add..! plz try to log_in.")

          window.location.href="index_log_in.htm";


       }
    }
   
}

function LoginForm() {

   event.preventDefault();

   Username = document.getElementById("Username").value;
   Password = document.getElementById("Password").value;


   StorageUsername = localStorage.getItem("SignupUsername");
   StoragePassword = localStorage.getItem("SignupPassword");


   if (Username == StorageUsername && Password == StoragePassword) {

      window.location.href="Uplode.htm"


   } else {

      alert("Erorr")

   }


}

// function UplodeForm(){

// full_name = document.getElementById("FullName").value;

// emailaddress = document.getElementById("EmailAddress").value;

// phonenumber = document.getElementById("PhoneNumber").value;


// localStorage.setItem("FullName",full_name);

// localStorage.setItem("EmailAddress",emailaddress);

// localStorage.setItem("PhoneNumber",phonenumber);


// }


function  displayForm(){
   
// let full_name = "0000000000000";

event.preventDefault();

var full_name = document.getElementById("FullName").value;


// localStorage.setItem("FullName",full_name);

// localStorage.setItem("EmailAddress",emailaddress);

// localStorage.setItem("PhoneNumber",phonenumber);

alert(full_name)


// document.getElementById("FullNameDS_").innerText = full_name;
   
   
   // full_name = FullNameDS_;

}

