function SignupForm() {

   event.preventDefault();

   signupUsername = document.getElementById("SignupUsername").value;
   signupPassword = document.getElementById("SignupPassword").value;


   if (signupUsername && signupPassword) {


      UserData = JSON.parse(localStorage.getItem("UserData"))

      if (UserData.SignupUsername == signupUsername && UserData.SignupPassword == signupPassword) {

         alert("Plz try to log_in")
         window.location.href = "index_log_in.htm";

      } else {

         UserData = {
            SignupUsername: signupUsername, SignupPassword: signupPassword
         }
         localStorage.setItem("UserData", JSON.stringify(UserData))

         alert("You'r Acc was add..! plz try to log_in.")

         window.location.href = "index_log_in.htm";


      }
   }

}

