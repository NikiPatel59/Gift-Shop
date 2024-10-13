$(document).ready(function(){
  $("#addnewrow1").click(function(){
   var getnewrow = $("#head").append();
   $.ajax ('rowjs.php',{
     type: 'POST',
     data: { addnewrow: getnewrow },
     success: function (data) {
       $('#head').append(data);
                              }
                       });
                                 });
                           });
