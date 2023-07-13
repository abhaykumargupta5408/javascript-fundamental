function checkpassword (){
    let password = document.getElementById ("password").value;
    let conformpassword= document.getElementById("conform-password").value;

    console.log(password,conformpassword);

    let massage = document.getElementById("massage");

    if(password.length != 0){
        if(password == conformpassword){
            massage.textContent= "password match";
            massage.style.backgroundColor="#3ae374";
            alert("Password validation Successful")

        }
        else{
            massage.textContent= "passward don't match";
            massage.style.backgroundColor=" #ff0000";
            massage.style.color="white"
            alert("Password validation unsuccessful")
            
        }
}

}
