$(document).ready(function(){
  $('#giftlist').change(function() {
    var getProductId = $('#giftlist').val();
    $.ajax ('selljs.php',{
      type: 'POST',  // http method
      data: { productId: getProductId },  // data to submit
      success: function (data) {
        $('#price').val(data);
                               }
                        });
                                  });
                            });
function mul_number() {
  var first_number = parseInt($('#price').val());
  var second_number = parseInt($('#quantityy').val());
  var result = first_number * second_number;
   $('#totalamount').val(result);
                      }