$(document).ready(function(){
$('#country').change(function() {
   var getProductId1 = $('#country').val();
   $.ajax ('state.php',{
    type: 'POST',  // http method
    data: { productId1: getProductId1 },  // data to submit
    success: function (data) {
    //alert ("1.="+data);
   $('#state').html(data);
  }
 });
});

$('#state').change(function() {
   var getProductId2 = $('#state').val();
   alert (getProductId2);
   $.ajax ('city.php',{
    type: 'POST',  // http method
    data: { productId2: getProductId2 },  // data to submit
    success: function (data) {
    //alert ("1.="+data);
   $('#city').html(data);
   }
  });
 });
});