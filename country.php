  <?php
include("connection1.php");
  $query = "select state_name from state where country_id=" . $_POST["productId"];
  $result = $conn->query($query);
  $row=mysqli_fetch_assoc($result);
  print $row["price"];
  
?>