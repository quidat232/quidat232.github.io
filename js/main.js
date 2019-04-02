var myform = $("#contact_form");
myform.submit(function(event){
    event.preventDefault();
    // var template_params = {
    //   "reply_to": "reply_to_value",
    //   "from_name": "from_name_value",
    //   "to_name": "to_name_value",
    //   "message_html": "message_html_value"
    // }
    var service_id = "default_service";
    var template_id = "template_41hjX9ha";
    emailjs.sendForm(service_id, template_id ,myform[0]).then(function(){
        alert("Gửi mail thành công");
        window.location.reload();
    },function(err){
        alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
    })
})