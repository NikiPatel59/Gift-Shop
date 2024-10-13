<?php
include("connection1.php");
  $query = "select email from customer where id=" . $_POST["productId1"];
  $result = $conn->query($query);
  $row=mysqli_fetch_assoc($result);
  print $row["email"];
  
?>