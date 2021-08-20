function Validate()
{
    var name=document.getElementById("first_name").value.toString();
    var email=document.getElementById("email_address").value.toString();
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var password=document.getElementById("password").value.toString();
    var confirm_password=document.getElementById("confirm_password").value.toString();
    userType=document.getElementById("type").checked;
    if(!userType)
    userType="0";
    else
    userType="1"
    if(!name || !email||!password||!confirm_password)
    {
        alert("All the fields are necesarry");
        return false;
    }
    else if(!email.match(mailformat))
    {
        alert("Please enter a correct mail format");
        return false;
    }
    else if(password!==confirm_password)
    {
        alert("the passwords do not match");
        return false;
    }
    else
    {
        
            $.ajax({
                url: '/Home',
                method: 'POST',
                contentType: 'application/json',
                data:JSON.stringify( {
                    first_name: $('#first_name').val(),
                    email_address: $('#email_address').val(),
                   password: $('#password').val(),
                   userType:userType
                }),
                success: function(response) {
                    if(response=="E")
                    {
                       alert("USer exits");
                    }
                    else
                    {
                        alert(response);
                        window.location.replace("http://localhost:3000/login");
                    }
                }
            });
        
    }
}