 $(document).ready (function(){
 $('#bill1').validate({
  rules: {
   quantity[]: {
   required[]: true,
   quan: true,
},
   discount[]: {
   required: true,
   dis: true,
},
   discountonbill[]:{
    required: true,
    dison: true,
 },
},
   messages: {
    quantity[]:{
     required:'This field is required <br>',
     quan: 'This is invalid <br>',
    },
    discount[]: {
     required:'This field is required <br>',
     dis: 'This is invalid <br>',
    },
    discountonbill[]: {
     required:'This field is required <br>',
     dison: 'This is invalid <br>',
    },
},
  submitHandler: function(form) {
   form.submit();
 }
});
  $.validator.addMethod("quan",function(value, element) {
     return /^[0-9\s]+$/.test(value);
 });
   $.validator.addMethod("dis",function(value, element) {
     return /^[0-9\s]+$/.test(value);
 });
   $.validator.addMethod("dison",function(value, element) {
     return /^[0-9\s]+$/.test(value);
 });
});
});
//});
