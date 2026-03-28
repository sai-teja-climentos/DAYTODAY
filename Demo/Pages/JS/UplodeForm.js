
function UplodeForm() {

   const InputImage = document.getElementById("Img_Input");

   full_name = document.getElementById("FullName").value;

   emailaddress = document.getElementById("EmailAddress").value;

   phonenumber = document.getElementById("PhoneNumber").value;


   const file = InputImage.files[0];

   // alert("GOing1")

   if (!file) return;

   const reader = new FileReader();

   reader.onload = function (e) {

      const base64Image = e.target.result;

      localStorage.setItem("IMG_DATA", base64Image)

      // alert("GOing"+base64Image+"GOing")

   };

   // alert("GOing2")


   reader.readAsDataURL(file);


   localStorage.setItem("FullName", full_name);

   localStorage.setItem("EmailAddress", emailaddress);

   localStorage.setItem("PhoneNumber", phonenumber);

   // alert("GOing3")

}
