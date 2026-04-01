function BUTTON_FUNCTION() {
    // window.location.href='index.html'
    alert("Button Clicked")
}

user = {

    name: "SUNNY",
    phone: 1234567890,
    email: "sunny@example.com",

    greet() {
        return this.name + this.phone + this.email
    }

    // sessionStorage.setitem

    // localStorage.setitem
}

localStorage.setItem("user_key",JSON.stringify(user))






