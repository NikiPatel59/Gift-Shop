 <?php
include("connection1.php");
$query = "select discount from gift where id=" . $_POST["productId2"];
  $resultt = $conn->query($query);
  $row=mysqli_fetch_assoc($resultt);
  print $row["discount"];
?>