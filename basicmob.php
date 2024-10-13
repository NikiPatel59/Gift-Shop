<?php
include("connection1.php");
  $query = "select mobile_number from customer where id=" . $_POST["productId"];
  $result = $conn->query($query);
  $row=mysqli_fetch_assoc($result);
  print $row["mobile_number"];
  
?>