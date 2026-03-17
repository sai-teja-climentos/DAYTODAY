function SignupForm() {

   event.preventDefault();

   signupUsername = document.getElementById("SignupUsername").value;
   signupPassword = document.getElementById("SignupPassword").value;


   if (signupUsername && signupPassword) {


      sessionStorage.setItem("SignupUsername", signupUsername);

      sessionStorage.setItem("SignupPassword", signupPassword);

      window.location.href = "index_log_in.htm";

   }
   else {

      alert("Plz fill the the input's")

   }


}

function LoginForm() {

   event.preventDefault();

   Username = document.getElementById("Username").value;
   Password = document.getElementById("Password").value;


   StorageUsername = sessionStorage.getItem("SignupUsername");
   StoragePassword = sessionStorage.getItem("SignupPassword");


   if (Username == StorageUsername && Password == StoragePassword) {

      window.location.href = "demo.htm";

   } else {
      window.location.href = "erorr.htm";
   }



   //  sessionStorage.setItem("Username",Username);
   //  sessionStorage.setItem("Password",Password);

   //  alert("Date Saved!");

   //  if(JS_Username==Username && JS_Password==Password){

   //  //    alert("welcome to the new loning page..!")

   //     window.location.href = "demo.htm";

   //  }else{
   //      //  alert("SORRY THE PAGE WAS NOT FOR YOU...! ERORR")
   //     window.location.href = "erorr.htm";


   //  }

}


