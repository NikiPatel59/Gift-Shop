$(document).ready(function(){
$('#mobilenumber1').change(function() {
   var getmobilenumber = $('#mobilenumber1').val();
   //alert (getmobilenumber);
    $.ajax ('mobile.php',{
   type: 'POST',  // http method
   data: {'fieldvalue':getmobilenumber, 'validatefield':'mobile'},// data to submit
    success: function (data) {
    // alert (data);
     if(data>0){
     $("#mob").html("Please add unique mobile number");
     $('#mobilenumber1').val('');
}
    else if(/^[a-zA-Z0-9- ]*$/.test(data) == false) {
      $("#mob").html("Your mobile number contain illegal characters");
}
    else{
      $("#mob").html("Unique mobile number");
}
   }
  });
 });
 
$('#email1').change(function() {
   var getemail = $('#email1').val();
   //alert (getemail);
    $.ajax ('mobile.php',{
   type: 'POST',  // http method
   data: {'fieldvalue':getemail, 'validatefield':'email'},// data to submit
    success: function (data) {
    // alert (data);
     if(data>0){
     $("#emai").html("Please add unique email Id");
     $('#email1').val('');
}
    else{
      $("#emai").html("Unique email");
}
   }
  });
 });
});



