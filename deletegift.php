<?php
include("connection1.php");
$sql = "delete from gift where id = " . $_GET["gift_name"] ;
   $delete=$conn->query($sql);
    if ($delete === TRUE) {
     header('Location:giftshop.html');
      exit;
                          }