<?php
include("connection1.php");
 if (isset($_POST['submit'])) {
 include("connection1.php");
 $sql = "INSERT INTO gift (gift_name,price,quantity)" .
        "VALUES ( '" . $_POST["giftname"] . " ',".$_POST["price"] . "," . $_POST["quantity"] . ")";
 $result = $conn->query($sql);
 if($result == TRUE){
  //print_r($result);
  header('Location:giftshop.html');
                    }
 else{
       exit;
     }
                               }
 elseif (isset($_POST['submit1'])){
   $sql = "Update gift set gift_name='".$_POST["giftnamee"]."',"."price=".$_POST["pricee"].","."quantity=".$_POST["quantityyy"]." where id =".$_POST["id"];
      $resultt = $conn->query($sql);
       if ($resultt === TRUE) {
        header('Location:giftshop.html');
        exit;
                              }
      }
 else{
   $sql = "INSERT INTO customer (first_name,last_name,address,mobile_number,email)" .
        "VALUES ( '" . $_POST["firstname"] . " ','" . $_POST["lastname"] . " ','" . $_POST["address"] . " ','" . $_POST["mobilenumber"] . " ','" . $_POST["email"] . " ')";
    $resulttt = $conn->query($sql);
    if($resulttt === TRUE){
      header('Location:customerlist.html');
      exit;
    }
 }

?>