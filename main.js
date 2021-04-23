function loginForm()
{
    alert("Login Sucessful !");
    return true;
}

function registerForm()
{
    var pw1 = document.getElementById("password").value;
    var pw2 = document.getElementById("repeatPassword").value;
    if(pw1 != pw2)
    {
        alert("Password did not match");
        
    }
    else
    {
        alert("Register Sucessful !");
        
    }
}

function order()
{
    alert("Order Successful");
    return true;
}