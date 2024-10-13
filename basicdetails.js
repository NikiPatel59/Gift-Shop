  $(document).ready(function(){

  $('#customer').change(function() {
   var getProductId = $('#customer').val();
   alert (getProductId);
    $.ajax ('basicmob.php',{
    type: 'POST',  // http method
    data: { productId: getProductId },  // data to submit
    success: function (data) {
    //alert ("1.="+data);
   $('#mobilenumber').val(data);
  }
 });
});

$('#customer').change(function() {
   var getProductId1 = $('#customer').val();
   alert (getProductId1);
    $.ajax ('basicem.php',{
    type: 'POST',  // http method
    data: { productId1: getProductId1 },  // data to submit
    success: function (data) {
    //alert ("1.="+data);
   $('#email').val(data);
  }
 });
});
  });