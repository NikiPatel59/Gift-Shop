 <?php
include("connection1.php");
$sql = "delete from bills where id = " . $_GET["id"] ;
   $delete=$conn->query($sql);
    if ($delete === TRUE) {
     header('Location:billlisting.html');
     exit;
     //echo "Hello";
                          }