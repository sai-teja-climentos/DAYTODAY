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

    alert("Next")

   } else {

      alert("Erorr")

   }


}


