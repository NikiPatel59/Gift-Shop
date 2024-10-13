$(document).ready (function(){
$('#addgift').validate({
  rules: {
   giftname: 'required',
   price: 'required',
   quantity: 'required',
},
   messages: {
    giftname: 'This field is required <br>',
    price: 'This field is required <br>',
    quantity: 'This field is required <br>',
},
  submitHandler: function(form) {
   form.submit();
  }
 });
});