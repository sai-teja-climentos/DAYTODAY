
function displayForm() {

   event.preventDefault();

  const localStorageIMG_DATA = localStorage.getItem("IMG_DATA");

   localStorageFullName = localStorage.getItem("FullName");

   localStorageEmailAddress = localStorage.getItem("EmailAddress");

   localStoragePhoneNumber = localStorage.getItem("PhoneNumber");

   localStorageSignupUsername = localStorage.getItem("SignupUsername");


   document.getElementById("InputImgDS_").src = localStorageIMG_DATA || "Input Img DS Not Found..!"



   document.getElementById("FullNameDS_").textContent = localStorageFullName || "Full Name Not Found..!";
   document.getElementById("UserNameDS_").textContent = localStorageSignupUsername || "UserName Not Found..!";
   document.getElementById("EmailAddressDS_").textContent = localStorageEmailAddress || "Email Address Not Found..!";
   document.getElementById("PhoneNumberDS_").textContent = localStoragePhoneNumber || "Phone Number Not Found..!";


}



