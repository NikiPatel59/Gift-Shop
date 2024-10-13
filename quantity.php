<?php
include("connection1.php");
  $query = "select quantity from gift where id=" . $_POST["giftid"];
  $result = $conn->query($query);
  $row=mysqli_fetch_assoc($result);
  print $row["quantity"];

?>