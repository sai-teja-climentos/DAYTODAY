function SignupForm() {

   event.preventDefault();

   signupUsername = document.getElementById("SignupUsername").value;
   signupPassword = document.getElementById("SignupPassword").value;


   if (signupUsername && signupPassword) {


      StorageUsername = localStorage.getItem("SignupUsername");
      StoragePassword = localStorage.getItem("SignupPassword");


      if (StorageUsername == signupUsername && StoragePassword == StoragePassword) {

         alert("Plz try to log_in")
         window.location.href = "index_log_in.htm";

      } else {
         localStorage.setItem("SignupUsername", signupUsername);
         localStorage.setItem("SignupPassword", signupPassword);

         alert("You'r Acc was add..! plz try to log_in.")

         window.location.href = "index_log_in.htm";


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

      window.location.href = "Uplode.htm"


   } else {

      alert("Erorr")

   }


}

function UplodeForm() {

   const InputImage = document.getElementById("Img_Input");

   full_name = document.getElementById("FullName").value;

   emailaddress = document.getElementById("EmailAddress").value;

   phonenumber = document.getElementById("PhoneNumber").value;


   
   
   InputImage.addEventListener("change" , function(){
      
      const file = InputImage.file[0];
      
      alert("hi798798798")
   if(!file) return;

  const reader = new FileReader();

  reader.onload = function(e){
  
   const base64Image = e.target.result;

   

  };

  reader.readAsDataURL(file);


  });


   localStorage.setItem("FullName", full_name);

   localStorage.setItem("EmailAddress", emailaddress);

   localStorage.setItem("PhoneNumber", phonenumber);


}


function displayForm() {

   event.preventDefault();



   localStorageFullName = localStorage.getItem("FullName");

   localStorageEmailAddress = localStorage.getItem("EmailAddress");

   localStoragePhoneNumber = localStorage.getItem("PhoneNumber");

   localStorageSignupUsername = localStorage.getItem("SignupUsername");


   document.getElementById("FullNameDS_").textContent = localStorageFullName || "Full Name Not Found..!";
   document.getElementById("UserNameDS_").textContent = localStorageSignupUsername || "UserName Not Found..!";
   document.getElementById("EmailAddressDS_").textContent = localStorageEmailAddress || "Email Address Not Found..!";
   document.getElementById("PhoneNumberDS_").textContent = localStoragePhoneNumber || "Phone Number Not Found..!";


}





