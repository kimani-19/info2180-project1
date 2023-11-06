/* Add your JavaScript to this file */
window.onload=function(){
    var button = document.getElementsByClassName("btn")[1];
    button.addEventListener("click", function(e){
        var email= document.getElementById("email").value;
        var Text = document.getElementsByClassName("message")[0];
        var passMessage = "Thank you! Your email address" + email +  "has been added to mailing list";
        var errorMessage = "Please enter a valid email address";

        if (email.length ==0){
            Text.textContent= errorMessage;
        }

        else if(email.length > 0){
            Text.textContent=passMessage;
        }
        e.preventDefault();
    });
}