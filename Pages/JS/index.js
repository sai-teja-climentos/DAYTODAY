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


function UplodeForm(event){

 event.preventDefault();


// const imageInput = document.getElementById("image_up").files[0];

full_name = document.getElementById("FullName").value;

emailaddress = document.getElementById("EmailAddress").value;

phonenumber = document.getElementById("PhoneNumber").value;


// addEventListener("change", function(){


//    const file = imageInput.files[0]   //geting files valus

//    const reader = new FileReader();

//    reader.onload = function(e){

//       const imgDate = e.target.result

//       //Storageing the in  localStorage;

//       localStorage.setItem("Profile_image",imgDate)

//    };

//    if(file){
//       reader.readAsDataURL(file);
//    }

// });

// window.onload =function(){

//    const savedImage = this.localStorage.getItem("Profile_image");

//    if(savedImage){

//      document.getElementById("preview").src = savedImage;

//    }

// };





// alert(imgDate);

localStorage.setItem("FullName",full_name);

localStorage.setItem("EmailAddress",emailaddress);

localStorage.setItem("PhoneNumber",phonenumber);



}



