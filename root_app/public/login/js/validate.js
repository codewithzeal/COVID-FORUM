function Validate()
{
    var name=document.getElementById("name").value.toString();
    var password=document.getElementById("password").value.toString();
    if(!name||!password)
    {
        alert("Both the fields are necessary");
        return false;
    }
    else
    {
        $.ajax({
            url: '/login',
            method: 'POST',
            contentType: 'application/json',
            data:JSON.stringify({
                name: $('#name').val(),
                password: $('#password').val(),  
            }),
            success: function(response) {
                if(response=="N")
                alert("Invalid login credential");
                else
                window.location.replace("http://localhost:3000/welcome");
            }
        });
    }
}