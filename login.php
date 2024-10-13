<?php
include("connection1.php");
    
     $sql = "select username,password from person where username='".$_POST["username"]."' and password='".$_POST["password"]."'";
     $eemp = $conn->query($sql);

     if(mysqli_num_rows($eemp)>0){
      session_start();
      $_SESSION["username"]=$_POST["username"];
       //print_r ($_SESSION);
      //echo "<p style='color:red; text-align:center;'>"."Welcome " . $_SESSION["username"]."</p>";
       header("Location:giftshop.html");
                                 }

     else{
      echo '<script>alert("Incorrect Password")</script>';
      die('You do not have access to this page');
         }
?>
