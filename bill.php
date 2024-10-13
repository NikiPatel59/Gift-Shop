<?php
include("connection1.php");

 $giftid = implode(",",$_POST["giftname"]);
 $quantity = implode(",",$_POST["quantity"]);
 $discount = implode(",",$_POST["discount"]);

 if (isset($_POST['generatebill'])) {
  $sql = "INSERT INTO bills (gift_id,customer_id,quantity,discount_on_item,discount_on_total,bill_after_discount,bill_date,mobile_number)" .
         "VALUES ('" . $giftid. "','" . $_POST["customername"] . "', '" .$quantity . "','" . $discount . "','" . $_POST["discountonbill"] . "',
         '" .$_POST["billafterdiscount"] . "','" .$_POST["date"] . "','" .$_POST["mobilenumber"] . "')";
  $result = $conn->query($sql);

 $ids = $_POST['giftname'];
 $idss = $_POST['quantity'];
  $i= 0;
  //print_r($idss);
  //echo "<br>";
  foreach($ids as $value)
  {
   $idsout = $value;
   //echo $idsout;
    //echo $value;
    //echo "<br>";

    $sql1 = "select quantity from gift where id = ".$value;
     $resultt = $conn->query($sql1);
    $row=mysqli_fetch_assoc($resultt);
     print_r ($row);
     echo "<br>";

    $Quantity = $row['quantity'];
     echo $Quantity;
     echo "<br>";

     $newQuantity = $Quantity - $idss[$i];
      echo $newQuantity;
      //unset($idss[0]);
      echo "<br>";
      $i++;

     if($newQuantity > 0){
      $sql = "update gift set quantity = ".$newQuantity." where id = ".$value;  //update quantity
      $resulttt = $conn->query($sql);
     //if ($resulttt === TRUE) {
     // header('Location:billlisting.html');
     // exit;
                          //}
}
    else{
     echo '<script>alert("Please enter valid quantity")</script>';
 }
}

    echo "<br>";
}
else{
 echo '<script>alert("Data not been inserted")</script>';
}

?>