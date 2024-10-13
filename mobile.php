<?php
include ("connection1.php");
if ($_POST["validatefield"]=='mobile'){
$query="SELECT mobile_number from customer where mobile_number=" . $_POST["fieldvalue"];
$result = $conn->query($query);
$row = mysqli_num_rows($result);
echo $row;
}
elseif ($_POST["validatefield"]=='email'){
$emaill="SELECT email from customer where email='" . $_POST["fieldvalue"]."'";
$resultt = $conn->query($emaill);
$rows = mysqli_num_rows($resultt);
echo $rows;
}
else{
  echo "Hello";
}
?>