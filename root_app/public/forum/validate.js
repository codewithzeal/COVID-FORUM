function makePost()
{
    var title=document.getElementById("title");
    var body= document.getElementById("body");
    if(!title||!body)
    {
        alert("All the fields are mandatory");
    }
    else
    {
        $.ajax({
        url: '/forum',
        method: 'POST',
        contentType: 'application/json',
        data:JSON.stringify({
            title: $('#title').val(),
            body: $('#body').val(),  
        }),
        success: function(response) {
            alert("Your question has been sucessfull posted");
        }
        });
    }
}