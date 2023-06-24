function login(){
    var username = document.getElementById("username").value;
    if(username == ""){
        alert("Please write a username");
    }else{
        localStorage.setItem("USERNAME", username);
        window.location = "Room.html";
    }
}