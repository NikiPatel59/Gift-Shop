 $(document).ready(function(){
    $("#addnewrow").bind("click", function () {
    var row = '<tr>'+
    '<td></td>'+
    '<td><input type = "number" id = "price" name = "price" disabled></td>'+
    '<td><input type = "number" id = "quantity1" name = "quantity1"></td>'+
    '<td><input type = "number" id = "totalamount" name = "totalamount" disabled></td>'+
    '<td><input type = "number" id = "discount1" name = "discount1" disabled></td>'+
    '<td><input type = "number" id = "totalafterdiscount" name = "totalafterdiscount" disabled></td>'+'</tr>';
    $("#TextBoxContainer").append(row);
    });
 });
 
 $(document).ready(function(){
    $("#addnewrow").bind("click", function () {
      var getprice = $('#price1').val();
    $.ajax ('rowadd.php',{
      type: 'POST',
      data: { price:getprice },
      success: function (data) {
        //alert (data);
        $("#price2").val(data);
                               }
                         });
    var div = $("<tr />");
    div.html(GetDynamicTextBox(""));
    var row = $("#TextBoxContainer").append(div);
                                             });
    function GetDynamicTextBox(){

     var textbox1 =  '<td><select name = "giftname" id = "giftname"><option value></option> </td>';
     var textbox2 =  '<td><input type="text" name="price2" id="price2" disabled></td>';
     var textbox3 =  '<td><input type="text" name="price3" id="price3" ></td>';
     var textbox4 =  '<td><input type="text" name="price4" id="price4" disabled></td>';
     var textbox5 =  '<td><input type="text" name="price5" id="price5" disabled></td>';
     var textbox6 =  '<td><input type="text" name="price6" id="price6" ></td>';
     return  textbox1 +  textbox2 +  textbox3 +  textbox4 +  textbox5 +  textbox6;
                                }
                              });
                              
                              
                              
   $(document).ready(function () {
    $('#quantity1').change(function () {
      var numm1 = $('#price').val();
      var numm2 = $('#quantity1').val();
      var total1 = parseFloat(numm1) * parseFloat(numm2);
      $('#totalamount').val(total1);
      
    });
});
  $(document).ready(function () {
    $('#quantity1').change(function () {
      var nummm1 = $('#totalamount').val();
      var nummm2 = $('#discount1').val();
      var totallValue = nummm1 * ( (100-nummm2) / 100 );
   $('#totalafterdiscount').val(totallValue.toFixed(2));
    });
  });
  

  
  
 