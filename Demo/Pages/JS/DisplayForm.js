
function displayForm() {

   event.preventDefault();
   UserData = JSON.parse(localStorage.getItem("UserData"))
   ARRData = [UserData.FullName, UserData.Emailaddress, UserData.PhoneNumber]
   
   document.getElementById("InputImgDS_").src = localStorageIMG_DATA = localStorage.getItem("IMG_DATA") || "Input Img DS Not Found..!"
   document.getElementById("FullNameDS_").textContent = ARRData[0] || "Full Name Not Found..!";
   document.getElementById("UserNameDS_").textContent = localStorage.getItem("SignupUsername") || "UserName Not Found..!";
   document.getElementById("EmailAddressDS_").textContent = ARRData[1] || "Email Address Not Found..!";
   document.getElementById("PhoneNumberDS_").textContent = ARRData[2] || "Phone Number Not Found..!";
}



