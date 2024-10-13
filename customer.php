<?php
include("connection1.php");
 if(isset($_POST['submit2'])){
   $sql = "INSERT INTO customer (first_name,last_name,address,mobile_number,email)" .
        "VALUES ( '" . $_POST["firstname"] . "','" . $_POST["lastname"] . "','" . $_POST["address1"] . "'," . $_POST["mobilenumber1"] . " ,'" . $_POST["email1"] . "')";
 $resulttt = $conn->query($sql);
   if($resulttt == TRUE){
    header('Location:customerlist.html');
     exit;
                         }
 }
 else{
   $sql = "Update customer set first_name='".$_POST["firstname1"]."',last_name='".$_POST["lastname1"]."',address='".$_POST["address2"]."',mobile_number=".$_POST["mobilenumber2"].",email='".$_POST["email2"]."' where id =".$_POST["id"];
      $resultt = $conn->query($sql);
       if ($resultt === TRUE) {
        header('Location:customerlist.html');
        exit;
                              }
 }
    ?>