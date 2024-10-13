<?php
include("connection1.php");
  $query = "select price from gift where id=" . $_POST["productId"];
  $result = $conn->query($query);
  $row=mysqli_fetch_assoc($result);
  print $row["price"];
?>