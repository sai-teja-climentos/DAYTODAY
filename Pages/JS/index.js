function LoginForm(){
    
   event.preventDefault();

   JS_Username = "HTML";

   JS_Password = "CSS";

    Username = document.getElementById("Username").value;

    Password = document.getElementById("Password").value;

    if(JS_Username==Username && JS_Password==Password){

    //    alert("welcome to the new loning page..!")

       window.location.href = "demo.htm";

    }else{
        //  alert("SORRY THE PAGE WAS NOT FOR YOU...! ERORR")
       window.location.href = "erorr.htm";


    }

}


