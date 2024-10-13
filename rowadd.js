$(document).ready(function(){

  $('#giftname1').change(function() {
   var getProductId = $('#giftname1').val();
    $.ajax ('billjs.php',{
    type: 'POST',  // http method
    data: { productId: getProductId },  // data to submit
    success: function (data) {
    //alert ("1.="+data);
   $('#price1').val(data);
  }
 });
});

  //$('#giftname1').change(function() {
  // var getProductIdd = $('#giftname1').val();
  // $.ajax ('billdisjs.php',{
  //  type: 'POST',  // http method
  //  data: { productIdd: getProductIdd },  // data to submit
  //  success: function (data) {
 //  $('#discount1').val(data);
 // }
 //});
//});

  $('#quantity1').change(function() {
   var numm1 = $('#price1').val();
   var numm2 = $('#quantity1').val();
   var totall = parseFloat(numm1) * parseFloat(numm2);
   $('#totalamount1').val(totall);
   var getgiftid = $('#giftname1').val();
   alert (getgiftid);
   $.ajax ('quantity.php',{
    type: 'POST',  // http method
    data: { giftid: getgiftid },
    success: function (data) {
      alert (data);
    if(data<numm2){
     $("#quan").html("Please enter valid quantity");
    $('#quantity1').val('');
   }
  }
 });
});

  $('#discount1').change(function () {
   var numbb1 = $('#totalamount1').val();
   var numbb2 = $('#discount1').val();
   var totalValuee = numbb1 * ( (100-numbb2) / 100 );
   $('#totalafterdiscount1').val(totalValuee.toFixed(2));

    storevalue.push(totalValuee);
    var sum = 0;
    for (let i = 0; i < storevalue.length; i++) {
     sum += storevalue[i];
   }
    $('#total').val(sum.toFixed(2));
    var totaa = $('#billafterdiscount').val(sum);
    totalbill.push(totaa);
  });
  
  $('#discountonbill').change(function () {
   var number1 = $('#total').val();
   var number2 = $('#discountonbill').val();
   var totaldiscount = number1 * ( (100-number2) / 100 );
   var totalls = $('#billafterdiscount').val(totaldiscount.toFixed(2));
  });

  $('#addnewrow').click(function () {
   var value = $('#counter').val();
    value = parseInt(value)+1;
    $('#counter').val(value);

    $.ajax ('rowadd.php',{
    type: 'POST',
    success: function (data){
    // alert ("2.="+data);
    $("#giftname" + value).html(data);
  }
 });

   var div = $("<tr id='row"+value+"' />");
   div.html(GetDynamicTextBox(value));
   var row = $("#TextBoxContainer").append(div);
  });
  
  $('#removerow1').click(function () {
   $("#row1").remove();
 });
 
});
  const storevalue = [];
  const storeevalue = [];
  const totalbill = [];

function onGiftChange(giftId)
{ 
   var getProductId1 = $('#giftname'+giftId).val();
    $.ajax ('priceadd.php',{
    type: 'POST',  // http method
    data: { productId1: getProductId1 },  // data to submit
    success: function (data) {
    // alert ("3.="+data);
   $('#price'+giftId).val(data);
  }
 });

  // var getProductId2 = $('#giftname'+giftId).val();
  //  $.ajax ('disadd.php',{
  //  type: 'POST',  // http method
   // data: { productId2: getProductId2 },  // data to submit
   // success: function (data) {
    //alert ("2.="+data);
    //$('#discount'+giftId).val(data);
  //}
 //});
}

function onquantitychange(quantityid){
   var num1 = $('#price'+quantityid).val();
   var num2 = $('#quantity'+quantityid).val();
   var total = parseFloat(num1) * parseFloat(num2);
   $('#totalamount'+quantityid).val(total);
}

function ondiscountchange(discountid){
   var numb1 = $('#totalamount'+discountid).val();
   var numb2 = $('#discount'+discountid).val();
   var totalValue = numb1 * ( (100-numb2) / 100 );
   $('#totalafterdiscount'+discountid).val(totalValue.toFixed(2))

   storevalue.push(totalValue);
   alert (storevalue);
    var sum = 0;
    for (let i = 0; i < storevalue.length; i++) {
     sum += storevalue[i];
   }
   $('#total').val(sum.toFixed(2));
   var numbw = $('#billafterdiscount').val();
   var numby = $('#totalafterdiscount'+discountid).val();
   var totalbills = parseInt(numbw)+parseInt(numby);
   $('#billafterdiscount').val(totalbills.toFixed(2));
   

   //$('#billafterdiscount').val(tota);
   //alert (sum);
       
}

function clickremove(remo){
   alert (remo);
  var val1 = $('#totalafterdiscount'+remo).val();
   alert (val1);
  var val2 = $('#total').val();
   alert (val2);
  var newtotal = val2-val1;
   alert (newtotal);
   $('#total').val(newtotal.toFixed(2));
  var billam = $('#billafterdiscount').val();
  var vall1 = $('#totalafterdiscount'+remo).val();
  var newbill = parseInt(billam)-parseInt(val1);
  $('#billafterdiscount').val(newbill);
   $("#row"+remo).remove();
}

function GetDynamicTextBox(value)
{
  var textbox1 =  '<td><select name ="giftname[]" class = "gifts" id = "giftname'+ value +'" onchange="onGiftChange('+value+');"></option></select></td>';
  var textbox2 =  '<td><input type="text" name="price[]" id="price'+ value +'" disabled></td>';
  var textbox3 =  '<td><input type="text" name="quantity[]" id="quantity'+ value +'" onchange="onquantitychange('+value+');"></td>';
  var textbox4 =  '<td><input type="text" name="totalamount[]" id="totalamount'+ value +'" disabled></td>';
  var textbox5 =  '<td><input type="text" name="discount[]" id="discount'+ value +'" onchange="ondiscountchange('+value+');"></td>';
  var textbox6 =  '<td><input type="text" name="totalafterdiscount[]" id="totalafterdiscount'+ value +'" onchange="ontotalchange('+value+');" disabled ></td>';
  var textbox7 =  '<td><input type = "button" value = "Remove Row" name = "removerow" id = "removerow'+value+'" onclick="clickremove('+value+');"></button></td>';
  return textbox1 + textbox2 + textbox3 + textbox4 + textbox5 + textbox6 + textbox7;
}





