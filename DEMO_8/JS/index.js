function Registration_submit() {

    // Prevent page refresh on form submit
        
     event.preventDefault();

    // Get input values from HTML fields
    let FullName = document.getElementById("Full_Name").value;
    let Email = document.getElementById("Email").value;
    let Password = document.getElementById("Password").value;
    
    // Debug: print values in console
    // console.log(FullName, Email, Password);

    // Store data in array
    let UserData = [FullName, Email, Password];

    console.log(UserData)

    // -------- SESSION STORAGE (temporary - clears when tab closes) --------
    // sessionStorage.setItem("fullname", UserData[0]);
    // sessionStorage.setItem("email", UserData[1]);
    // sessionStorage.setItem("password", UserData[2]);

    // -------- LOCAL STORAGE (permanent - stays in browser) --------
    localStorage.setItem("fullname", UserData[0]);
    localStorage.setItem("email", UserData[1]);
    localStorage.setItem("password", UserData[2]);

    // Alert password (for testing only)
    // alert(UserData[2]);

    // -------- LOCALSTORAGE Geting the data (permanent - stays in browser) --------


}



function Registration_DATA(){
   
    event.preventDefault();
  
    fullname_by_localStorage = localStorage.getItem("fullname");
    email_by_localStorage = localStorage.getItem("email");
    password_by_localStorage = localStorage.getItem("password");
   
    
    document.getElementById("ViewFull_Name").value = fullname_by_localStorage;
    
    document.getElementById("ViewEmail").value = email_by_localStorage;

    document.getElementById("ViewPassword").value = password_by_localStorage;

}



function Registration_Edit(){
   
    event.preventDefault();
  
    fullname_by_localStorage = localStorage.getItem("fullname");
    email_by_localStorage = localStorage.getItem("email");
    password_by_localStorage = localStorage.getItem("password");
   
    
    document.getElementById("ViewFull_Name").value = fullname_by_localStorage;
    
    document.getElementById("ViewEmail").value = email_by_localStorage;

    document.getElementById("ViewPassword").value = password_by_localStorage;

     
    ViewFull_Name_Edit = document.getElementById("ViewFull_Name").value;

    ViewEmail_Edit = document.getElementById("ViewEmail").value;

    ViewPassword_Edit = document.getElementById("ViewPassword").value;

   

   Edit_data = [ViewFull_Name_Edit,ViewEmail_Edit,ViewPassword_Edit]


    localStorage.setItem("fullname", Edit_data[0]);
    localStorage.setItem("email",  Edit_data[1]);
    localStorage.setItem("password", Edit_data[2]);


  
}




  