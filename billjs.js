  $(document).ready(function(){
  $('#giftname1').change(function() {
    var getProductId = $('#giftname1').val();
    $.ajax ('billjs.php',{
      type: 'POST',  // http method
      data: { productId: getProductId },  // data to submit
      success: function (data) {
        alert ("1.="+data);
        $('#price1').val(data);
  }
 });
});

  $('#giftname1').change(function() {
    var getProductIdd = $('#giftname1').val();
    $.ajax ('billdisjs.php',{
      type: 'POST',  // http method
      data: { productIdd: getProductIdd },  // data to submit
      success: function (data) {
        $('#discount1').val(data);
   }
  });
 });

  $('#quantity1').change(function() {
     var num1 = $('#price1').val();
     var num2 = $('#quantity1').val();
     var total = parseFloat(num1) * parseFloat(num2);
      $('#totalamount1').val(total);
    });
  $('#quantity1').change(function () {
    var numb1 = $('#totalamount1').val();
    var numb2 = $('#discount1').val();
    var totalValue = numb1 * ( (100-numb2) / 100 );
     $('#totalafterdiscount1').val(totalValue.toFixed(2));
    });
});


