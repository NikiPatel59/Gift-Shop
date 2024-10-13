$(document).ready(function(){
    $("#addnewrow").click(function () {
    var getprice = $('#giftname1').val();
    $.ajax ('rowadd.php',{
     type: 'POST',
     data: { gift_name:getprice },
     success: function (data) {
     //alert (data);
     $("#giftname1").html(data);
                              }
                         });

    $('#giftname1').change(function() {
    var getProductId1 = $('#giftname1').val();
    $.ajax ('priceadd.php',{
     type: 'POST',  // http method
     data: { productId1: getProductId1 },  // data to submit
     success: function (data) {
     // alert (data);
     $('#price2').val(data);
                              }
                           });
                                     });

    $('#giftname1').change(function() {
    var getProductId2 = $('#giftname1').val();
    $.ajax ('disadd.php',{
     type: 'POST',  // http method
     data: { productId2: getProductId2 },  // data to submit
     success: function (data) {
     //alert (data);
     $('#discount2').val(data);
                              }
                         });
                                    });

    $('#quantity2').change(function () {
    var num1 = $('#price2').val();
    var num2 = $('#quantity2').val();
    var total = parseFloat(num1) * parseFloat(num2);
     $('#totalamount1').val(total);
                                       });

    $('#quantity2').change(function () {
    var numb1 = $('#totalamount1').val();
    var numb2 = $('#discount2').val();
    var totalValue = numb1 * ( (100-numb2) / 100 );
    $('#totalafterdiscount1').val(totalValue.toFixed(2));
                                       });
    
    var div = $("<tr />");
    div.html(GetDynamicTextBox(""));
    var row = $("#TextBoxContainer").append(div);

    var value = $('.counter1').val();
    var value = value+1;

});

    
    
     });

  function GetDynamicTextBox(){
     var textbox1 =  '<td><select name ="giftname1" id = "giftname1"><option value></option> </td>';
     var textbox2 =  '<td><input type="text" name="price2" id="price2" disabled></td>';
     var textbox3 =  '<td><input type="text" name="quantity2" id="quantity2"></td>';
     var textbox4 =  '<td><input type="text" name="totalamount1" id="totalamount1" disabled></td>';
     var textbox5 =  '<td><input type="text" name="discount2" id="discount2" disabled></td>';
     var textbox6 =  '<td><input type="text" name="totalafterdiscount1" id="totalafterdiscount1" disabled ></td>';
     var textbox7 =  '<td><input type="text" class = "counter1" name="counter1" id="counter1" value="1"></td>';
     return  textbox1 +  textbox2 +  textbox3 +  textbox4 +  textbox5 +  textbox6 + textbox7;
                                }
                                });
