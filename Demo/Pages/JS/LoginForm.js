function LoginForm() {

   event.preventDefault();

   Username = document.getElementById("Username").value;
   Password = document.getElementById("Password").value;

   UserData = JSON.parse(localStorage.getItem("UserData"))


   if (Username == UserData.SignupUsername && Password == UserData.SignupPassword) {

      window.location.href = "Uplode.htm"


   } else {

      alert("Erorr")

   }


}
