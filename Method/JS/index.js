// let inputValue;

function sendTo() {

    event.preventDefault();

    inputValue = document.getElementById("inputField").value
    let PhoneNumbers = document.getElementById("PhoneNumbers").value;

    // let PhoneNumbers = "0000000000";
    
    let url = "https://wa.me/"+PhoneNumbers + 
    "?text= "+ encodeURIComponent("TO: "+inputValue);

    window.open(url,"_blank");
    
}


