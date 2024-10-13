$(document).ready(function(){
$('#removerow').click(function () {
  $(this).closest("tr").remove();
   var value = $('#counter').val();
    value = parseInt(value)-1;
    $('#counter').val(value);
     
    
  });
 });
 