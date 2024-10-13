<?php
 include("connection1.php");
  $sql = "select quantity from gift where id = ".$_POST["giftlist"];
  $result = $conn->query($sql);
  //print_r($result);
   $newquantity = mysqli_fetch_assoc($result);
    echo $newquantity["quantity"];
    echo "<br>";
     $updatequantity = $newquantity["quantity"] - $_POST["quantityy"];  //To minus quantity from total
      echo $updatequantity; 
      if($updatequantity > 0){
  $sql = "update gift set quantity = ".$updatequantity." where id = ".$_POST["giftlist"];  //update quantity
  $resultt = $conn->query($sql);
   if ($resultt === TRUE) {
        header('Location:giftshop.html');
        exit;
                          }
                          }
   else{
    echo '<script>alert("Please enter valid quantity")</script>';
    //header('Location:gift.html');
    // exit;
                             }
 ?>